(() => {
  const API_BASE = window.CFA_AUTH_API_BASE || '/api/auth';
  const TOKEN_KEY = 'cfa_auth_token';
  const STATIC_USERS_KEY = 'cfa_static_auth_users';
  const STATIC_PROFILE_KEY = 'cfa_static_auth_profile';
  const STATIC_SESSION_PREFIX = 'static:';
  const SIMPLE_STATIC_TOKEN = `${STATIC_SESSION_PREFIX}simple`;
  const STATIC_AUTH = window.CFA_STATIC_AUTH === true || window.location.hostname.endsWith('github.io');
  const root = document.getElementById('root');

  if (!root) return;

  root.style.display = 'none';

  const state = {
    mode: 'login',
    resetId: '',
    resetOtp: '',
    resetUserId: '',
    user: null,
  };

  const styles = document.createElement('style');
  styles.textContent = `
    .auth-shell {
      min-height: 100vh;
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      background:
        radial-gradient(circle at 14% 16%, rgba(37, 99, 235, .18), transparent 28%),
        linear-gradient(135deg, #0f172a, #172554 48%, #f8fafc 48%);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: #0f172a;
    }
    .auth-wrap {
      width: min(1120px, calc(100% - 32px));
      margin: auto;
      display: grid;
      grid-template-columns: minmax(0, .92fr) minmax(360px, 480px);
      gap: 36px;
      align-items: center;
      padding: 32px 0;
    }
    .auth-copy { color: white; }
    .auth-kicker {
      display: inline-flex;
      padding: 8px 12px;
      border: 1px solid rgba(255,255,255,.25);
      border-radius: 999px;
      background: rgba(255,255,255,.08);
      font-size: 13px;
      font-weight: 700;
      letter-spacing: .02em;
    }
    .auth-copy h1 {
      margin: 18px 0 14px;
      font-size: clamp(36px, 5vw, 64px);
      line-height: .98;
      letter-spacing: 0;
    }
    .auth-copy p {
      margin: 0;
      max-width: 560px;
      color: rgba(255,255,255,.78);
      font-size: 16px;
      line-height: 1.7;
    }
    .auth-card {
      background: rgba(255,255,255,.96);
      border: 1px solid rgba(15, 23, 42, .08);
      border-radius: 8px;
      box-shadow: 0 24px 80px rgba(15, 23, 42, .28);
      padding: clamp(22px, 4vw, 34px);
    }
    .auth-card h2 {
      margin: 0 0 6px;
      font-size: 26px;
    }
    .auth-subtitle {
      margin: 0 0 22px;
      color: #64748b;
      font-size: 14px;
    }
    .auth-tab, .auth-link, .auth-button {
      border: 0;
      cursor: pointer;
      font: inherit;
    }
    .auth-tab {
      padding: 10px 12px;
      border-radius: 6px;
      background: transparent;
      color: #475569;
      font-weight: 800;
    }
    .auth-tab.active {
      color: #0f172a;
      background: white;
      box-shadow: 0 6px 20px rgba(37, 99, 235, .12);
    }
    .auth-form {
      display: grid;
      gap: 13px;
    }
    .auth-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .auth-field label {
      display: block;
      margin: 0 0 6px;
      color: #334155;
      font-size: 13px;
      font-weight: 800;
    }
    .auth-field input, .auth-field select {
      width: 100%;
      min-height: 44px;
      border: 1px solid #cbd5e1;
      border-radius: 7px;
      padding: 10px 12px;
      color: #0f172a;
      background: white;
      font: inherit;
      outline: none;
    }
    .auth-field input:focus, .auth-field select:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, .14);
    }
    .auth-button {
      min-height: 46px;
      border-radius: 7px;
      background: #1d4ed8;
      color: white;
      font-weight: 900;
      box-shadow: 0 12px 28px rgba(37, 99, 235, .28);
    }
    .auth-button[disabled] {
      cursor: wait;
      opacity: .7;
    }
    .auth-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-top: 2px;
    }
    .auth-link {
      background: transparent;
      color: #1d4ed8;
      font-size: 13px;
      font-weight: 800;
    }
    .auth-message {
      display: none;
      border-radius: 7px;
      padding: 10px 12px;
      font-size: 13px;
      line-height: 1.45;
    }
    .auth-message.show { display: block; }
    .auth-message.error {
      color: #991b1b;
      background: #fee2e2;
      border: 1px solid #fecaca;
    }
    .auth-message.success {
      color: #166534;
      background: #dcfce7;
      border: 1px solid #bbf7d0;
    }
    .auth-userbar {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 1000;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border: 1px solid #dbe3ef;
      border-radius: 8px;
      background: rgba(255,255,255,.96);
      box-shadow: 0 14px 36px rgba(15, 23, 42, .16);
      font: 13px/1.35 Inter, ui-sans-serif, system-ui, sans-serif;
    }
    .auth-userbar strong { display: block; color: #0f172a; }
    .auth-userbar span { display: block; color: #64748b; }
    .auth-logout {
      border: 0;
      border-radius: 6px;
      padding: 8px 10px;
      color: white;
      background: #0f172a;
      font-weight: 800;
      cursor: pointer;
    }
    @media (max-width: 820px) {
      .auth-shell { background: linear-gradient(180deg, #0f172a 0 34%, #f8fafc 34%); }
      .auth-wrap { grid-template-columns: 1fr; gap: 22px; }
      .auth-copy h1 { font-size: 36px; }
      .auth-row { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(styles);

  const shell = document.createElement('div');
  shell.className = 'auth-shell';
  document.body.insertBefore(shell, root);

  function token() {
    return localStorage.getItem(TOKEN_KEY);
  }

  function setToken(value) {
    if (value) localStorage.setItem(TOKEN_KEY, value);
    else localStorage.removeItem(TOKEN_KEY);
  }

  function normalizeEmail(value) {
    return String(value || '').trim().toLowerCase();
  }

  function normalizeMobile(value) {
    return String(value || '').replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '');
  }

  function detectIdentifier(value) {
    const input = String(value || '').trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.toLowerCase())) {
      return { type: 'email', value: normalizeEmail(input) };
    }
    const mobile = normalizeMobile(input);
    if (/^\+?\d{10,15}$/.test(mobile)) {
      return { type: 'mobile', value: mobile };
    }
    return { type: 'invalid', value: input };
  }

  function passwordError(password) {
    const text = String(password || '');
    if (text.length < 8) return 'Password must be at least 8 characters.';
    if (!/[A-Za-z]/.test(text) || !/\d/.test(text)) return 'Password must include at least one letter and one number.';
    return '';
  }

  function staticUsers() {
    try {
      return JSON.parse(localStorage.getItem(STATIC_USERS_KEY) || '[]');
    } catch {
      return [];
    }
  }

  function saveStaticUsers(users) {
    localStorage.setItem(STATIC_USERS_KEY, JSON.stringify(users));
  }

  function randomId() {
    return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function randomOtp() {
    return String(Math.floor(100000 + Math.random() * 900000));
  }

  function bytesToHex(buffer) {
    return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  async function staticHash(password, salt) {
    const data = new TextEncoder().encode(`${salt}:${password}`);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return bytesToHex(digest);
  }

  function publicStaticUser(user) {
    return {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      mobileNumber: user.mobileNumber,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  function findStaticUser(identifier) {
    const users = staticUsers();
    if (identifier.type === 'email') return users.find((user) => user.email === identifier.value);
    if (identifier.type === 'mobile') return users.find((user) => user.mobileNumber === identifier.value);
    return null;
  }

  async function staticRegister(payload) {
    const fullName = String(payload.fullName || '').trim().replace(/\s+/g, ' ');
    const email = normalizeEmail(payload.email);
    const mobileNumber = normalizeMobile(payload.mobileNumber);
    const password = String(payload.password || '');
    const confirmPassword = String(payload.confirmPassword || '');
    if (fullName.length < 2) throw new Error('Full name must be at least 2 characters.');
    if (detectIdentifier(email).type !== 'email') throw new Error('Invalid email address.');
    if (detectIdentifier(mobileNumber).type !== 'mobile') throw new Error('Invalid mobile number.');
    if (password !== confirmPassword) throw new Error('Passwords do not match.');
    const passError = passwordError(password);
    if (passError) throw new Error(passError);

    const users = staticUsers();
    if (users.some((user) => user.email === email)) throw new Error('Email address is already registered.');
    if (users.some((user) => user.mobileNumber === mobileNumber)) throw new Error('Mobile number is already registered.');

    const salt = randomId();
    const now = new Date().toISOString();
    const user = {
      id: randomId(),
      fullName,
      email,
      mobileNumber,
      salt,
      passwordHash: await staticHash(password, salt),
      createdAt: now,
      updatedAt: now,
    };
    users.push(user);
    saveStaticUsers(users);
    const sessionToken = `${STATIC_SESSION_PREFIX}${user.id}`;
    return { token: sessionToken, user: publicStaticUser(user) };
  }

  async function staticLogin(payload) {
    const identifier = detectIdentifier(payload.identifier);
    if (identifier.type !== 'email') throw new Error('Please enter a valid email address.');
    if (!String(payload.password || '').trim()) throw new Error('Please enter your password.');
    const nameFromEmail = identifier.value
      .split('@')[0]
      .replace(/[._-]+/g, ' ')
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
    const now = new Date().toISOString();
    const user = {
      id: 'simple-user',
      fullName: nameFromEmail || 'CFA Student',
      email: identifier.value,
      mobileNumber: '',
      createdAt: now,
      updatedAt: now,
    };
    localStorage.setItem(STATIC_PROFILE_KEY, JSON.stringify(user));
    return { token: SIMPLE_STATIC_TOKEN, user };
  }

  function staticMe() {
    const value = token();
    if (!value || !value.startsWith(STATIC_SESSION_PREFIX)) throw new Error('Authentication required.');
    if (value === SIMPLE_STATIC_TOKEN) {
      const profile = JSON.parse(localStorage.getItem(STATIC_PROFILE_KEY) || 'null');
      if (!profile?.email) throw new Error('Authentication required.');
      return { user: profile };
    }
    const user = staticUsers().find((entry) => entry.id === value.slice(STATIC_SESSION_PREFIX.length));
    if (!user) throw new Error('Account not found.');
    return { user: publicStaticUser(user) };
  }

  function staticForgotPassword(payload) {
    const identifier = detectIdentifier(payload.identifier);
    if (identifier.type === 'invalid') throw new Error('Invalid email/mobile.');
    const user = findStaticUser(identifier);
    if (!user) throw new Error('Account not found.');
    const channel = String(payload.channel || identifier.type).toLowerCase() === 'mobile' ? 'mobile' : 'email';
    state.resetId = randomId();
    state.resetOtp = randomOtp();
    state.resetUserId = user.id;
    return {
      resetId: state.resetId,
      channel,
      target: channel === 'mobile' ? user.mobileNumber : user.email,
      devOtp: state.resetOtp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
    };
  }

  async function staticResetPassword(payload) {
    if (payload.resetId !== state.resetId || String(payload.otp || '') !== state.resetOtp) throw new Error('Invalid OTP.');
    if (String(payload.password || '') !== String(payload.confirmPassword || '')) throw new Error('Passwords do not match.');
    const passError = passwordError(payload.password);
    if (passError) throw new Error(passError);
    const users = staticUsers();
    const user = users.find((entry) => entry.id === state.resetUserId);
    if (!user) throw new Error('Account not found.');
    user.salt = randomId();
    user.passwordHash = await staticHash(String(payload.password), user.salt);
    user.updatedAt = new Date().toISOString();
    saveStaticUsers(users);
    state.resetId = '';
    state.resetOtp = '';
    state.resetUserId = '';
    return { ok: true };
  }

  async function api(path, options = {}) {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    if (token()) headers.Authorization = `Bearer ${token()}`;
    const response = await fetch(`${API_BASE}${path}`, {
      credentials: 'include',
      ...options,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || 'Something went wrong.');
    return data;
  }

  async function authRequest(path, options = {}) {
    if (STATIC_AUTH) {
      const body = options.body || {};
      if (path === '/register') return staticRegister(body);
      if (path === '/login') return staticLogin(body);
      if (path === '/me') return staticMe();
      if (path === '/logout') return { ok: true };
      if (path === '/forgot-password') return staticForgotPassword(body);
      if (path === '/verify-otp') {
        if (body.resetId !== state.resetId || String(body.otp || '') !== state.resetOtp) throw new Error('Invalid OTP.');
        return { ok: true };
      }
      if (path === '/reset-password') return staticResetPassword(body);
    }
    return api(path, options);
  }

  function field(name, label, type = 'text', attrs = '') {
    return `
      <div class="auth-field">
        <label for="${name}">${label}</label>
        <input id="${name}" name="${name}" type="${type}" ${attrs} />
      </div>
    `;
  }

  function formHtml() {
    if (state.mode === 'forgot') {
      return `
        <form class="auth-form" data-form="forgot">
          ${field('identifier', 'Email Address', 'email', 'autocomplete="username" required')}
          <div class="auth-field">
            <label for="channel">Send OTP By</label>
            <select id="channel" name="channel">
              <option value="email">Email OTP</option>
              <option value="mobile">Mobile OTP</option>
            </select>
          </div>
          <div class="auth-message" data-message></div>
          <button class="auth-button" type="submit">Send OTP</button>
        </form>
      `;
    }
    if (state.mode === 'reset') {
      return `
        <form class="auth-form" data-form="reset">
          ${field('otp', 'OTP', 'text', 'inputmode="numeric" required')}
          ${field('password', 'New Password', 'password', 'autocomplete="new-password" required minlength="8"')}
          ${field('confirmPassword', 'Confirm New Password', 'password', 'autocomplete="new-password" required minlength="8"')}
          <div class="auth-message" data-message></div>
          <button class="auth-button" type="submit">Reset Password</button>
        </form>
      `;
    }
    return `
      <form class="auth-form" data-form="login">
        ${field('identifier', 'Email Address', 'email', 'autocomplete="username" required')}
        ${field('password', 'Password', 'password', 'autocomplete="current-password" required')}
        <div class="auth-message" data-message></div>
        <button class="auth-button" type="submit">Login</button>
      </form>
    `;
  }

  function renderAuth() {
    const title = state.mode === 'forgot' ? 'Reset your password'
        : state.mode === 'reset' ? 'Enter OTP'
          : 'Welcome back';
    const subtitle = state.mode === 'reset'
      ? 'Verify the OTP and choose a new password.'
      : 'Secure access for your CFA Level 1 dashboard.';

    shell.innerHTML = `
      <div class="auth-wrap">
        <section class="auth-copy">
          <div class="auth-kicker">CFA Level 1 Practice Hub</div>
          <h1>Study dashboard with secure login.</h1>
          <p>Login with your email and password to open the CFA Level 1 dashboard. Your session stays active after refresh.</p>
        </section>
        <section class="auth-card" aria-live="polite">
          <h2>${title}</h2>
          <p class="auth-subtitle">${subtitle}</p>
          ${formHtml()}
        </section>
      </div>
    `;
  }

  function showMessage(form, message, type = 'error') {
    const box = form.querySelector('[data-message]');
    box.textContent = message;
    box.className = `auth-message show ${type}`;
  }

  function values(form) {
    return Object.fromEntries(new FormData(form).entries());
  }

  function showApp(user) {
    state.user = user;
    shell.remove();
    root.style.display = '';
    document.querySelector('.auth-userbar')?.remove();
    const bar = document.createElement('div');
    bar.className = 'auth-userbar';
    bar.innerHTML = `
      <div>
        <strong>${user.fullName}</strong>
        <span>${user.mobileNumber ? `${user.email} - ${user.mobileNumber}` : user.email}</span>
      </div>
      <button class="auth-logout" type="button">Logout</button>
    `;
    bar.querySelector('.auth-logout').addEventListener('click', async () => {
      try { await authRequest('/logout', { method: 'POST' }); } catch {}
      setToken('');
      localStorage.removeItem(STATIC_PROFILE_KEY);
      window.location.reload();
    });
    document.body.appendChild(bar);
  }

  async function checkSession() {
    if (!token()) {
      renderAuth();
      return;
    }
    try {
      const data = await authRequest('/me');
      showApp(data.user);
    } catch {
      setToken('');
      renderAuth();
    }
  }

  shell.addEventListener('click', (event) => {
    const button = event.target.closest('[data-mode]');
    if (!button) return;
    state.mode = button.dataset.mode;
    renderAuth();
  });

  shell.addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.target;
    const button = form.querySelector('.auth-button');
    button.disabled = true;
    const originalText = button.textContent;
    button.textContent = 'Please wait...';

    try {
      const formType = form.dataset.form;
      const payload = values(form);
      if (formType === 'login') {
        const data = await authRequest('/login', { method: 'POST', body: payload });
        setToken(data.token);
        showApp(data.user);
        return;
      }
      if (formType === 'register') {
        const data = await authRequest('/register', { method: 'POST', body: payload });
        setToken(data.token);
        showApp(data.user);
        return;
      }
      if (formType === 'forgot') {
        const data = await authRequest('/forgot-password', { method: 'POST', body: payload });
        state.resetId = data.resetId;
        state.mode = 'reset';
        renderAuth();
        const resetForm = shell.querySelector('[data-form="reset"]');
        const hint = data.devOtp ? ` Development OTP: ${data.devOtp}` : '';
        showMessage(resetForm, `OTP sent to ${data.target}.${hint}`, 'success');
        return;
      }
      if (formType === 'reset') {
        payload.resetId = state.resetId;
        await authRequest('/reset-password', { method: 'POST', body: payload });
        state.mode = 'login';
        renderAuth();
        showMessage(shell.querySelector('[data-form="login"]'), 'Password reset successfully. Please login.', 'success');
        return;
      }
    } catch (error) {
      showMessage(form, error.message);
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });

  checkSession();
})();
