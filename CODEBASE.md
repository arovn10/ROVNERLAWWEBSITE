# Rovner Law Website – Codebase Overview

A Next.js 15 law firm website for **Rovner, Allen, Rovner And Sigman** (Philadelphia personal injury & criminal defense). Deployed at [rovnerlawwebsite.vercel.app](https://rovnerlawwebsite.vercel.app).

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL + Prisma ORM |
| Auth | NextAuth.js (Credentials + JWT) |
| File Storage | AWS S3 |
| Email | Resend |
| UI Components | Radix UI, Lucide icons, shadcn-style components |

---

## Data Model (Prisma)

| Model | Purpose |
|-------|---------|
| **User** | Admin users (email/password, bcrypt) |
| **Lawyer** | Attorneys (name, title, bio, image, order) |
| **Settlement** | Case results ($ amount, type, description) |
| **News** | News items (title, content, source, imageUrl) |
| **Archive** | Archived content (title, content, category, imageUrl) |
| **PracticeArea** | Practice areas (title, slug, content, image, order) |
| **Settings** | Firm-wide settings (e.g. firmName) |
| **AboutUs** | About page content (hero, paragraphs, highlights) |
| **Locations** | Office info, PA/NJ counties, directions |
| **ContactUs** | Contact page content |
| **ContactSubmission** | Form submissions from contact |
| **Photo** | Photo gallery images |

---

## App Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home (settlements carousel, practice areas, CTAs)
│   ├── layout.tsx          # Root layout (Inter font, Providers)
│   ├── providers.tsx       # SessionProvider + FirmNameProvider
│   ├── globals.css
│   ├── practice/           # Practice area pages (e.g. /practice/personal-injury)
│   ├── attorneys/          # Attorney listing
│   ├── about/              # About page
│   ├── contact/            # Contact form
│   ├── locations/          # Locations & directions
│   ├── in-the-news/        # News listing & detail
│   ├── photo-gallery/      # Photo gallery
│   ├── admin/              # Protected admin dashboard
│   │   ├── login/          # Credentials login
│   │   ├── dashboard/
│   │   ├── lawyers/        # CRUD lawyers
│   │   ├── settlements/    # CRUD settlements
│   │   ├── news/           # CRUD news
│   │   ├── archives/       # CRUD archives
│   │   ├── practice-areas/ # CRUD practice areas
│   │   ├── about-us/       # Edit about content
│   │   ├── contact-us/     # Edit contact content + submissions
│   │   └── locations/      # Edit locations
│   └── api/                # API routes
│       ├── auth/[...nextauth]  # NextAuth handler
│       ├── lawyers/
│       ├── settlements/
│       ├── news/
│       ├── archives/
│       ├── practice-areas/
│       ├── settings/firm-name/
│       ├── upload/         # S3 upload
│       ├── contact-us/     # Form submission + Resend
│       └── ...
├── components/             # Shared UI
│   ├── Header, Footer
│   ├── MobileHeader, MobileNav
│   └── ui/                 # Button, Input, Card, etc.
├── lib/
│   ├── prisma.ts           # Prisma client singleton
│   ├── FirmNameContext.tsx # Firm name (DB → localStorage)
│   ├── settings.ts         # getFirmName, setFirmName
│   ├── s3-upload.ts        # AWS S3 upload
│   ├── aws-config.ts       # S3 client config
│   └── utils.ts
└── data/
    └── settlements.ts      # Static settlements (if any)
```

---

## Key Features

1. **Public site**
   - Responsive (desktop + mobile)
   - Home: settlements carousel, practice areas carousel
   - Practice areas: dynamic `/practice/[slug]` from DB
   - Attorneys: lawyers from DB (ordered)
   - Contact: form with hCaptcha, Resend email

2. **Admin**
   - Protected by NextAuth (Credentials, JWT)
   - Middleware: redirects unauthenticated users from `/admin` to `/admin/login`
   - Full CRUD for lawyers, settlements, news, archives, practice areas
   - Edit About, Contact, Locations CMS-style content

3. **Media**
   - Images: S3 (`rovnerlawbucket.s3.us-east-1.amazonaws.com`)
   - Next.js Image component with remote patterns for S3

4. **Firm name**
   - Stored in Settings
   - `FirmNameContext` fetches on load, caches in localStorage
   - Used in Header/Footer and other components

---

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | NextAuth JWT signing |
| `NEXTAUTH_URL` | App URL (e.g. production) |
| `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` | S3 upload |
| `AWS_REGION`, `AWS_S3_BUCKET` | S3 config |
| Resend / hCaptcha | Email + CAPTCHA (if used) |

---

## Scripts

```bash
npm run dev        # Next dev with Turbopack
npm run build      # prisma generate + next build
npm run start      # Production server
npm run create-admin   # Create admin user (scripts/create-admin.ts)
```

---

## Git

- Remote: https://github.com/arovn10/ROVNERLAWWEBSITE
- Branch: `main`
- Working tree: clean, synced with origin
