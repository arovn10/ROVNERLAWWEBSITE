import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { SITE_URL } from '@/lib/site';
import { FIRM_NAME_PUBLIC, publicFirmName } from '@/lib/firm';
import { OFFICE_ADDRESS, OFFICE_EMAIL, PHONE_DISPLAY, PHONE_TOLLFREE_DISPLAY, PHONE_TOLLFREE_TEL } from '@/lib/contact-details';
import { PRACTICE_LINKS, practiceAreaPath } from '@/lib/practice-areas';
import { SERVICE_AREAS } from '@/lib/service-areas';
import { attorneyPath } from '@/lib/attorneys';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * A short map for answer engines. Not a ranking file. It repeats the same
 * name, address and phone as the pages and the JSON-LD, and it points at the
 * URLs worth reading. Crawlers that ignore it still get those facts in HTML.
 */
export async function GET() {
  let firmName = FIRM_NAME_PUBLIC;
  let attorneys: { name: string; title: string | null }[] = [];
  try {
    const [settings, lawyers] = await Promise.all([
      prisma.settings.findFirst({ select: { firmName: true } }),
      prisma.lawyer.findMany({
        where: { active: true },
        orderBy: { order: 'asc' },
        select: { name: true, title: true },
      }),
    ]);
    firmName = publicFirmName(settings?.firmName);
    attorneys = lawyers;
  } catch (error) {
    console.error('llms.txt: falling back to static firm facts', error);
  }

  const practiceLines = PRACTICE_LINKS.map(
    (link) => `- [${link.name}](${SITE_URL}${practiceAreaPath(link.slug)})`,
  ).join('\n');

  const areaLines = SERVICE_AREAS.map(
    (area) => `- [${area.name}](${SITE_URL}/locations/${area.slug}): ${area.answer}`,
  ).join('\n');

  const attorneyLines = (attorneys.length
    ? attorneys
    : [{ name: 'Steven L. Rovner', title: 'Principal and Managing Attorney' }]
  )
    .map((attorney) => {
      const role = attorney.title ? ` — ${attorney.title}` : '';
      return `- [${attorney.name}](${SITE_URL}${attorneyPath(attorney.name)})${role}`;
    })
    .join('\n');

  const body = `# ${firmName}

> Personal injury and civil litigation law firm established in 1980. One office, at ${OFFICE_ADDRESS.street}, ${OFFICE_ADDRESS.locality}, ${OFFICE_ADDRESS.region} ${OFFICE_ADDRESS.postalCode}, in Bucks County, Pennsylvania. There is no Philadelphia office and no New Jersey office. Phone ${PHONE_DISPLAY}. Toll-free ${PHONE_TOLLFREE_DISPLAY} (${PHONE_TOLLFREE_TEL}). Email ${OFFICE_EMAIL}. Hours Monday–Friday 9:00 a.m.–5:00 p.m.; Saturday by appointment. Consultations are free. On injury matters, no fee unless the firm recovers. This file is general information, not legal advice, and it does not create an attorney-client relationship.

## Office and service area

- [Office, hours and directions](${SITE_URL}/locations)
${areaLines}

The locations page also names Delaware County and Chester County in Pennsylvania. Those counties do not have their own URL.

## Practice areas

${practiceLines}

## Attorneys

${attorneyLines}

## Also published

- [Home](${SITE_URL}/)
- [About](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
- [In the news](${SITE_URL}/in-the-news)
- [Disclaimer](${SITE_URL}/disclaimer)
`;

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
