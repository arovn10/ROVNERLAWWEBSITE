import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { SITE_URL } from '@/lib/site';
import { DEDICATED_SLUGS, practiceAreaPath } from '@/lib/practice-areas';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type Entry = { loc: string; lastmod?: Date; changefreq?: string; priority?: number };

const STATIC_ENTRIES: Entry[] = [
  { loc: '', changefreq: 'weekly', priority: 1.0 },
  { loc: 'about', changefreq: 'monthly', priority: 0.8 },
  { loc: 'attorneys', changefreq: 'monthly', priority: 0.8 },
  { loc: 'contact', changefreq: 'monthly', priority: 0.7 },
  { loc: 'locations', changefreq: 'monthly', priority: 0.7 },
  { loc: 'practice', changefreq: 'monthly', priority: 0.9 },
  { loc: 'in-the-news', changefreq: 'weekly', priority: 0.6 },
  { loc: 'photo-gallery', changefreq: 'monthly', priority: 0.4 },
  // No backing content model — a static legal page with no real "last
  // updated" signal to report, so it deliberately gets no lastmod rather
  // than a fabricated one.
  { loc: 'disclaimer', changefreq: 'yearly', priority: 0.1 },
];

function maxDate(dates: Date[]): Date | undefined {
  return dates.length ? new Date(Math.max(...dates.map((d) => d.getTime()))) : undefined;
}

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlXml({ loc, lastmod, changefreq, priority }: Entry) {
  const fullLoc = loc ? `${SITE_URL}/${loc}` : SITE_URL;
  const parts = [`<loc>${escapeXml(fullLoc)}</loc>`];
  if (lastmod) parts.push(`<lastmod>${lastmod.toISOString()}</lastmod>`);
  if (changefreq) parts.push(`<changefreq>${changefreq}</changefreq>`);
  if (priority !== undefined) parts.push(`<priority>${priority.toFixed(1)}</priority>`);
  return `  <url>\n    ${parts.join('\n    ')}\n  </url>`;
}

export async function GET() {
  let dynamicEntries: Entry[] = [];
  const staticLastmods: Record<string, Date | undefined> = {};

  try {
    const [practiceAreas, news, aboutUs, locations, contactUs, lastLawyer, lastArchive, lastSettlement] =
      await Promise.all([
        prisma.practiceArea.findMany({
          where: { active: true },
          select: { slug: true, updatedAt: true },
        }),
        prisma.news.findMany({
          select: { id: true, updatedAt: true },
        }),
        prisma.aboutUs.findFirst({ select: { updatedAt: true } }),
        prisma.locations.findFirst({ select: { updatedAt: true } }),
        prisma.contactUs.findFirst({ select: { updatedAt: true } }),
        prisma.lawyer.findFirst({ where: { active: true }, orderBy: { updatedAt: 'desc' }, select: { updatedAt: true } }),
        prisma.archive.findFirst({ orderBy: { updatedAt: 'desc' }, select: { updatedAt: true } }),
        prisma.settlement.findFirst({ orderBy: { updatedAt: 'desc' }, select: { updatedAt: true } }),
      ]);

    const practiceAreaDates = practiceAreas.map((a) => a.updatedAt);
    const newsDates = news.map((n) => n.updatedAt);

    // Each static page's real "last changed" signal, sourced from whatever
    // model actually backs its content — not a per-request timestamp, which
    // would misrepresent an unchanged page as freshly edited on every crawl.
    staticLastmods[''] = maxDate([...practiceAreaDates, ...(lastSettlement ? [lastSettlement.updatedAt] : [])]);
    staticLastmods['about'] = aboutUs?.updatedAt;
    staticLastmods['attorneys'] = lastLawyer?.updatedAt;
    staticLastmods['contact'] = contactUs?.updatedAt;
    staticLastmods['locations'] = locations?.updatedAt;
    staticLastmods['practice'] = maxDate(practiceAreaDates);
    staticLastmods['in-the-news'] = maxDate(newsDates);
    staticLastmods['photo-gallery'] = lastArchive?.updatedAt;

    // Resolve aliases, then de-duplicate: the `product-liability` row and the
    // `defective-products` page are the same practice area, and a sitemap should
    // list the destination URL rather than one that 301s. Deduping also keeps the
    // hand-written page — previously absent from the sitemap entirely because it
    // has no database row — from being listed twice.
    const practiceLocs = new Map<string, Date>();
    for (const a of practiceAreas) {
      const loc = practiceAreaPath(a.slug).replace(/^\//, '');
      const existing = practiceLocs.get(loc);
      if (!existing || a.updatedAt > existing) practiceLocs.set(loc, a.updatedAt);
    }
    for (const slug of DEDICATED_SLUGS) {
      const loc = `practice/${slug}`;
      if (!practiceLocs.has(loc)) practiceLocs.set(loc, new Date(0));
    }

    dynamicEntries = [
      ...[...practiceLocs.entries()].map(([loc, lastmod]) => ({
        loc,
        ...(lastmod.getTime() > 0 ? { lastmod } : {}),
        changefreq: 'monthly',
        priority: 0.8,
      })),
      ...news.map((n) => ({
        loc: `in-the-news/${n.id}`,
        lastmod: n.updatedAt,
        changefreq: 'monthly',
        priority: 0.5,
      })),
    ];
  } catch (error) {
    console.error('Sitemap: failed to load dynamic entries', error);
  }

  const staticEntries = STATIC_ENTRIES.map((entry) => {
    const lastmod = staticLastmods[entry.loc];
    return lastmod ? { ...entry, lastmod } : entry;
  });

  const entries = [...staticEntries, ...dynamicEntries];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(urlXml)
    .join('\n')}\n</urlset>\n`;

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
