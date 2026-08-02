/**
 * Single source of truth for practice-area routing.
 *
 * Practice areas were previously defined in four places that disagreed:
 *   1. the PracticeArea table (13 rows) — drives /practice and the sitemap
 *   2. a `dedicatedSlugs` array in src/app/practice/[slug]/page.tsx (10)
 *   3. ten page directories under src/app/practice/
 *   4. a separate hardcoded list in src/components/MobileNav.tsx (12)
 *
 * The damage: four database slugs had no page and returned HTTP 200 with an
 * empty shell — soft 404s, and they were in the submitted sitemap.
 * `defective-products` had real copy but was absent from the database and the
 * sitemap, so nothing linked to it. And the mobile menu linked
 * `products-liability`, which existed nowhere at all.
 */

/**
 * Slugs that have a hand-written page directory under src/app/practice/.
 * MUST match those directory names exactly — the catch-all route calls
 * notFound() for these so the static route wins.
 */
export const DEDICATED_SLUGS = [
  'auto-accidents',
  'criminal-defense',
  'defective-products',
  'family-law',
  'medical-malpractice',
  'motorcycle-accidents',
  'personal-injury',
  'premises-liability',
  'truck-accidents',
  'workers-compensation',
] as const;

/**
 * Legacy or mistaken slugs that should permanently redirect somewhere real.
 *
 * `product-liability` is the PracticeArea row; `defective-products` is the page
 * that actually exists. Rather than rename the directory and break any existing
 * inbound links, the row's slug redirects to the page. `products-liability` was
 * a typo in the mobile navigation and never resolved to anything.
 */
export const SLUG_ALIASES: Record<string, string> = {
  'product-liability': 'defective-products',
  'products-liability': 'defective-products',
};

/**
 * The practice areas shown in navigation, in the order they should appear.
 * Shared by the desktop dropdown and the mobile menu so the two cannot drift —
 * they previously held separate hardcoded lists, and the mobile one contained a
 * slug that existed nowhere. Route every href through practiceAreaPath().
 */
export const PRACTICE_LINKS = [
  { name: 'Personal Injury', slug: 'personal-injury' },
  { name: 'Auto Accidents', slug: 'auto-accidents' },
  { name: 'Truck Accidents', slug: 'truck-accidents' },
  { name: 'Motorcycle Accidents', slug: 'motorcycle-accidents' },
  { name: 'Medical Malpractice', slug: 'medical-malpractice' },
  { name: 'Premises Liability', slug: 'premises-liability' },
  { name: "Workers' Compensation", slug: 'workers-compensation' },
  { name: 'Product Liability', slug: 'product-liability' },
  { name: 'Limited Tort', slug: 'limited-tort-lawyer' },
  { name: 'Social Security Disability', slug: 'social-security-disability' },
  { name: 'Criminal Defense', slug: 'criminal-defense' },
  { name: 'Family Law', slug: 'family-law' },
  { name: 'General Legal Matters', slug: 'general-legal-matters' },
] as const;

export function isDedicatedSlug(slug: string): boolean {
  return (DEDICATED_SLUGS as readonly string[]).includes(slug);
}

/** Resolves a requested slug to the URL it should live at, or null if it already is. */
export function resolveAlias(slug: string): string | null {
  return SLUG_ALIASES[slug] ?? null;
}

/**
 * The canonical public path for a practice area, following aliases. Use this
 * anywhere a link or sitemap entry is generated from a database row, so a row
 * whose slug is an alias never emits a URL that only redirects.
 */
export function practiceAreaPath(slug: string): string {
  return `/practice/${SLUG_ALIASES[slug] ?? slug}`;
}
