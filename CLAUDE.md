# Claude project memory — Rovner Law website

This file is persistent context for Claude across sessions on this repo. Read `.claude/SKILL.md` and `.claude-work/00-README.md` for full depth — this is the quick reference.

## What this is

Law-firm marketing + lead-capture site for the **Law Offices of Rovner, Allen, Rovner & Sigman** (Philadelphia personal injury & criminal defense, principal contact Steven Rovner).

- **Repo:** github.com/arovn10/ROVNERLAWWEBSITE
- **Production:** https://rovnerlawwebsite.vercel.app
- **Stack:** Next.js 15 (App Router) · React 19 · Tailwind 3 · Prisma 6 + PostgreSQL · NextAuth 4 (Credentials/JWT) · AWS S3 (public-read uploads) · Mailgun for transactional email
- **Hosting:** Vercel
- **Public site:** must look identical to a logged-out visitor before/after every cleanup PR.

## 29-PR cleanup plan — status

The cleanup is being executed as a series of small, focused PRs. Full plan lives in `.claude-work/00-README.md`. Numbering here matches the user's working plan (not always 1:1 with PR titles on GitHub — see `git log`).

| # | Title | Status |
|---|---|---|
| 01 | Secure admin script (env-driven credentials) | ✅ merged |
| 02 | Extract NextAuth `authOptions` to `src/lib/auth.ts` | ✅ merged |
| 03 | Re-enable admin middleware with `getToken` validation | ✅ merged |
| 04 | S3 bucket lockdown checklist (docs only) | ✅ merged |
| 05 | Scaffold hCaptcha on contact form (env-gated, dormant) | ✅ merged |
| 06 | Require auth session for `/api/upload` | ✅ merged |
| 07 | Require auth session for content CRUD write endpoints | ✅ merged |
| 08 | Require auth session for singleton CMS write endpoints | ✅ merged |
| 09 | _(rolled into 06–08 auth gating)_ | ✅ |
| 10 | Admin view of contact form submissions | ✅ merged |
| 11 | _(SEO foundation, branch open — defer)_ | ⏳ |
| 12 | In-memory rate limit on `/api/contact` | 🟡 in progress |
| 13 | Honeypot spam filter on contact form | ⬜ |
| 14 | Confirmation email to submitter | ⬜ |
| 15 | Turn off TS/ESLint error suppression in `next.config.ts` | ⬜ |
| 16 | Run `prisma migrate deploy` on Vercel build | ⬜ |
| 17 | Practice area unification (DB-driven listing) | ⬜ |
| 18 | Drop unused `Photo` model | ⬜ |
| 19 | Consolidate navigation components | ⬜ |
| 20 | Update `CODEBASE.md` and `README.md` | ⬜ |
| 21 | Zod validation on every mutating API route | ⬜ |
| 22 | Strip PII-prone `console.log` calls | ⬜ |
| 23 | `prisma-accelerate` — use it or remove it | ⬜ |
| 24 | Real `/api/health` route | ⬜ |
| 25 | Archive one-off scripts under `scripts/` | ⬜ |
| 26 | Dedupe `public/photos/` | ⬜ |
| 27 | Remove unused `experimental.viewTransition` flag | ⬜ |
| 28 | CSV export for contact submissions | ⬜ |
| 29 | Replace inline styles in practice sub-pages | ⬜ |

## Key file locations

- `src/app/` — App Router tree. **Edit only this**; `src/app 2/` is dead duplicate code (slated for removal in a later PR).
- `src/app/api/contact/route.ts` — contact form POST handler. Mailgun + Prisma + (env-gated) hCaptcha.
- `src/app/api/auth/[...nextauth]/route.ts` — NextAuth credentials handler.
- `src/lib/auth.ts` — `authOptions` (extracted in PR 02). Use this for `getServerSession`.
- `src/lib/prisma.ts` — Prisma client singleton.
- `src/lib/s3-upload.ts` — S3 helpers; uploads are `ACL: public-read`.
- `src/lib/FirmNameContext.tsx` — client context, hydrates from `localStorage.firmName` then `/api/settings/firm-name`.
- `middleware.ts` — re-enabled in PR 03; protects `/admin` via `getToken`.
- `prisma/schema.prisma` — data model. Postgres. `Photo` model exists but unused (PR 18 removes).
- `next.config.ts` — currently has `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true`. PR 15 removes both.
- `package.json` — `build` script is `prisma generate && next build`. PR 16 adds `prisma migrate deploy` between them.

## Landmines (from `.claude/SKILL.md`, condensed)

1. **`src/app 2/` is dead code.** Never edit it. It's an incomplete Finder-copy duplicate.
2. **Practice areas live in 4 places** (DB model, API route, hardcoded `practiceAreas` in `src/app/practice/page.tsx`, ten static `/practice/<slug>/page.tsx` files). PR 17 unifies the listing onto the DB; static sub-pages stay (whitelisted by `dedicatedSlugs`).
3. **CODEBASE.md is stale.** Says Resend (it's Mailgun) and Photo (it's `Archive`). PR 20 rewrites.
4. **No migrations on deploy** until PR 16.
5. **hCaptcha is env-gated** — `HCAPTCHA_SECRET` unset ⇒ verification bypassed (dev). `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` unset ⇒ widget hidden. Set both in Vercel to activate.
6. **Type/lint errors do NOT block deploys** until PR 15.
7. **Gallery reads `Archive`, not `Photo`.** Don't add features to `Photo`; it's slated for removal.
8. **`prisma/seed.ts`** imports a `.cjs.js` file that isn't checked in — seed won't run as-is.
9. **Mobile + desktop render in parallel** on every public page, gated by Tailwind `hidden lg:block` / `block lg:hidden`. Touch both when changing copy or behavior.

## Mailgun configuration

The `/api/contact` route sends a notification email via Mailgun. Required env vars (set in Vercel):

| Variable | Purpose | Required? |
|---|---|---|
| `MAILGUN_API_KEY` | API key for the Mailgun client | yes (otherwise route silently skips email and returns success) |
| `MAILGUN_DOMAIN` | Mailgun sending domain | yes |
| `MAILGUN_FROM` | From-address; defaults to `Rovner Law <mailgun@${MAILGUN_DOMAIN}>` | optional |
| `MAILGUN_EU` | Set to `true` for EU region endpoint | optional |
| `CONTACT_EMAIL` | Comma-separated list of recipients; defaults to `rovneralec@gmail.com` | recommended (set to firm's real inbox) |
| `MAILGUN_REPLY_TO` | Reply-To header on confirmation email (added in PR 14) | optional |

The notification email uses the submitter's address as `Reply-To`. The confirmation email (PR 14) sends to the submitter and uses `MAILGUN_REPLY_TO` (or the same Mailgun-derived from-address) for replies.

## PR workflow

```bash
git checkout main && git pull
git checkout -b <branch-name>
# make changes
npm run build   # must pass — once PR 15 ships, errors are no longer suppressed
git add -A && git commit -m "<title>"
git push -u origin <branch>
gh pr create --title "<title>" --body-file <body>
```

**Rules:**
- One PR per concern. Never batch.
- Public site looks identical before/after every PR to a logged-out visitor.
- Pause/flag for hCaptcha keys, IAM ARN for S3, any password/secret values.
- Always provide a Why / What changed / Testing breakdown in the PR body.
