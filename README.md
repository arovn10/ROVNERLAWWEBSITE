# Rovner Law Website

Marketing + lead-capture site for the **Law Offices of Rovner, Allen, Rovner & Sigman** (Philadelphia personal injury & criminal defense).

- **Production:** <https://rovnerlawwebsite.vercel.app>
- **Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind 3 · Prisma 6 + PostgreSQL · NextAuth 4 (Credentials/JWT) · AWS S3 · Mailgun · Vercel
- **Architecture overview:** see [`CODEBASE.md`](./CODEBASE.md)
- **Deep operational reference, landmines, conventions:** see [`.claude/SKILL.md`](.claude/SKILL.md)
- **Per-session project memory and cleanup-PR plan:** see [`CLAUDE.md`](./CLAUDE.md)

## Quickstart

```bash
git clone https://github.com/arovn10/ROVNERLAWWEBSITE.git
cd ROVNERLAWWEBSITE
npm install
cp .env.example .env.local        # fill in DATABASE_URL, NEXTAUTH_SECRET, MAILGUN_*, AWS_*, etc.
npm run dev
```

Open <http://localhost:3000>.

The first dev start needs a reachable Postgres at `DATABASE_URL`. Migrations apply automatically on `npm run build`; for local iteration, run `npx prisma migrate dev` after schema changes.

Apple Silicon contributors: there's a `./run-dev.sh` wrapper that forces arm64 Node via nvm.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | `next dev --turbopack` |
| `npm run build` | `prisma generate && prisma migrate deploy && next build` |
| `npm run start` | Production server (`next start`) |
| `npm run lint` | `next lint` (strict — TS + ESLint errors fail the build) |
| `npm run create-admin` | Seeds the admin user from `ADMIN_EMAIL` / `ADMIN_PASSWORD` env vars |

## Required environment

At minimum you need:

- `DATABASE_URL` — Postgres
- `NEXTAUTH_SECRET` — random 32-byte secret for JWT signing
- `AWS_BUCKET_NAME`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` — S3 admin uploads
- `MAILGUN_API_KEY`, `MAILGUN_DOMAIN` — contact form notification + confirmation emails
- `CONTACT_EMAIL` — recipient inbox for new leads (comma-separated for multiple)

Optional: `HCAPTCHA_SECRET`, `NEXT_PUBLIC_HCAPTCHA_SITE_KEY`, `MAILGUN_FROM`, `MAILGUN_REPLY_TO`, `MAILGUN_EU`, `NEXTAUTH_URL`, `NEXT_PUBLIC_SITE_URL`.

Full table with purposes lives in [`CODEBASE.md`](./CODEBASE.md#environment-variables).

## Deployment

- Vercel auto-deploys `main`.
- `prisma migrate deploy` is part of the build, so committed migrations apply to the target DB on every deploy.
- Type and lint errors **fail** the build (no suppression).

## Contributing

PRs follow a one-concern-per-PR convention with `cleanup/<NN-name>` branches. See [`CLAUDE.md`](./CLAUDE.md) for the active cleanup plan and conventions.

## Contact

Office: 175 Bustleton Pike, Feasterville-Trevose, PA 19053 · 215-259-5958 / 888-DIAL-LAW
