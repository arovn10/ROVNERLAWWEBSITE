import LocationsClient from './LocationsClient';
import JsonLd from '@/components/JsonLd';
import { prisma } from '@/lib/prisma';
import { breadcrumbListJsonLd } from '@/lib/schema-org';

export const revalidate = 3600;

/**
 * The locations copy used to load in the browser after first paint, so the
 * HTML crawlers saw was the hardcoded fallback. The database row is now in
 * the first response.
 */
export default async function LocationsPage() {
  let initialData = null;
  try {
    const row = await prisma.locations.findFirst();
    if (row) {
      const { createdAt, updatedAt, ...rest } = row;
      void createdAt;
      void updatedAt;
      initialData = rest;
    }
  } catch (error) {
    console.error('Locations page: rendering the published fallback', error);
  }

  return (
    <>
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
        ])}
      />
      <LocationsClient initialData={initialData} />
    </>
  );
}
