# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Last verified against the tree at commit `1fa7ca0` (branch `claude/claude-md-docs-285lgn`), 2026-08-01.

## What this is

Marketing + lead-capture site for the **Law Offices of Rovner, Allen, Rovner & Sigman** (Philadelphia
personal injury / criminal defense). Public pages are content-managed through a password-protected
admin area; the money path is the contact form at `/contact`.

- **Repo:** github.com/arovn10/ROVNERLAWWEBSITE
- **Prod:** **www.dial-law.com** (apex `dial-law.com` 307s to `www`). Also served at
  `rovnerlawwebsite.vercel.app` and the usual Vercel aliases — don't mistake the `.vercel.app` host
  for the canonical one, and see landmine 2.
- **Vercel:** project `rovnerlawwebsite` (`prj_sBqewDKlfhqqPOli1h1R0eAt9vUL`) under team
  "Alec Rovner's projects", auto-deploying `main`. Vercel builds on **Node 22.x** while the repo pins
  `@types/node@^20` — worth knowing when a runtime API disagrees with the types.
- Next.js 15 App Router · React 19 · TypeScript (strict) · Tailwind 3 · Prisma 6 + PostgreSQL ·
  NextAuth 4 (Credentials + JWT) · AWS S3 for images · Mailgun for email · zod for request validation

`CODEBASE.md` is the longer architecture write-up — read it for per-model and per-page detail, but
see "Docs that are wrong" below first, because parts of it describe features no longer in the code.

## Commands

```bash
npm install                  # postinstall runs `prisma generate`
npm run dev                  # next dev --turbopack → http://localhost:3000
npx tsc --noEmit             # typecheck — the fast, offline correctness gate
npm run lint                 # next lint
npm run build                # prisma generate && prisma migrate deploy && next build
npm start                    # production server
npm run create-admin         # seeds an admin user from ADMIN_EMAIL / ADMIN_PASSWORD
```

**`npm run build` needs a reachable `DATABASE_URL`** — `prisma migrate deploy` sits in the middle of
it and fails without a live Postgres. For a pure code check use `npx tsc --noEmit` plus `npm run lint`;
neither touches the database. Almost every page and route also needs a real DB at runtime, so there is
no meaningful "run it without Postgres" mode.

**Type and lint errors fail the build.** `next.config.ts` no longer sets `ignoreBuildErrors` or
`eslint.ignoreDuringBuilds` (removed in PR 15), so anything `tsc`/eslint rejects blocks the deploy.
Run `npx tsc --noEmit` before pushing — far faster than a full build and it catches most of it.

**There is no test suite** — no test runner, no test files, no `npm test`. Verification is
typecheck + lint + manually exercising the affected page or route. Report it that way rather than
implying tests passed.

Apple Silicon: `./run-dev.sh` forces arm64 Node via nvm (works around a "Bad CPU type" node install
on the owner's Mac).

## Architecture

### Two parallel shells, one route tree

Every public page renders **both** a desktop and a mobile tree in the same component, switched with
Tailwind (`hidden lg:block` / `block lg:hidden`) — not by route, not by JS. The practical consequence:
**a copy or layout change usually has to be made twice in the same file.** Search for the string;
don't assume the first hit is the only one.

Desktop shell is `Header` + `Footer`; mobile shell is `MobileHeader` + `MobileNav`. The old
`Navigation*.tsx` components were deleted in PR 19 — don't resurrect them.

### Server/client boundary — the recurring 500

`MobileHeader` and `MobileNav` are client components taking `isMenuOpen` / `onMenuClick` / `onClose`
**function** props. A server component (any `async` page that awaits Prisma) cannot pass a function
across the boundary — Next 15 throws at SSR time. That is exactly how `/in-the-news/[id]` shipped a
production 500 (hotfix `d7279de`).

The fix pattern: a `"use client"` wrapper that owns the `useState` and renders the mobile shell
itself. **`src/components/MobileNavShell.tsx` is the reusable one — use it.** The server page renders
`<MobileNavShell />`, a component *reference*, which is serializable.
(`src/app/in-the-news/[id]/MobileNavClient.tsx` is the original route-local version and does the same
thing.) **Any server page that needs mobile nav must go through one of these.**

### API routes: two shapes

Route handlers live in `src/app/api/**/route.ts` in exactly two flavors:

1. **Collections** — `lawyers`, `settlements`, `news`, `archives`, `practice-areas`.
   `route.ts` has `GET` (public list) + `POST` (create); `[id]/route.ts` has `GET`/`PUT`/`DELETE`.
2. **Singletons** — `about-us`, `contact-us`, `locations`. `GET` auto-creates a default row if none
   exists, then `PUT` updates it. These back the CMS-editable static pages.

Plus the specials: `auth/[...nextauth]`, `upload` (S3), `contact` (public form intake),
`contact-us/submissions` (lead inbox), `settings/firm-name`, `health`.

**Every mutating handler follows the same three-step preamble** — copy it exactly:

```ts
const session = await getServerSession(authOptions);              // 1. auth (writes only)
if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

const parsed = parseOrError(someSchema, await request.json());    // 2. zod validate
if (parsed instanceof NextResponse) return parsed;                //    (parseOrError returns a 400)

// 3. Prisma write in try/catch returning a 500
```

`parseOrError` and every schema live in `src/lib/schemas.ts` — add schemas there, not inline. The
`instanceof NextResponse` check *is* the error path; skipping it silently discards validation.

GET handlers on public collections are intentionally unauthenticated. `contact-us/submissions` is the
exception — it holds PII and checks the session on read.

### Admin auth: three layers, one switched off

1. `middleware.ts` — redirects unauthenticated `/admin/*` to `/admin/login` (matcher exempts
   `/admin/login` and `/api/auth`). **Active.**
2. `src/app/admin/layout.tsx` — the server-side `getServerSession` redirect is **commented out**,
   marked `TEMPORARILY DISABLED`; the layout still reads the session for the header display. **Not active.**
3. Per-route `getServerSession` in every mutating handler. **Active.**

Writes are genuinely protected, but don't repeat CODEBASE.md's claim that all three layers are live.
If you re-enable layer 2, verify `/admin/login` still renders — it sits inside the same layout
subtree, which is the likely reason it was disabled.

`authOptions` lives in `src/lib/auth.ts` (extracted in PR 02) — import it, never redefine it.
Credentials provider + bcrypt + JWT strategy; `role` is threaded through the jwt/session callbacks
and typed in `src/types/next-auth.d.ts`.

### Practice-area routing — `src/lib/practice-areas.ts` is the source of truth

Practice areas used to be defined in **four** places with three disagreeing slug sets (an earlier
version of this file said three). The damage: four DB slugs had no page and answered 200 with an empty
shell — soft 404s that were in the submitted sitemap; `defective-products` had real copy but no DB row
so nothing linked to it; and the mobile menu linked `products-liability`, which existed nowhere.

Now:

- **`src/lib/practice-areas.ts`** holds `DEDICATED_SLUGS`, the `SLUG_ALIASES` map, and
  `practiceAreaPath()`. Every link and sitemap entry goes through `practiceAreaPath()` so a generated
  URL never merely redirects.
- The **listing** at `/practice` is a server component querying Prisma, passing data to
  `PracticeAreasClient`. Its 13 links are now in the HTML.
- **Ten dedicated sub-pages** at `src/app/practice/<slug>/page.tsx` keep handcrafted copy (809–1,640
  words each). Their slugs must be in `DEDICATED_SLUGS` or the catch-all will shadow them.
- **`src/app/practice/[slug]/page.tsx`** renders the DB record for areas with no dedicated page —
  `notFound()` for a dedicated slug so the static route wins, `permanentRedirect` for an alias, a real
  404 for an unknown slug.

Adding a dedicated page means creating the directory **and** adding the slug to `DEDICATED_SLUGS`.
Adding a DB-only area needs neither — it gets a page automatically.

### Metadata lives in route-segment layouts

A page marked `"use client"` cannot export `metadata`, and 15 of 21 public pages are client
components. Rather than restructure them all, each route has a tiny `layout.tsx` that exports
`metadata` and returns `children` unchanged. **When you add a public route, give it one** — or it
inherits the root layout's canonical (`/`) and gets de-indexed in favour of the homepage.

Dynamic routes use `generateMetadata` in the page instead, since they are already server components:
`/in-the-news/[id]` per article and `/practice/[slug]` per DB row.

Do not put `| Rovner Law` in a title — `layout.tsx`'s title template already appends it. That is what
produced `Disclaimer | Rovner Law | Rovner Law`.

### Server-rendered data, and the one flag that broke it

`src/app/providers.tsx` once loaded NextAuth's `SessionProvider` with
`dynamic(..., { ssr: false })`. Because `Providers` wraps `{children}` in the root layout, that opted
the **entire site** out of server rendering: every page shipped 9 words and a
`BAILOUT_TO_CLIENT_SIDE_RENDERING` marker. `SessionProvider` now lives in
`src/app/admin/AdminSessionProvider.tsx`, scoped to the only routes that call `useSession`.
**Never reintroduce `ssr: false` in the root layout's tree.**

`/attorneys`, `/practice`, `/in-the-news` and `/photo-gallery` are server components that query Prisma
and pass serialised data to a client child. Copy that pattern rather than fetching from `/api/*` in a
`useEffect` — a client fetch means the server prerenders only the loading skeleton, so the content is
absent from the HTML. Serialise `Date` to ISO strings at the boundary so the client's types are
unchanged.

The root layout reads `Settings.firmName` on the server and seeds `FirmNameProvider` with it. Without
that the provider's `'Law Firm'` placeholder would be the server-rendered brand and heading.

### Headings

Exactly **one `<h1>` per page**, naming the page's subject. The header's firm name is a `<p>` — as an
`<h1>` it made the brand the primary heading of all 21 pages. Where a page renders duplicated
desktop/mobile trees, the mobile copy of the heading is a `<p>` with the same classes so only one
`<h1>` reaches the DOM.

### Other pieces worth knowing

- **Images:** `src/lib/s3-upload.ts` + `/api/upload` push to `rovnerlawbucket.s3.us-east-1.amazonaws.com`
  as `public-read`. That exact host is the only `remotePatterns` entry in `next.config.ts` — a new
  bucket or CDN needs a config change or `next/image` refuses it. Lockdown checklist: `docs/s3-lockdown.md`.
- **Firm name:** singleton `Settings.firmName`, read via `src/lib/settings.ts`, hydrated client-side by
  `FirmNameContext` (localStorage first, then `/api/settings/firm-name`).
- **SEO:** `src/lib/site.ts` exports `SITE_URL` from `NEXT_PUBLIC_SITE_URL`, falling back to
  `https://rovnerlaw.com`. One value feeds `metadataBase`, `alternates.canonical`, the OpenGraph/
  Twitter URLs, the `LegalService` JSON-LD in `src/app/layout.tsx`, `src/app/robots.ts`, and
  `src/app/sitemap.xml/route.ts` (static entries + practice areas + news; a DB failure degrades to
  static-only). Because `NEXT_PUBLIC_*` is inlined at build time, changing it requires a **redeploy**,
  not just an env-var edit — and an unset var silently yields the parked-domain fallback (landmine 2).
- **Phone numbers:** `src/lib/contact-details.ts`. The header used to display `888-DIAL-LAW` while
  the link dialled the local number; the toll-free now dials `888-342-5529`. Import from there rather
  than typing a number into a component — 56 hardcoded copies is what made the mismatch invisible. It
  is also where per-channel call-tracking numbers would go, which is the only way to attribute a call
  to Ads versus organic.
- **Mobile call bar:** `src/components/MobileCallBar.tsx`, mounted once in the root layout, hidden on
  `/admin` and `/contact` via `usePathname`.
- **Health:** `GET /api/health` runs `SELECT 1` — 200 `db: "up"`, 503 `db: "down"`. `force-dynamic`.

## Landmines

1. **`src/app 2/` is a tracked dead-code duplicate.** Next routes only from `src/app/`. It is excluded
   in `tsconfig.json` and `eslint.config.mjs`, so it is never typechecked or linted and will rot.
   **Always edit `src/app/`.** Greps over `src/` will hit it — check the path before editing.
2. **`src/lib/site.ts` falls back to a parked domain — never let `NEXT_PUBLIC_SITE_URL` go missing.**
   Fixed in production 2026-08-01, but the trap is still in the code.

   What happened: the variable was never set on Vercel, so `SITE_URL` fell through to its
   `https://rovnerlaw.com` default and the live site served
   `<link rel="canonical" href="https://rovnerlaw.com"/>` on **every** page, with `robots.txt`
   advertising `Host`/`Sitemap` on that host too. `rovnerlaw.com` is not the firm's site — it answers
   200 with a parked lander (`window.onload → /lander`) and has no `/api/health`. So the lead-capture
   site was telling Google the canonical version of every page lived on a parking page.

   Fixed by setting `NEXT_PUBLIC_SITE_URL=https://www.dial-law.com` (production, plain) and
   redeploying via no-op commit `4ced400`. Verified live: canonical, `og:url`, the `LegalService`
   JSON-LD `url`/`logo`, `robots.txt` and `sitemap.xml` all now read `https://www.dial-law.com`, with
   zero `rovnerlaw.com` references left on the homepage.

   **Why it can regress:** `NEXT_PUBLIC_*` is inlined at **build time**, so the variable must exist in
   the build environment — an unset var fails silently and *looks* fine locally. It is set for
   `production` only; a preview deployment still renders the `rovnerlaw.com` fallback. Changing the
   fallback in `src/lib/site.ts` to the real host would make this fail safe and is still worth doing.
3. **`/api/contact` regressions — FIXED, but know the history.** PR 21 (zod validation, commit
   `dbcf53b`) rewrote the route and dropped ~82 lines, silently removing the per-IP rate limit
   (PR 12), the server-side honeypot check (PR 13) and the confirmation auto-reply (PR 14). All three
   were re-landed on top of the zod validation. The lesson generalises: **this repo has a track record
   of refactors dropping behaviour that had no test to protect it.** When you rewrite a route, diff it
   against the previous version rather than reimplementing from the schema.
4. **PII logging — FIXED.** `src/app/api/lawyers/route.ts` logged the full created lawyer object,
   the exact pattern PR 22 stripped and PR 21 reintroduced. Now logs the id only.
5. **`address` was never collected at all — CORRECTED.** An earlier version of this file said the
   form collected `address` and the route discarded it. Verified false: the form has no address input.
   It existed only in the zod schema and the DB column. Dropped from the schema; the nullable column
   remains, since removing it is a destructive migration for no gain.
6. **Migrations have no baseline.** `prisma/migrations/` holds exactly one migration
   (`20260524000001_drop_photo_model`) against a schema with eleven models. `prisma migrate deploy`
   against an **empty** database will not create the schema — prod was built with `db push` before
   migrations existed. So: a fresh or branch DB needs `prisma db push` (or a hand-written baseline)
   rather than `migrate deploy`, and any new schema change must ship a real migration file or it will
   not reach prod.
7. **Server-component + client-nav crash** — see the boundary section above. It escaped review because
   build-time error suppression was still on then; it would be caught now.
8. **`.claude/SKILL.md` does not exist** and never did in git history, yet both `README.md` and
   `CODEBASE.md` link to it as the "deep reference". Don't chase it. `.claude-work/00-README.md` (the
   29-PR pack) is likewise absent — the plan was never committed.
9. **No CSRF protection on admin mutations** — same-origin cookies only. Fine while the API is consumed
   solely by this app's own admin UI; revisit before exposing it anywhere else.
10. **SQLite leftovers are still tracked:** `prisma/prisma/dev.db` and `prisma/dev 2.db`. The schema is
   Postgres. Do not flip the provider back, and don't treat these as a local-dev path.
11. **`prisma/seed.ts` is CommonJS** and requires `../src/lib/aws-config.cjs.js`. That file is now
    committed so the seed resolves — but it is a hand-maintained duplicate of `src/lib/aws-config.ts`.
    Change one, change the other. One-off scripts live in `scripts/archive/` (PR 25), excluded from
    typecheck and lint.
12. **Dead code to know about:** `src/data/settlements.ts` is imported nowhere (settlements come from
    the DB), plus `src/lib/rate-limit.ts` per landmine 3.
13. **Email is Mailgun. Resend is a decoy.** The account has a `dial-law.com` sending domain in Resend
    sitting in **`failed`** (DNS unverified) state, created 2025-07-01 and used by nothing in this repo
    — no `resend` dependency, no API call. CODEBASE.md's "Not Resend — earlier docs were stale" note is
    correct. Don't switch `/api/contact` to Resend on the assumption it's provisioned; that domain
    cannot send until its DNS is verified.

## Docs that are wrong

`CODEBASE.md` was accurate when written (PR 20) and has since drifted. It currently claims, wrongly,
that the contact-form rate limit / honeypot / confirmation email are live (landmine 3), that all three
admin auth layers are active (only two are), and that the lead inbox is at `/admin/submissions` — the
real path is **`/admin/contact-us/submissions`**. `README.md` and `CODEBASE.md` both link to the
nonexistent `.claude/SKILL.md`. Trust the code over both documents, and fix the docs when you touch
the surrounding area.

## Cleanup PR pack status

PRs **01–26 have all landed** except **09** (skipped — schema drift; `ContactSubmission` already
matched the form). There are **no open PRs**. The pack plan itself (`.claude-work/00-README.md`) was
never committed, so what PRs 27–29 were meant to be is not recoverable from this repo — ask rather
than guess.

Beware the **numbering collision**: pack PRs 12/13/14 (`pr/12-rate-limit-contact`, `pr/13-honeypot`,
`pr/14-confirmation-email`) landed early, and later unrelated PRs reused "PR 14" and others in their
commit subjects. Match on branch name or commit SHA, not the "PR NN" label.

## Conventions

- **Branch + PR:** one concern per PR, branch `pr/NN-short-name` or `cleanup/NN-short-name`, commit
  subject `PR NN: ...`. PR body: **Why** (1–2 sentences) / **What changed** (bullets) / **Testing**
  (what you actually ran).
- **Next 15 dynamic params are async:** `{ params }: { params: Promise<{ id: string }> }`, then
  `const { id } = await params`. The old sync signature no longer typechecks.
- **Lint rules that bite:** a bare `catch (error)` with an unused binding is an *error* — write
  `} catch {`. `_`-prefixed identifiers are the escape hatch for intentionally-unused names.
- Validate mutating input with a zod schema from `src/lib/schemas.ts`; never trust `await req.json()`
  directly.
- Import Prisma from `@/lib/prisma` (the singleton) — never `new PrismaClient()` in a route.
- **A new public route needs a `layout.tsx` with `metadata`** (title, description, canonical), or it
  inherits the homepage canonical and is de-indexed.
- **One `<h1>` per page**, and it is not the firm name.
- Prefer server components that query Prisma over client components that fetch `/api/*` — the latter
  ships an empty skeleton to crawlers.
- `@/*` maps to `./src/*`.

## Environment variables

| Var | Used by |
|---|---|
| `DATABASE_URL` | Prisma — and `prisma migrate deploy` during `npm run build` |
| `NEXTAUTH_SECRET` | NextAuth JWT signing; also read directly by `middleware.ts` |
| `NEXTAUTH_URL` | Canonical URL (optional) |
| `AWS_BUCKET_NAME`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` | S3 uploads |
| `MAILGUN_API_KEY`, `MAILGUN_DOMAIN` | `/api/contact` notification. Unset ⇒ email skipped, route still returns 200 |
| `MAILGUN_FROM`, `MAILGUN_EU` | optional. `MAILGUN_REPLY_TO` is currently unread (landmine 3) |
| `CONTACT_EMAIL` | Comma-separated lead recipients; defaults to `rovneralec@gmail.com` |
| `HCAPTCHA_SECRET` | Server-side captcha verify. **Unset ⇒ captcha bypassed entirely** |
| `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` | Renders the widget; unset ⇒ hidden |
| `NEXT_PUBLIC_SITE_URL` | `SITE_URL` for canonicals/sitemap/JSON-LD. Set to `https://www.dial-law.com` on **production only** — preview builds still emit the parked-domain fallback (landmine 2). Inlined at build time, so a change needs a redeploy |
| `ADMIN_EMAIL`, `ADMIN_PASSWORD` | `npm run create-admin` only |

Set these in Vercel for prod and `.env.local` for dev. `.gitignore` covers `.env*` — keep it that way.

## Things not to do

- Do not edit `src/app 2/`.
- Do not introduce SQLite to `schema.prisma`.
- Do not change visible behavior for logged-out visitors as a side effect of a cleanup change.
- Do not run destructive git operations (force-push, `reset --hard`, `branch -D`) without asking.
- Do not add a schema change without a migration file (landmine 6).
