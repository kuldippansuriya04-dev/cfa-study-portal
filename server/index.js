import crypto from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import { db, migrate, publicUser } from './database.js';
import {
  cleanName,
  detectIdentifier,
  isEmail,
  isMobile,
  normalizeEmail,
  normalizeMobile,
  requireFields,
  validatePassword,
} from './validation.js';

dotenv.config();
migrate();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT || 3000);
const jwtSecret = process.env.JWT_SECRET || 'change-this-secret-before-production';
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || '7d';
const bcryptRounds = Number(process.env.BCRYPT_ROUNDS || 12);
const isProduction = process.env.NODE_ENV === 'production';

app.disable('x-powered-by');
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: process.env.CORS_ORIGIN || true, credentials: true }));
app.use(express.json({ limit: '32kb' }));
app.use(cookieParser());

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many login attempts. Please try again after 15 minutes.' },
});

const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many password reset attempts. Please try again later.' },
});

function signToken(user) {
  return jwt.sign(
    { sub: String(user.id), email: user.email, mobileNumber: user.mobile_number },
    jwtSecret,
    { expiresIn: jwtExpiresIn },
  );
}

function setSessionCookie(res, token) {
  res.cookie('cfa_session', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: isProduction,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

function getBearerToken(req) {
  const header = req.get('authorization') || '';
  if (header.startsWith('Bearer ')) return header.slice(7);
  return req.cookies.cfa_session;
}

function authRequired(req, res, next) {
  try {
    const token = getBearerToken(req);
    if (!token) return res.status(401).json({ error: 'Authentication required.' });
    const payload = jwt.verify(token, jwtSecret);
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(Number(payload.sub));
    if (!user) return res.status(401).json({ error: 'Account not found.' });
    req.user = user;
    return next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired session.' });
  }
}

function findUserByIdentifier(identifier) {
  if (identifier.type === 'email') {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(identifier.value);
  }
  if (identifier.type === 'mobile') {
    return db.prepare('SELECT * FROM users WHERE mobile_number = ?').get(identifier.value);
  }
  return null;
}

function createOtp() {
  return String(crypto.randomInt(100000, 1000000));
}

async function createPasswordReset(user, channel) {
  const target = channel === 'email' ? user.email : user.mobile_number;
  const otp = createOtp();
  const resetId = crypto.randomUUID();
  const otpHash = await bcrypt.hash(otp, bcryptRounds);
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

  db.prepare(`
    INSERT INTO password_reset_otps (id, user_id, channel, target, otp_hash, expires_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(resetId, user.id, channel, target, otpHash, expiresAt);

  // Replace this function with SMTP/SMS provider calls in production.
  console.log(`[password-reset:${channel}] ${target} OTP: ${otp}`);
  return { resetId, otp: isProduction ? undefined : otp, target, expiresAt };
}

async function verifyResetOtp(resetId, otp, markVerified = false) {
  const row = db.prepare('SELECT * FROM password_reset_otps WHERE id = ?').get(String(resetId || ''));
  if (!row || row.consumed_at) return { ok: false, error: 'Invalid or expired reset request.' };
  if (new Date(row.expires_at).getTime() < Date.now()) return { ok: false, error: 'OTP has expired.' };
  if (row.attempts >= 5) return { ok: false, error: 'Too many incorrect OTP attempts.' };

  const ok = await bcrypt.compare(String(otp || ''), row.otp_hash);
  if (!ok) {
    db.prepare('UPDATE password_reset_otps SET attempts = attempts + 1 WHERE id = ?').run(row.id);
    return { ok: false, error: 'Invalid OTP.' };
  }

  if (markVerified && !row.verified_at) {
    db.prepare("UPDATE password_reset_otps SET verified_at = datetime('now') WHERE id = ?").run(row.id);
  }
  return { ok: true, row };
}

app.post('/api/auth/register', async (req, res) => {
  const requiredError = requireFields(req.body, ['fullName', 'email', 'mobileNumber', 'password', 'confirmPassword']);
  if (requiredError) return res.status(400).json({ error: requiredError });

  const fullName = cleanName(req.body.fullName);
  const email = normalizeEmail(req.body.email);
  const mobileNumber = normalizeMobile(req.body.mobileNumber);
  const password = String(req.body.password);

  if (fullName.length < 2) return res.status(400).json({ error: 'Full name must be at least 2 characters.' });
  if (!isEmail(email)) return res.status(400).json({ error: 'Invalid email address.' });
  if (!isMobile(mobileNumber)) return res.status(400).json({ error: 'Invalid mobile number.' });
  if (password !== String(req.body.confirmPassword)) return res.status(400).json({ error: 'Passwords do not match.' });
  const passwordError = validatePassword(password);
  if (passwordError) return res.status(400).json({ error: passwordError });

  const emailExists = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  if (emailExists) return res.status(409).json({ error: 'Email address is already registered.' });
  const mobileExists = db.prepare('SELECT id FROM users WHERE mobile_number = ?').get(mobileNumber);
  if (mobileExists) return res.status(409).json({ error: 'Mobile number is already registered.' });

  const passwordHash = await bcrypt.hash(password, bcryptRounds);
  const result = db.prepare(`
    INSERT INTO users (full_name, email, mobile_number, password_hash, updated_at)
    VALUES (?, ?, ?, ?, datetime('now'))
  `).run(fullName, email, mobileNumber, passwordHash);
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid);
  const token = signToken(user);
  setSessionCookie(res, token);
  return res.status(201).json({ token, user: publicUser(user) });
});

app.post('/api/auth/login', loginLimiter, async (req, res) => {
  const requiredError = requireFields(req.body, ['identifier', 'password']);
  if (requiredError) return res.status(400).json({ error: requiredError });

  const identifier = detectIdentifier(req.body.identifier);
  if (identifier.type === 'invalid') return res.status(400).json({ error: 'Invalid email/mobile.' });

  const user = findUserByIdentifier(identifier);
  if (!user) return res.status(404).json({ error: 'Account not found.' });

  const passwordOk = await bcrypt.compare(String(req.body.password), user.password_hash);
  if (!passwordOk) return res.status(401).json({ error: 'Wrong password.' });

  const token = signToken(user);
  setSessionCookie(res, token);
  return res.json({ token, user: publicUser(user) });
});

app.get('/api/auth/me', authRequired, (req, res) => {
  return res.json({ user: publicUser(req.user) });
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('cfa_session');
  return res.json({ ok: true });
});

app.post('/api/auth/forgot-password', otpLimiter, async (req, res) => {
  const identifier = detectIdentifier(req.body.identifier);
  if (identifier.type === 'invalid') return res.status(400).json({ error: 'Invalid email/mobile.' });

  const user = findUserByIdentifier(identifier);
  if (!user) return res.status(404).json({ error: 'Account not found.' });

  const requestedChannel = String(req.body.channel || identifier.type).toLowerCase();
  const channel = requestedChannel === 'mobile' ? 'mobile' : 'email';
  const reset = await createPasswordReset(user, channel);
  return res.json({
    resetId: reset.resetId,
    channel,
    target: reset.target,
    expiresAt: reset.expiresAt,
    ...(reset.otp ? { devOtp: reset.otp } : {}),
  });
});

app.post('/api/auth/verify-otp', async (req, res) => {
  const result = await verifyResetOtp(req.body.resetId, req.body.otp, true);
  if (!result.ok) return res.status(400).json({ error: result.error });
  return res.json({ ok: true });
});

app.post('/api/auth/reset-password', async (req, res) => {
  const password = String(req.body.password || '');
  if (password !== String(req.body.confirmPassword || '')) return res.status(400).json({ error: 'Passwords do not match.' });
  const passwordError = validatePassword(password);
  if (passwordError) return res.status(400).json({ error: passwordError });

  const verified = await verifyResetOtp(req.body.resetId, req.body.otp, true);
  if (!verified.ok) return res.status(400).json({ error: verified.error });

  const passwordHash = await bcrypt.hash(password, bcryptRounds);
  db.prepare(`
    UPDATE users
    SET password_hash = ?, updated_at = datetime('now')
    WHERE id = ?
  `).run(passwordHash, verified.row.user_id);
  db.prepare("UPDATE password_reset_otps SET consumed_at = datetime('now') WHERE id = ?").run(verified.row.id);
  return res.json({ ok: true });
});

app.use(express.static(join(__dirname, '..')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'index.html'));
});

app.listen(port, () => {
  console.log(`CFA Study Portal running at http://localhost:${port}`);
});
