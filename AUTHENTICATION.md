# Authentication System

This project now includes a real backend authentication system. GitHub Pages is static and cannot run bcrypt, JWT, OTP, rate limiting, or a database by itself, so run or deploy the Node server for secure auth.

## Files

- `server/index.js` - Express API, JWT sessions, bcrypt password hashing, login/register/logout/forgot-password routes, and rate limiting.
- `server/database.js` - SQLite database initialization and migrations for `users` and password reset OTPs.
- `server/validation.js` - Email, mobile, password, and required-field validation helpers.
- `auth-client.js` - Responsive login/register/forgot-password frontend gate for the existing CFA dashboard.
- `.env.example` - Required backend environment variables.
- `index.html` and `404.html` - Load `auth-client.js` before the existing compiled portal bundle.

## Database Table

The `users` table is created automatically:

- `id`
- `full_name`
- `email`
- `mobile_number`
- `password_hash`
- `created_at`
- `updated_at`

## Run Locally

```bash
npm install
copy .env.example .env
npm run server
```

Open:

```text
http://localhost:3000/cfa-study-portal/
```

In development, OTPs are logged in the server console and returned as `devOtp` so the reset flow can be tested without paid email/SMS credentials. In production, set `NODE_ENV=production`, change `JWT_SECRET`, and connect the `createPasswordReset` delivery section in `server/index.js` to your email/SMS provider.
