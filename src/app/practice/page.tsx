import { prisma } from '@/lib/prisma';
import PracticeAreasClient from './PracticeAreasClient';

/**
 * Practice-area listing — the most commercially important page on the site.
 *
 * This was a client component that fetched /api/practice-areas in a useEffect,
 * so the server could only prerender its empty skeleton: no headings, no copy,
 * and none of the 13 links to the practice pages. Those links are the main way
 * internal authority reaches them, and they were invisible in the HTML.
 *
 * Now the data is read on the server and handed to the client component as a
 * prop — the same shape /attorneys already uses.
 */

// Revalidate hourly rather than per-request: practice areas change a few times a
// year, and this replaces a database query on every page view.
export const revalidate = 3600;

export default async function PracticeAreasPage() {
  let practiceAreas: Awaited<ReturnType<typeof prisma.practiceArea.findMany>> = [];

  try {
    practiceAreas = await prisma.practiceArea.findMany({
      where: { active: true },
      orderBy: [{ order: 'asc' }, { title: 'asc' }],
    });
  } catch (error) {
    // Render the page shell rather than a 500 if the database is unreachable.
    console.error('Practice areas: failed to load', error);
  }

  return <PracticeAreasClient practiceAreas={practiceAreas} />;
}
