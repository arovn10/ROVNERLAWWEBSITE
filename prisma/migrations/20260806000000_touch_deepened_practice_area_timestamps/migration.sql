-- The 20260802000000_deepen_thin_practice_area_content migration replaced the
-- placeholder copy on these 3 rows with a raw SQL UPDATE. Prisma's @updatedAt
-- is enforced client-side (by prisma.model.update()), not by a database
-- trigger, so that migration silently left "updatedAt" at its original
-- mid-2025 seed value even though the content changed on 2026-08-02. The
-- sitemap now reports each practice page's real "lastmod" from this column
-- (see src/app/sitemap.xml/route.ts), so a stale timestamp here would
-- misreport a page that was, in fact, just rewritten.
UPDATE "PracticeArea"
SET "updatedAt" = '2026-08-02T00:00:00Z'
WHERE slug IN ('limited-tort-lawyer', 'social-security-disability', 'general-legal-matters');
