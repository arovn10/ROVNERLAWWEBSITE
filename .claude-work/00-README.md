# Rovner Law Website Cleanup — 29-PR Plan

Internal cleanup of `arovn10/ROVNERLAWWEBSITE`. Companion to `SKILL.md` (read that first).

## Ground rules

1. **The public site must look and behave identically** to a logged-out visitor before and after every PR.
2. **One logical concern per PR.** Reviewable in 5–10 minutes.
3. **`npx tsc --noEmit` is the real type-check signal** until PR 16 lifts the build suppression. Run `npm run build` before declaring any PR done.
4. **Match the PR body format below.** Every PR needs: _Why → What changed → Testing → Prerequisite PRs → Manual steps_.
5. **Flag anything that needs the owner's input** instead of guessing — admin password, AWS ARNs, hCaptcha keys, Mailgun config.
6. **Honor the dependency order.** Some PRs need a prior one merged. If a session can't merge mid-way, stack branches and document the dependency in the PR body.

## Branch naming

`cleanup/<NN>-<kebab-title>` — e.g. `cleanup/01-secure-admin-script`.

## PR body template

```markdown
## Why
<one sentence — why this needs to happen>

## What changed
- <bullet>
- <bullet>

## Testing
- [ ] `npm run build` clean
- [ ] `npx tsc --noEmit` clean
- [ ] Manual: <what to click through>

## Prerequisite PRs
- #<n> (must be merged first), or "none"

## Manual steps for the owner
- <if any — e.g. rotate password, apply IAM policy, set env var>
```

---

## The 29 PRs

Grouped by phase. Numbers are the canonical PR order — don't renumber even if order shifts in practice.

### Phase 1 — Security & auth (PRs 01–09)

**PR 01 — Secure `create-admin` script**
Read email/password from env vars (`ADMIN_EMAIL`, `ADMIN_PASSWORD`) or argv. Default to refusing to run. Note in PR body: **the existing password is in git history; the owner must rotate it after merge.** Prereq: none.

**PR 02 — Extract `authOptions` + fix `getServerSession` callers**
Move the inline NextAuth config from `src/app/api/auth/[...nextauth]/route.ts` into `src/lib/auth.ts` and export `authOptions`. Update every `getServerSession()` call in API routes and `admin/layout.tsx` to pass `authOptions`. (Required because App Router `getServerSession()` without args returns `null` when using JWT strategy.) Prereq: none.

**PR 03 — Re-enable admin middleware**
Uncomment the `export const config` matcher in `middleware.ts`. The function logic is already correct. Prereq: PR 02 (so the cookie name handling matches NextAuth's real config).

**PR 04 — S3 lockdown checklist (docs-only)**
No code. Adds `docs/s3-lockdown.md` with: (a) IAM policy JSON scoped to `PutObject` / `GetObject` on `arn:aws:s3:::rovnerlawbucket/uploads/*` for the upload role; (b) bucket policy JSON that disables public listing but keeps public GET on `uploads/*`; (c) step-by-step AWS console instructions. Owner applies the policies manually. Prereq: none.

**PR 05 — hCaptcha scaffolding (env-gated, ships dormant)**
Wire `@hcaptcha/react-hcaptcha` into `src/app/contact/page.tsx` behind `NEXT_PUBLIC_HCAPTCHA_SITE_KEY`; verify token server-side in `/api/contact` behind `HCAPTCHA_SECRET`. If either env is unset, captcha is bypassed (no visible change). PR notes include hCaptcha signup steps. Prereq: none.

**PR 06 — Auth-gate `/api/upload` + drop `public-read` ACL**
Require session via `authOptions`; return 401 otherwise. Remove the inline `ACL: 'public-read'`. Bucket policy from PR 04 handles public reads. Prereq: PRs 02, 04 (so the bucket policy is in place before objects upload without ACL).

**PR 07 — Auth-gate content-CRUD API routes (lawyers, settlements, news, archives, practice-areas)**
Add `getServerSession(authOptions)` check to every POST / PUT / DELETE. Public GETs stay open. Restore previously commented-out checks. Prereq: PR 02.

**PR 08 — Auth-gate CMS singleton API routes (settings, about-us, contact-us, locations)**
Same treatment as PR 07 for the singleton-editor endpoints. Prereq: PR 02.

**PR 09 — Server-side admin layout guard + remove client-side bypass**
Uncomment the server-side `redirect('/admin/login')` in `src/app/admin/layout.tsx`. Remove the client-side `useSession` check in `dashboard/page.tsx` (now redundant). Prereq: PRs 02, 03.

### Phase 2 — Contact form (PRs 10–12)

**PR 10 — Admin contact submissions view**
New route `/admin/contact-us/submissions` listing rows from `ContactSubmission` (newest first), with a detail view + DELETE endpoint. UI matches existing admin aesthetic (white/blue gradient, glassy cards). Add a nav link from the admin dashboard. Prereq: PRs 02, 09 (so it's auth-gated).

**PR 11 — Server-side validation + length caps for `/api/contact`**
Cap `facts` at 5000 chars, name/email/phone at 200 each. Validate email format with a regex. Return 400 with a clear message on failure. Visible UI unchanged. Prereq: none.

**PR 12 — In-memory rate limit for `/api/contact`**
`Map<string, number[]>` keyed by IP (from `x-forwarded-for`), sliding window: max 5 submissions per IP per 15 minutes. Document the cold-start caveat in the PR body (limits reset on dyno restart; acceptable for a low-traffic marketing site). Prereq: PR 11 (so it slots into the same validation flow).

### Phase 3 — Hygiene (PRs 13–16)

**PR 13 — Delete duplicate `src/app 2/` directory**
54 tracked files. Not referenced from `src/app/` or anywhere else. Pure copy-paste cruft. `git rm -r 'src/app 2'`. Prereq: none.

**PR 14 — Delete dead deps + duplicate `aws-config.cjs.js` + one-off scripts**
Drop `jsonwebtoken`, `@auth/prisma-adapter`, `@prisma/extension-accelerate` from `package.json`. Delete `src/lib/aws-config.cjs.js`. Delete `scripts/fix-eslint.js` and `scripts/fix-eslint-comprehensive.js` (one-shot scripts that already ran). Prereq: none.

**PR 15 — Remove `console.log` spam from API routes & pages**
Sweep: `api/upload/route.ts`, `api/settlements/**`, `api/lawyers/**`, `api/news/**`, `api/archives/**`, `app/in-the-news/page.tsx`. Keep `console.error` for actual error paths. Prereq: none.

**PR 16 — Re-enable TypeScript and ESLint enforcement**
Flip `next.config.ts`: `typescript.ignoreBuildErrors: false`, `eslint.ignoreDuringBuilds: false`. Fix any errors that surface in the same PR. May need to allow `any` in NextAuth callbacks (or properly type the session/JWT augmentation in `src/types/next-auth.d.ts`). Prereq: PRs 02, 13, 14, 18 (so the deletions and ES-modules conversion don't pile up errors).

### Phase 4 — Data model unification (PRs 17–19)

**PR 17 — Practice area unification**
Seed `PracticeArea` table from the hardcoded `practiceAreas` array in `src/app/practice/page.tsx` (one-shot migration script — `scripts/seed-practice-areas.ts`). Make `/practice` listing fetch from `/api/practice-areas`. Keep the 10 static `/practice/<slug>/page.tsx` files. Keep the `dedicatedSlugs` whitelist in `[slug]/page.tsx`. PR body documents the one-time seed step. Prereq: PRs 07 (admin CRUD must be safely gated since this PR adds rows the admin will manage).

**PR 18 — Convert `aws-config.ts` to ES modules**
Replace `module.exports = { awsConfig }` with `export const awsConfig`. Update the one importer (`api/upload/route.ts`). Prereq: none.

**PR 19 — Fix circular-ish import in `src/app/page.tsx`**
Remove the dead `import { practiceAreas } from './practice/page'` — the home page already fetches `/api/practice-areas` and overwrites the import immediately. Prereq: PR 17 (so the hardcoded array is gone anyway).

### Phase 5 — Hardening (PRs 20–23)

**PR 20 — Env-var validation at boot**
New `src/lib/env.ts` that validates required vars (`DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL` in prod). Throws on missing in prod, warns in dev. Import once from `src/app/layout.tsx`. Prereq: none.

**PR 21 — Sitemap accuracy fix**
Audit `src/app/sitemap.xml/route.ts` against actual routes. Ensure all 10 dedicated practice slugs are listed; remove dead routes. Prereq: PR 17.

**PR 22 — Error boundary for `/admin`**
Add `src/app/admin/error.tsx` so admin pages don't show a generic Next.js error screen on unhandled exceptions. Prereq: none.

**PR 23 — `/api/health` endpoint**
Returns `{ ok: true, db: <bool>, timestamp }` for uptime monitoring (Vercel cron, UptimeRobot). Database check via `prisma.$queryRaw\`SELECT 1\``. Prereq: none.

### Phase 6 — Operations & docs (PRs 24–26)

**PR 24 — `.env.example`**
Template covering every env var from `SKILL.md`'s env table. Annotated with what each does and which are required. Prereq: PR 20 (so the validation matches the example).

**PR 25 — README.md refresh**
Replace the current minimal README with accurate setup steps (clone → install → set env → `prisma db push` → `npm run create-admin` → `npm run dev`). Reference `.env.example`. Prereq: PRs 01, 24.

**PR 26 — CODEBASE.md + AUDIT_RESULTS.md refresh**
Update both to reflect the post-cleanup state. Remove the "Known Items (Not Changed)" section from `AUDIT_RESULTS.md` once items are fixed. Prereq: most prior PRs merged.

### Phase 7 — Final sweep (PRs 27–29)

**PR 27 — Dead `Resend` references**
Audit for any remaining mentions of `Resend` after `src/app 2` is gone. Confirm Mailgun is the sole email path. Remove any stale imports. Prereq: PR 13.

**PR 28 — Unused state / dead imports sweep**
Run `tsc --noEmit` + ESLint with `no-unused-vars` strict; fix all reported issues. Prereq: PR 16.

**PR 29 — Final smoke-test PR (docs + checklist)**
Adds `docs/post-cleanup-smoke-test.md` — a manual smoke-test checklist (home, every practice slug, contact form submit, admin login, admin CRUD for each model). No code. Prereq: PRs 01–28 merged.

---

## Per-PR workflow

```bash
git checkout main && git pull
git checkout -b cleanup/<NN>-<kebab-title>

# do the work...
npx tsc --noEmit          # MUST be clean
npm run build             # MUST succeed

git add -A
git commit -m "<title>"
git push -u origin cleanup/<NN>-<kebab-title>
# open PR via mcp__github__create_pull_request with body matching the template
```

## Stop-and-ask flags

These PRs require owner input — don't ship without it:

| PR | What we need |
|---|---|
| 01 | Confirm we should reject defaults; remind owner to rotate the password |
| 04 | AWS account ID and IAM role ARN, OR confirmation that the owner will fill them in before applying |
| 05 | Confirm hCaptcha site key + secret are not yet set (we ship dormant if so) |
| 10 | Confirm visual choice if anything deviates from the admin aesthetic |
| 11 | Confirm length caps (5000 / 200 / 200 / 200) |
| 12 | Confirm rate-limit policy (5 per IP per 15 min) and the cold-start caveat |
| 17 | Confirm the static `/practice/<slug>/page.tsx` files stay |

## Status tracking

Append a status line per PR as it lands:

```
PR 01: done, #N opened
PR 02: blocked, need <X> from owner
```

Final report at the end: every PR by number with status (merged / open / blocked) and any outstanding manual steps.
