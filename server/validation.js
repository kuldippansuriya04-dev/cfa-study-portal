export function normalizeEmail(value) {
  return String(value || '').trim().toLowerCase();
}

export function normalizeMobile(value) {
  return String(value || '').replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '');
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(value));
}

export function isMobile(value) {
  const normalized = normalizeMobile(value);
  return /^\+?\d{10,15}$/.test(normalized);
}

export function detectIdentifier(value) {
  if (isEmail(value)) return { type: 'email', value: normalizeEmail(value) };
  if (isMobile(value)) return { type: 'mobile', value: normalizeMobile(value) };
  return { type: 'invalid', value: String(value || '').trim() };
}

export function validatePassword(password) {
  const text = String(password || '');
  if (text.length < 8) return 'Password must be at least 8 characters.';
  if (!/[A-Za-z]/.test(text) || !/\d/.test(text)) {
    return 'Password must include at least one letter and one number.';
  }
  return null;
}

export function cleanName(value) {
  return String(value || '').trim().replace(/\s+/g, ' ');
}

export function requireFields(body, fields) {
  const missing = fields.filter((field) => !String(body[field] || '').trim());
  if (missing.length) {
    return `${missing.join(', ')} ${missing.length === 1 ? 'is' : 'are'} required.`;
  }
  return null;
}
