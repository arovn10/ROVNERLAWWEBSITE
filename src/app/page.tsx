import { prisma } from '@/lib/prisma';
import HomeClient from './HomeClient';

/**
 * Homepage — the single most valuable page on the site, and until now the
 * worst offender of the client-fetch pattern: it fetched /api/settlements and
 * /api/practice-areas in a useEffect, so the server could prerender only the
 * static hero text and a loading skeleton. None of the 16 settlements or 13
 * practice areas reached the HTML search engines and AI crawlers actually see.
 */
export const revalidate = 3600;

export default async function HomePage() {
  let settlements: Awaited<ReturnType<typeof prisma.settlement.findMany>> = [];
  let practiceAreas: Awaited<ReturnType<typeof prisma.practiceArea.findMany>> = [];

  try {
    [settlements, practiceAreas] = await Promise.all([
      prisma.settlement.findMany({ orderBy: { date: 'desc' } }),
      prisma.practiceArea.findMany({
        where: { active: true },
        orderBy: [{ order: 'asc' }, { title: 'asc' }],
      }),
    ]);
  } catch (error) {
    console.error('Homepage: failed to load settlements/practice areas', error);
  }

  // Serialised to match the JSON shape the client previously received from the
  // API routes, so HomeClient's own types are unchanged.
  const serializedSettlements = settlements.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description ?? '',
    amount: s.amount,
    date: s.date.toISOString(),
    caseType: s.caseType,
  }));

  return <HomeClient settlements={serializedSettlements} practiceAreas={practiceAreas} />;
}
