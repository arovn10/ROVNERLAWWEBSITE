# SKILL.md — Rovner Law Website Codebase Deep Dive

Internal handoff doc for anyone (human or Claude) picking up the cleanup of `arovn10/ROVNERLAWWEBSITE`. Read this before touching code.

## What this is

A Next.js 15 marketing site for **Rovner, Allen, Rovner & Sigman** (Philadelphia personal injury & criminal defense), deployed on Vercel at `rovnerlawwebsite.vercel.app`. The public site is a brochure with a contact form. There's an unprotected admin area at `/admin` for editing CMS content, attorney bios, settlements, news, archives, and practice areas.

## Stack

| Layer | Tech | Notes |
|---|---|---|
| Framework | Next.js `15.3.8` (App Router, Turbopack dev) | |
| Language | TypeScript ~5 | Build errors are **suppressed** in `next.config.ts` |
| Styling | Tailwind 3.4 + raw inline styles | Lots of inline `style={{}}` blocks — not idiomatic but works |
| DB | Postgres + Prisma 6.9 | `DATABASE_URL` env |
| Auth | NextAuth 4.24 Credentials provider, JWT sessions | bcrypt password hashes |
| Storage | AWS S3 | bucket `rovnerlawbucket`, region `us-east-1` |
| Email | Mailgun (`mailgun.js`) | Used by contact form. `Resend` was the prior provider and still appears in dead code paths |
| Captcha | `@hcaptcha/react-hcaptcha` installed but **completely unwired** | |

## Repo layout

```
src/
├── app/                     # Next.js App Router (public + /admin)
├── app 2/                   # ★ DUPLICATE — 54 tracked files, must be deleted (PR 13)
├── components/              # Header, Footer, MobileHeader, MobileNav, SmoothImage, ui/*
├── lib/
│   ├── prisma.ts            # Prisma singleton
│   ├── aws-config.ts        # S3 config — uses CommonJS module.exports in a .ts file (PR 18)
│   ├── aws-config.cjs.js    # Duplicate of above (PR 14)
│   ├── FirmNameContext.tsx  # Firm name context, hydrates from /api/settings/firm-name + localStorage
│   ├── settings.ts          # getFirmName / setFirmName helpers
│   ├── s3-upload.ts         # S3 upload helper (rarely used)
│   └── utils.ts             # clsx + tailwind-merge cn()
├── data/settlements.ts      # Static settlements seed
├── scripts/seed.ts          # Seed script (separate from top-level scripts/)
└── types/next-auth.d.ts     # NextAuth session typing
scripts/
├── create-admin.ts          # ★ Hardcodes admin email + password (PR 01)
├── create-lawyers.ts        # One-time seed
├── fix-eslint*.js           # One-off cleanup scripts — dead (PR 14)
├── fix-lawyer-orders.ts     # One-off
├── reseed-archives.ts       # One-off
└── seed-local.ts            # Local seed
prisma/schema.prisma         # See data model below
middleware.ts                # ★ `config` export commented out — middleware never runs (PR 03)
next.config.ts               # ★ TS + ESLint errors ignored during builds (PR 16)
```

## Data model (Prisma)

| Model | Purpose | Notes |
|---|---|---|
| `User` | Admin credentials | `email` unique, `password` bcrypt, `role` defaults `"admin"` |
| `Lawyer` | Attorneys | `order` for display, `active` flag |
| `Settlement` | Case results | `amount` float, `date`, `caseType` |
| `News` | News items | `imageUrl?`, `url?` |
| `Archive` | Archived content | `category`, `imageUrl?` |
| `PracticeArea` | Practice area CRUD | `slug` unique. **Currently dual-sourced** — also hardcoded in `src/app/practice/page.tsx` |
| `Settings` | Singleton settings row | Just `firmName` |
| `AboutUs`, `Locations`, `ContactUs` | Singleton CMS rows | Editable from admin |
| `ContactSubmission` | Form submissions | No admin UI to view them (PR 10) |
| `Photo` | Photo gallery items | |

There's no `_prisma_migrations` artifact tracked — the team uses `prisma db push` against Postgres directly.

## App structure

### Public routes
- `/` (home) — hero, settlements carousel, practice areas carousel, attorneys preview. Client component. Fetches `/api/settlements` and `/api/practice-areas` on mount. **Also imports** `practiceAreas` (a hardcoded array) from `src/app/practice/page.tsx` — that's a circular-ish import the home page no longer uses (set to overwrite immediately).
- `/about` — CMS-driven from `AboutUs`
- `/attorneys` — CMS-driven from `Lawyer`
- `/contact` — Contact form. Posts to `/api/contact`
- `/locations` — CMS-driven from `Locations`
- `/practice` — Listing. Driven by a **hardcoded `practiceAreas` array of 16 items in the same file** (PR 17)
- `/practice/<slug>/page.tsx` — 10 dedicated static pages with hand-written long-form copy (`auto-accidents`, `criminal-defense`, `defective-products`, `family-law`, `medical-malpractice`, `motorcycle-accidents`, `personal-injury`, `premises-liability`, `truck-accidents`, `workers-compensation`)
- `/practice/[slug]/page.tsx` — Dynamic catch-all. Has a `dedicatedSlugs` whitelist; if slug is in the list it `notFound()`s (dead path — static route wins), otherwise redirects to `/practice`
- `/in-the-news` — News listing + detail
- `/photo-gallery` — Photo gallery
- `/disclaimer` — Static

### Admin routes (`/admin/*`)
- `/admin/login` — NextAuth credentials login
- `/admin/dashboard` — Counts + firm-name editor
- `/admin/lawyers`, `/admin/lawyers/new`, `/admin/lawyers/[id]/edit` — CRUD
- `/admin/practice-areas`, `/admin/practice-areas/new`, `/admin/practice-areas/[id]/edit` — CRUD (DB-side; UI is disconnected from public listing until PR 17)
- `/admin/settlements`, `/admin/news`, `/admin/archives` — CRUD
- `/admin/about-us`, `/admin/locations`, `/admin/contact-us` — Singleton CMS edit pages
- No admin view of `ContactSubmission` rows yet (PR 10)

### API routes (`src/app/api/*`)
- `auth/[...nextauth]/route.ts` — NextAuth handler. **`authOptions` is defined inline, not exported** (PR 02)
- `contact/route.ts` — Public contact form intake. Saves to `ContactSubmission` + sends Mailgun email. No CAPTCHA verification (PR 05), no rate limit (PR 12), no length caps (PR 11). Recipient defaults to a personal Gmail
- `contact-us/route.ts` — CMS content for the contact page (not form submissions; misleading name)
- `upload/route.ts` — S3 upload. **No auth check**. Hardcodes `ACL: 'public-read'` (PR 04 + PR 06)
- `lawyers`, `settlements`, `news`, `archives`, `practice-areas`, `about-us`, `locations`, `contact-us`, `settings/firm-name` — CRUD endpoints. All have `getServerSession` either commented out or called **without `authOptions`** (which returns null in App Router with the JWT strategy, so the existing checks are no-ops). See PR 07–08
- `sitemap.xml/route.ts` — Sitemap

## The big landmines

### 1. Admin area is unprotected
- `middleware.ts:33-40` — `export const config` (the matcher) is commented out. Without a matcher, Next.js never invokes the middleware function. The session check inside is dead code.
- `src/app/admin/layout.tsx:11-17` — Server-side session check + redirect is commented out (TEMPORARILY DISABLED).
- `src/app/admin/dashboard/page.tsx:69-73` — Client-side redirect on `!session` exists but runs only after hydration, so the page renders briefly without it.
- All admin write API routes have their `getServerSession` either commented out or called without `authOptions`. Even where the call survives (`news` POST, `archives` POST, `lawyers` DELETE), it returns `null` because Next.js App Router needs `authOptions` passed explicitly to read the JWT cookie.

**Fix order:** PR 02 (export `authOptions`), PR 03 (re-enable middleware matcher), PR 07–09 (gate the API routes + layout).

### 2. Admin password is in the repo
- `scripts/create-admin.ts:7-8` — Hardcoded `arovner@dial-law.com` / `15Saratoga!`. The password is in git history.
- **PR 01:** Change script to read from env or argv. **The owner must rotate the password manually** after merge — that's a manual step in the PR body.

### 3. S3 bucket policy is wide open
- `src/app/api/upload/route.ts:42` — `ACL: 'public-read'` on every PUT.
- The bucket itself almost certainly has public-read enabled (Vercel-rendered images load directly from `https://rovnerlawbucket.s3.us-east-1.amazonaws.com/...`).
- **PR 04:** Checklist-only PR with IAM policy JSON for an upload-only role + bucket policy JSON that locks public listing but keeps public GET on `uploads/*` (since the marketing site needs public image reads). No code changes — just docs + JSON to apply in AWS console.
- **PR 06:** Remove the inline `ACL: 'public-read'` (modern S3 best practice — let the bucket policy govern access) and add a session check to the upload route.

### 4. TypeScript / ESLint suppression
- `next.config.ts:16-22` — `ignoreBuildErrors: true` and `ignoreDuringBuilds: true`.
- This hides real bugs. The fix is mechanical but verbose because every PR up to 15 has been able to ride the suppression. **PR 16** turns it off — and may surface many small errors that have to be fixed in the same PR. Use `npx tsc --noEmit` and `npx next lint` as the real signal until then.

### 5. Console.log spam in production
- `src/app/api/upload/route.ts` — logs full AWS config (bucket, region, **but not the credentials themselves** since `awsConfig` doesn't expose them — still, it's noisy)
- `src/app/api/settlements/route.ts`, `src/app/api/lawyers/**`, `src/app/api/archives/route.ts` — log request payloads, including potentially sensitive form data
- `src/app/in-the-news/page.tsx` — runtime debug logs
- **PR 15** sweeps these.

### 6. Duplicate directory `src/app 2/`
- 54 tracked files, looks like a copy-paste mishap. Mirrors `src/app/admin/*` and `src/app/api/*`. Not imported from anywhere in `src/app/`. Delete it (**PR 13**).

### 7. Practice areas dual-sourced
- `PracticeArea` model in DB
- **Also** a hardcoded `practiceAreas` array of 16 items in `src/app/practice/page.tsx`
- `src/app/page.tsx` imports `practiceAreas` from `practice/page` but then immediately overwrites it with `fetch('/api/practice-areas')` — the import is dead but creates a confusing client→client dependency
- **PR 17:** Seed `PracticeArea` from the hardcoded array (one-shot migration script), drop the hardcoded array, make the `/practice` listing fetch from `/api/practice-areas`. Keep the 10 static `/practice/<slug>/page.tsx` files — they have unique long-form copy. The `dedicatedSlugs` whitelist in `[slug]/page.tsx` stays.

### 8. Contact form
- No CAPTCHA verification (`@hcaptcha/react-hcaptcha` is in deps but unused in code — PR 05)
- No rate limiting (PR 12)
- No max-length validation on `facts` or any other field (PR 11) — a motivated abuser could POST a megabyte of HTML
- Saves to DB, sends email; recipient defaults to `rovneralec@gmail.com` if `CONTACT_EMAIL` env is unset. Owner should set `CONTACT_EMAIL` in Vercel.
- The `escapeHtml` helper in the route file is safe enough (escapes `&<>"'`)

### 9. `aws-config.ts` is CommonJS
- `src/lib/aws-config.ts` uses `module.exports = { awsConfig }` inside a `.ts` file. Works because TS suppression is on; will fail once PR 16 lands. PR 18 converts to ES export.

### 10. Dead dependencies
- `jsonwebtoken` — not imported anywhere
- `@auth/prisma-adapter` — installed but never wired (NextAuth uses Credentials + JWT, no adapter needed)
- `@prisma/extension-accelerate` — installed but never used
- PR 14 removes them.

## Environment variables

| Var | Used where | Required? |
|---|---|---|
| `DATABASE_URL` | `prisma.ts` | Yes |
| `NEXTAUTH_SECRET` | NextAuth | Yes |
| `NEXTAUTH_URL` | NextAuth | Yes in prod |
| `AWS_BUCKET_NAME` | `aws-config.ts` | Yes for uploads |
| `AWS_REGION` | `aws-config.ts` | Yes for uploads |
| `AWS_ACCESS_KEY_ID` | `aws-config.ts` | Yes for uploads |
| `AWS_SECRET_ACCESS_KEY` | `aws-config.ts` | Yes for uploads |
| `MAILGUN_API_KEY` | `api/contact/route.ts` | Optional — form just skips email if missing |
| `MAILGUN_DOMAIN` | `api/contact/route.ts` | Optional |
| `MAILGUN_FROM` | `api/contact/route.ts` | Optional — defaults `Rovner Law <mailgun@${domain}>` |
| `MAILGUN_EU` | `api/contact/route.ts` | Optional — set to `"true"` to use the EU endpoint |
| `CONTACT_EMAIL` | `api/contact/route.ts` | Optional — defaults to a personal Gmail (fix in setup, not code) |
| `HCAPTCHA_SECRET` | (not yet wired — PR 05) | Optional |
| `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` | (not yet wired — PR 05) | Optional |
| `NEXT_PUBLIC_SITE_URL` | `sitemap.xml/route.ts` | Optional — defaults `http://localhost:3000` |
| `RESEND_API_KEY` | dead reference in `src/app 2/api/contact/route.ts` | n/a — `src/app 2` is being deleted |

Add `.env.example` in PR 24.

## Commands
- `npm run dev` — Next dev with Turbopack
- `npm run build` — `prisma generate && next build`
- `npm run start` — production server
- `npm run lint` — `next lint`
- `npm run create-admin` — create the admin user via `scripts/create-admin.ts`
- `npx tsc --noEmit` — **use this as the real type-check signal** until PR 16 lifts the build suppression

## House style
- Inline `style={{}}` blocks coexist with Tailwind classes. Don't refactor styling unless asked.
- Public site has separate desktop and mobile branches in the same component (`hidden lg:block` / `block lg:hidden`). Layout shifts are accepted.
- "use client" is on most pages because most fetch data client-side. PR 20 (if scoped) could move read-only pages to server components, but it's optional.

## Visible-state invariant for this cleanup
The public site must look and behave identically to a logged-out visitor before and after every PR. No copy changes, no layout changes, no new visible UI. Internal cleanup only. Admin UI may evolve as long as existing functionality stays intact.

## Things to ask the owner, not guess
- New admin password value (PR 01 — they'll set it manually after merge)
- AWS account ID / IAM role ARN for the bucket policy (PR 04)
- hCaptcha site key + secret (PR 05 — code ships dormant)
- Final destination email for contact form (`CONTACT_EMAIL`) — currently a personal Gmail
- Whether to keep the `Mailgun` US or EU endpoint
