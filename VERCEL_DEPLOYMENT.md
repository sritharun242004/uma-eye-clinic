# Deploying Uma Eye Care to Vercel

This app is configured to run on Vercel with no loss of functionality. Follow these steps to deploy.

## 1. Connect repository

- Push this project to GitHub (if not already).
- In [Vercel](https://vercel.com), import the repository.
- Vercel will detect Next.js and use the existing `vercel.json` and `package.json`.

## 2. Database (PostgreSQL)

**Option A: Vercel Postgres**

- In your Vercel project: **Storage** → **Create Database** → **Postgres**.
- Vercel will add `POSTGRES_URL` (pooled) and `POSTGRES_URL_NON_POOLING` (direct) to Environment Variables.
- In the project **Settings → Environment Variables**, add:
  - `DATABASE_URL` = value of `POSTGRES_URL` (pooled, for the app).
  - `DIRECT_URL` = value of `POSTGRES_URL_NON_POOLING` (for Prisma migrations).

**Option B: External Postgres (e.g. Neon, Supabase, Railway)**

- Create a database and get:
  - Pooled connection URL → `DATABASE_URL`
  - Direct connection URL (no pooler) → `DIRECT_URL`
- Add both in Vercel **Environment Variables**.

## 3. Run migrations

Migrations do **not** run during the Vercel build. Run them once (and after schema changes) from your machine or CI:

```bash
# Set DATABASE_URL and DIRECT_URL to your production values, then:
npx prisma migrate deploy
```

For a fresh Vercel Postgres DB, you can instead run:

```bash
npx prisma db push
```

(Optional) Seed admin user:

```bash
npm run seed
```

## 4. Environment variables in Vercel

Add these in the Vercel project **Settings → Environment Variables** (for Production, and optionally Preview):

| Variable          | Description |
|-------------------|-------------|
| `DATABASE_URL`    | PostgreSQL connection string (pooled recommended). |
| `DIRECT_URL`      | Direct PostgreSQL URL (for migrations). |
| `NEXTAUTH_SECRET` | Random secret for NextAuth (e.g. `openssl rand -base64 32`). |
| `NEXTAUTH_URL`    | **Production URL**, e.g. `https://your-app.vercel.app`. |
| `SMTP_HOST`       | SMTP server (e.g. `smtp.gmail.com`). |
| `SMTP_PORT`       | e.g. `587`. |
| `SMTP_USER`       | SMTP username. |
| `SMTP_PASS`       | SMTP password/app password. |
| `EMAIL_FROM`      | Sender address (e.g. `noreply@umaeyeclinic.in`). |
| `CLINIC_EMAIL`    | Clinic inbox (e.g. `info@umaeyeclinic.in`). |

If SMTP vars are missing, the app still runs; appointment/contact emails are skipped and a message is logged.

## 5. Deploy

- Trigger a deploy (e.g. push to the connected branch or **Redeploy** in Vercel).
- Build uses `npm install --legacy-peer-deps` (from `vercel.json`) and `prisma generate` (from `postinstall`).

## Features preserved on Vercel

- **Next.js** (App Router, API routes, middleware) – fully supported.
- **Prisma** – client generated at build; use pooled `DATABASE_URL` in production.
- **NextAuth** – JWT strategy; set `NEXTAUTH_URL` and `NEXTAUTH_SECRET` for admin login.
- **Email (Nodemailer)** – works with SMTP env vars.
- **Static assets** – files in `public/` are served as-is.
- **Redirects** – defined in `next.config.mjs` apply on Vercel.

No code or UI changes are required; only environment configuration and running migrations as above.
