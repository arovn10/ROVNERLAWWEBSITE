import { prisma } from '@/lib/prisma';
import InTheNewsClient from './InTheNewsClient';

/**
 * Press listing. Was a client component fetching /api/news in a useEffect, so
 * the server prerendered only its loading state — none of the article titles or
 * links reached the HTML.
 */
export const revalidate = 3600;

export default async function InTheNewsPage() {
  let rows: Awaited<ReturnType<typeof prisma.news.findMany>> = [];

  try {
    rows = await prisma.news.findMany({ orderBy: { date: 'desc' } });
  } catch (error) {
    console.error('In the news: failed to load', error);
  }

  // Serialised to match the JSON the client component previously received from
  // /api/news, so its own types and date formatting are unchanged.
  const news = rows.map((n) => ({
    id: n.id,
    title: n.title,
    content: n.content,
    date: n.date.toISOString(),
    source: n.source,
    url: n.url ?? undefined,
  }));

  return <InTheNewsClient news={news} />;
}
