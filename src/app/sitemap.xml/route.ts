import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function GET() {
  // Fetch dynamic slugs from the database
  const practiceAreas = await prisma.practiceArea.findMany();
  const news = await prisma.news.findMany();
  const archives = await prisma.archive.findMany?.() || [];
  const settlements = await prisma.settlement.findMany?.() || [];

  let urls = [
    '',
    'about',
    'attorneys',
    'contact',
    'locations',
    'photo-gallery',
    'practice',
    'in-the-news',
    'admin',
  ];

  // Add practice area slugs
  urls = urls.concat(practiceAreas.map(a => `practice/${a.slug}`));
  // Add news slugs
  urls = urls.concat(news.map(n => `in-the-news/${n.id}`));
  // Add archives slugs (if applicable)
  urls = urls.concat(archives.map(a => `archives/${a.id}`));
  // Add settlements slugs (if applicable)
  urls = urls.concat(settlements.map(s => `settlements/${s.id}`));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>${BASE_URL}/${url}</loc>
    </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 