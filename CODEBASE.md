# Rovner Law Website — Codebase Overview

A Next.js 15 marketing + lead-capture site for the **Law Offices of Rovner, Allen, Rovner & Sigman** (Philadelphia personal injury & criminal defense). Production: [rovnerlawwebsite.vercel.app](https://rovnerlawwebsite.vercel.app).

For day-to-day operational notes, landmines, and the 29-PR cleanup plan, see `CLAUDE.md` at the repo root and `.claude/SKILL.md` for the deep reference.

---

## Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | Next.js 15 (App Router) | Turbopack dev |
| Language | TypeScript | Strict; build no longer ignores type or lint errors |
| Styling | Tailwind CSS 3 | Custom navy / blue / gold palette |
| UI | React 19, Radix primitives, Lucide icons, shadcn-style `ui/` components | |
| Database | PostgreSQL via Prisma 6 | Migrations run on build (`prisma migrate deploy`) |
| Auth | NextAuth 4 (Credentials + JWT) | `authOptions` in `src/lib/auth.ts`; admin gated at middleware + layout + per-route |
| File storage | AWS S3 (`rovnerlawbucket.s3.us-east-1.amazonaws.com`) | `@aws-sdk/client-s3`, uploads are `public-read` |
| Email | **Mailgun** (`mailgun.js`) | Not Resend — earlier docs were stale |
| Captcha | `@hcaptcha/react-hcaptcha` | Env-gated. `HCAPTCHA_SECRET` unset ⇒ verification bypassed; `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` unset ⇒ widget hidden |

---

## Data model (Prisma)

| Model | Purpose |
|-------|---------|
| `User` | Admin accounts (email, bcrypt password, role) |
| `Lawyer` | Attorneys (name, title, bio, image, order, active) |
| `Settlement` | Case results ($ amount, type, description, date) |
| `News` | "In the News" items |
| `Archive` | Photo gallery items — **the gallery reads `Archive`, not `Photo`** |
| `PracticeArea` | Practice area catalog (title, slug, content, features, image, banner, color, order, active) |
| `Settings` | Singleton firm-wide settings (currently just `firmName`) |
| `AboutUs`, `Locations`, `ContactUs` | Singleton CMS rows for the corresponding public pages |
| `ContactSubmission` | Form submissions from `/contact` |

All IDs are `cuid()`; all rows carry `createdAt` / `updatedAt`.

> Note: an unused `Photo` model lived in the schema until PR 18, when it was dropped along with its (always empty) DB table.

---

## App structure

```
src/
├── app/                          # App Router tree (the real one — never edit src/app 2/)
│   ├── page.tsx                  # Home (settlements + practice-areas carousels)
│   ├── layout.tsx                # Root layout, Inter + Libre Baskerville fonts
│   ├── providers.tsx             # SessionProvider + FirmNameProvider
│   ├── globals.css
│   ├── about/                    # Reads /api/about-us
│   ├── attorneys/                # Reads /api/lawyers
│   ├── contact/                  # Form → /api/contact
│   ├── locations/                # Reads /api/locations
│   ├── in-the-news/              # Listing + [id]/page.tsx detail
│   ├── photo-gallery/            # Reads /api/archives
│   ├── practice/                 # Listing — DB-driven (PR 17)
│   ├── practice/[slug]/          # Server component; redirects unless slug is in dedicatedSlugs
│   ├── practice/<slug>/          # Ten static sub-pages with handcrafted copy
│   ├── disclaimer/
│   ├── admin/                    # Protected admin dashboard
│   │   ├── login/                # Credentials login
│   │   ├── lawyers/              # Full CRUD
│   │   ├── settlements/          # Full CRUD
│   │   ├── news/                 # Full CRUD
│   │   ├── archives/             # Full CRUD
│   │   ├── practice-areas/       # Full CRUD
│   │   ├── about-us/             # Singleton edit
│   │   ├── contact-us/           # Singleton edit + submission viewer
│   │   ├── locations/            # Singleton edit
│   │   └── submissions/          # Lead inbox (PR 10)
│   └── api/                      # Route handlers
│       ├── auth/[...nextauth]/   # NextAuth handler
│       ├── lawyers, settlements, news, archives, practice-areas/  # GET list, POST create, [id] GET/PUT/DELETE
│       ├── about-us, contact-us, locations/                       # GET (auto-creates default), PUT
│       ├── settings/firm-name/   # GET / POST
│       ├── upload/               # S3 multipart upload (auth-gated, PR 06)
│       └── contact/              # POST → DB write + Mailgun notification + Mailgun confirmation
├── components/                   # Shared UI
│   ├── Header, Footer            # Desktop shell
│   ├── MobileHeader, MobileNav   # Mobile shell
│   ├── SmoothImage, HideDevPortal
│   └── ui/                       # button, card, input, textarea (shadcn-style)
├── lib/
│   ├── prisma.ts                 # Prisma client singleton
│   ├── auth.ts                   # NextAuth `authOptions`
│   ├── FirmNameContext.tsx       # Firm name context (DB → localStorage)
│   ├── settings.ts               # getFirmName / setFirmName
│   ├── s3-upload.ts              # uploadToS3, uploadLawyerPhoto
│   ├── aws-config.ts             # S3 client config (ESM module since PR 15)
│   ├── practiceAreasSeedData.ts  # Initial seed data for /api/practice-areas (PR 17)
│   └── utils.ts                  # cn, formatCurrency
└── types/
    └── next-auth.d.ts            # Augments Session/User/JWT with `role`
```

---

## Key features

1. **Public site** (desktop + mobile rendered in parallel, gated by Tailwind `hidden lg:block` / `block lg:hidden`)
   - Home: settlements carousel (auto-rotates every 5s), practice-areas carousel, CTAs
   - Practice listing is DB-driven; the ten dedicated sub-pages retain their handcrafted copy
   - Attorneys list ordered by `Lawyer.order` ASC, filtered to `active: true`
   - Contact form posts to `/api/contact` → DB row + Mailgun notification + Mailgun confirmation to submitter

2. **Admin**
   - Three-layer auth: middleware (`/admin/*`), server layout guard, and per-route `getServerSession` checks. All three are active.
   - Full CRUD for lawyers, settlements, news, archives, practice areas
   - Singleton-content edit for About, Contact, Locations
   - Submissions inbox at `/admin/submissions`

3. **Lead capture**
   - In-memory IP rate limit on `/api/contact` (5 / 60s) — PR 12
   - Hidden `website` field as a honeypot — PR 13
   - Auto-reply confirmation email to the submitter — PR 14
   - hCaptcha widget renders client-side; server-side verification activates when `HCAPTCHA_SECRET` is set

4. **Firm name**
   - Stored in the singleton `Settings.firmName`
   - `FirmNameContext` hydrates from `localStorage`, then overwrites with `/api/settings/firm-name`

---

## Environment variables

| Variable | Purpose | Required for |
|----------|---------|--------------|
| `DATABASE_URL` | Postgres connection string | Everything DB-touching, and `prisma migrate deploy` on build |
| `NEXTAUTH_SECRET` | NextAuth JWT signing | Admin login in prod |
| `NEXTAUTH_URL` | Canonical app URL | NextAuth (optional, has `trustHost` fallback) |
| `AWS_BUCKET_NAME`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` | S3 client + bucket | Admin image upload |
| `MAILGUN_API_KEY`, `MAILGUN_DOMAIN` | Mailgun client | `/api/contact` notification + confirmation emails (otherwise both are skipped and the route still returns 200) |
| `MAILGUN_FROM` | From-address for outbound mail | optional; defaults to `Rovner Law <mailgun@${MAILGUN_DOMAIN}>` |
| `MAILGUN_REPLY_TO` | Reply-To on confirmation email | optional; defaults to first `CONTACT_EMAIL` recipient |
| `MAILGUN_EU` | `true` → use EU Mailgun endpoint | optional |
| `CONTACT_EMAIL` | Comma-separated list of recipients for the firm notification | optional; defaults to `rovneralec@gmail.com` |
| `HCAPTCHA_SECRET` | Server-side hCaptcha verification | When unset, captcha check is bypassed |
| `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` | Client-side widget rendering | When unset, the widget is hidden |
| `ADMIN_EMAIL`, `ADMIN_PASSWORD` | Used by `scripts/create-admin.ts` | One-time seed admin via env |

---

## Scripts

```bash
npm run dev          # next dev --turbopack
npm run build        # prisma generate && prisma migrate deploy && next build  (PR 16)
npm run start        # production server
npm run lint         # next lint — clean since PR 15
npm run create-admin # seeds the admin user from ADMIN_EMAIL / ADMIN_PASSWORD env vars
```

---

## Deployment

- Hosted on Vercel.
- Production domain: `rovnerlawwebsite.vercel.app`.
- The `build` script runs `prisma migrate deploy` between `prisma generate` and `next build`, so committed migrations apply automatically on each deploy.
- `next.config.ts` whitelists the S3 bucket as a remote image source; type and lint errors are no longer suppressed at build time.

---

## Git

- Repo: <https://github.com/arovn10/ROVNERLAWWEBSITE>
- Default branch: `main`
- Cleanup PRs land via the cleanup/`<NN-name>` branch convention.
