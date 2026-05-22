---
name: rovner-law-codebase
description: Use whenever the user mentions Rovner Law, this repo, the 29-PR cleanup, or any of the systems in it (admin area, contact form, S3 uploads, practice areas, NextAuth, Prisma models). Loads the architecture map, landmine inventory, and 29-PR cleanup plan so you don't re-discover them or guess. Trigger words: "rovner", "admin", "create-admin", "middleware", "authOptions", "practiceAreas", "hCaptcha", "Mailgun", "S3 lockdown", "PR 01..29".
---

# Rovner Law Website — Working Skill

You're working in `arovn10/ROVNERLAWWEBSITE` — a Next.js 15 / Prisma / NextAuth marketing site mid-way through a 29-PR cleanup. Before doing anything else:

1. Read `.claude-work/SKILL.md` — full codebase deep dive (stack, data model, every landmine, env matrix).
2. Read `.claude-work/00-README.md` — the 29-PR plan with branch names, dependencies, PR body template, and per-PR workflow.

Skipping those two files will cause you to duplicate work or guess wrong about systems that have already been mapped. They're the source of truth.

## Quick orientation (so you can decide what to read next)

- **Framework:** Next.js 15.3.8 App Router, TypeScript ~5, Tailwind 3.4
- **Data:** Postgres + Prisma 6.9 (`DATABASE_URL`)
- **Auth:** NextAuth 4.24 Credentials + JWT (bcrypt password hashes)
- **Storage:** S3 bucket `rovnerlawbucket` (us-east-1)
- **Email:** Mailgun (`mailgun.js`) — the `Resend` references are dead code
- **Deploy:** Vercel → `rovnerlawwebsite.vercel.app`

## The five things that are not what they look like

1. **Admin area is unprotected.** `middleware.ts` has its `config` matcher commented out, so the middleware function never runs. `src/app/admin/layout.tsx` has its server-side `redirect()` commented out. API routes call `getServerSession()` **without `authOptions`**, which always returns `null` in App Router with JWT strategy. Fixed across PRs 02, 03, 07, 08, 09.
2. **Admin password is in git history** (`scripts/create-admin.ts:7-8`, `15Saratoga!`). PR 01 changes the script to read from env; the owner must rotate the actual password.
3. **`src/app 2/` exists** — a 54-file copy-paste duplicate of `src/app/admin/` and `src/app/api/`. Not imported anywhere. PR 13 deletes it.
4. **Practice areas are dual-sourced** — both a hardcoded `practiceAreas` array of 16 items in `src/app/practice/page.tsx` AND a `PracticeArea` Prisma model. The hardcoded array drives the public listing today. PR 17 seeds the DB from it and switches the listing to be DB-driven. **Keep the 10 static `/practice/<slug>/page.tsx` files** — they have unique long-form copy. **Keep the `dedicatedSlugs` whitelist** in `[slug]/page.tsx`.
5. **Build error suppression is on.** `next.config.ts` has `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true`. Until PR 16 flips them, use `npx tsc --noEmit` as the real type-check signal — `npm run build` will succeed even with real errors.

## Visible-state invariant (non-negotiable)

The public site must look and behave **identically** to a logged-out visitor before and after every PR. No copy changes, no layout changes, no new visible UI. Internal cleanup only. If a change would affect what a logged-out visitor sees, stop and ask the owner first.

## How to work a PR

1. `git checkout main && git pull`
2. `git checkout -b cleanup/<NN>-<kebab-title>` — branch name from `.claude-work/00-README.md`
3. Make the change. Keep it scoped to one logical concern.
4. `npx tsc --noEmit` — must be clean.
5. `npm run build` — must succeed.
6. Commit. Push with `git push -u origin <branch>`. Network retries: 4 attempts, exponential backoff (2s, 4s, 8s, 16s).
7. Open PR via `mcp__github__create_pull_request`. Body must follow the template in `00-README.md` (Why → What changed → Testing → Prerequisite PRs → Manual steps).
8. Status line in chat: `PR <NN>: done, #<num> opened` or `PR <NN>: blocked, need <X>`.

## When to stop and ask

These come up in the plan and **must not be guessed**:

| PR | Question for the owner |
|---|---|
| 01 | Remind them to rotate the password after merge |
| 04 | AWS account ID + IAM role ARN for the bucket policy |
| 05 | hCaptcha site key + secret (ship dormant if not yet set up) |
| 10 | Visual choice if deviating from the admin aesthetic (white/blue gradient, glassy cards) |
| 11 | Length caps for contact form fields |
| 12 | Rate-limit policy (default: 5 per IP per 15 min) + cold-start caveat acceptable? |
| 17 | Confirm static `/practice/<slug>` pages stay (default: yes) |

Anything else outside the documented plan, ask before shipping.

## Files you'll touch most

- `middleware.ts` — admin route guard (PR 03)
- `src/lib/auth.ts` — to be created by PR 02 (export `authOptions`)
- `src/app/api/auth/[...nextauth]/route.ts` — currently inline NextAuth config
- `src/app/api/upload/route.ts` — S3 upload, no auth, public-read ACL (PR 06)
- `src/app/api/contact/route.ts` — Mailgun contact intake (PRs 05, 11, 12)
- `src/app/admin/layout.tsx` — server-side guard (PR 09)
- `src/app/practice/page.tsx` — hardcoded `practiceAreas` array (PR 17)
- `next.config.ts` — TS/ESLint suppression (PR 16)
- `scripts/create-admin.ts` — hardcoded password (PR 01)

## Per-PR status, kept current

Track progress in your chat output — one line per PR. The plan in `00-README.md` is the ledger; mark each PR's status in your end-of-task summary so the owner can scan it without scrolling.
