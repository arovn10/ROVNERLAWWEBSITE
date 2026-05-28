# Rovner Law Website — Claude Code memory

**Repo:** github.com/arovn10/ROVNERLAWWEBSITE
**Prod:** rovnerlawwebsite.vercel.app
**Client:** Law Offices of Rovner, Allen, Rovner & Sigman (Philadelphia personal injury / criminal defense)

Next.js 15 App Router + Prisma/Postgres + NextAuth credentials + S3 image hosting + Mailgun email. Detailed architecture lives in `.claude/SKILL.md` — read that first when in doubt.

## Cleanup PR pack status

PR pack is `.claude-work/00-README.md` (29 PRs total).

| # | Title | Status |
|---|---|---|
| 01 | Secure create-admin script | merged |
| 02 | Extract authOptions to `src/lib/auth.ts` | merged |
| 03 | Re-enable admin route middleware | merged |
| 04 | S3 bucket lockdown checklist | merged |
| 05 | hCaptcha scaffold (env-gated) | merged |
| 06 | Require session for `/api/upload` | merged |
| 07 | Require session for content CRUD writes | merged |
| 08 | Require session for singleton CMS writes | merged |
| 09 | (skipped — schema-drift; ContactSubmission already matches form) | n/a |
| 10 | Admin view of contact submissions | merged |
| 11 | SEO foundation — robots, sitemap, metadata, JSON-LD | **open** (not merged) |
| 12 | Rate limit on `/api/contact` | next |
| 13–29 | See `.claude-work/00-README.md` | pending |

## Required Vercel env vars

| Var | Used by |
|---|---|
| `DATABASE_URL` | Prisma |
| `NEXTAUTH_SECRET`, `NEXTAUTH_URL` | NextAuth |
| `AWS_BUCKET_NAME`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` | S3 |
| `MAILGUN_API_KEY`, `MAILGUN_DOMAIN` | Contact form |
| `MAILGUN_FROM` (optional), `MAILGUN_EU` (optional), `CONTACT_EMAIL` (optional, comma-list) | Contact form |
| `ADMIN_EMAIL`, `ADMIN_PASSWORD` | `npm run create-admin` (PR 01) |
| `HCAPTCHA_SECRET`, `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` | hCaptcha (PR 05, dormant unless set) |

`.env.local` on the dev box currently has Mailgun vars set.

## Key landmines (from `.claude/SKILL.md`)

1. **`src/app 2/` is dead-code duplicate.** Edit `src/app/`.
2. **`next.config.ts` still has `ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true`** — type/lint errors ship to prod until PR 15.
3. **`prisma migrate deploy` does NOT run on Vercel build** until PR 16. Schema changes need manual `prisma migrate deploy` against prod DB.
4. **Practice areas are in four places** (DB model, API route, hardcoded array in `practice/page.tsx`, ten static sub-pages). PR 17 will move listing to DB-only but sub-pages stay hardcoded.
5. **hCaptcha widget renders but is env-gated** — verification only runs if `HCAPTCHA_SECRET` is set (PR 05 already in).
6. **No CSRF on admin POSTs** — same-origin only; revisit if exposing API externally.
7. **`Photo` model is unused** — gallery reads `Archive`. PR 18 drops Photo.
8. **`Navigation*.tsx` (three files) are dead** — current shell is `Header`/`MobileHeader`/`MobileNav`. PR 19 deletes them.
9. **`src/lib/aws-config.ts` exports CommonJS** and `prisma/seed.ts` imports `../src/lib/aws-config.cjs.js` (uncommitted). Seed will not run as-is.
10. **SQLite leftovers** (`prisma/dev.db`, `dev 2.db`, `prisma/prisma/dev.db`) in repo; schema is Postgres. Do not flip back.

## Workflow per PR

```bash
git checkout main && git pull
git checkout -b pr/NN-short-name
# code changes
npx tsc --noEmit         # type-check (Next config ignores errors at build until PR 15)
git add -A && git commit -m "PR NN: ..."
git push -u origin pr/NN-short-name
gh pr create --title "PR NN: ..." --body-file <body>
```

PR body template: **Why** (1–2 sentences) / **What changed** (bulleted) / **Testing** (how I verified locally).

## Things NOT to do

- Do not commit secrets or `.env*` files.
- Do not edit `src/app 2/`.
- Do not introduce SQLite to `schema.prisma`.
- Do not run destructive git ops (force-push, reset --hard, branch -D) without explicit ask.
- Do not change visible behavior for logged-out visitors during the cleanup pack.
