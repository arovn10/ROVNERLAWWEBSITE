import { prisma } from '@/lib/prisma';
import PhotoGalleryClient from './PhotoGalleryClient';

/**
 * The Bob Rovner Archives. Was a client component fetching /api/archives in a
 * useEffect, so the server prerendered only its loading state — 34 archive items
 * and the page's own heading were absent from the HTML.
 */
export const revalidate = 3600;

export default async function PhotoGalleryPage() {
  let rows: Awaited<ReturnType<typeof prisma.archive.findMany>> = [];

  try {
    rows = await prisma.archive.findMany({ orderBy: { date: 'desc' } });
  } catch (error) {
    console.error('Photo gallery: failed to load', error);
  }

  // Only items with an image are renderable in the gallery, and serialising here
  // matches the JSON shape the client previously got from /api/archives.
  const archives = rows
    .filter((a) => !!a.imageUrl)
    .map((a) => ({
      id: a.id,
      title: a.title,
      imageUrl: a.imageUrl as string,
      category: a.category,
      date: a.date.toISOString(),
    }));

  return <PhotoGalleryClient archives={archives} />;
}
