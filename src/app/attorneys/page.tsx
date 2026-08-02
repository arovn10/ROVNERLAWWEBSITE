import { prisma } from '@/lib/prisma';
import AttorneysClient from './AttorneysClient';
import JsonLd from '@/components/JsonLd';
import { breadcrumbListJsonLd, attorneyPersonJsonLd } from '@/lib/schema-org';

// Attorneys change rarely — hourly ISR instead of a Postgres query on every
// view, with admin writes calling revalidatePath('/attorneys') for instant
// publication on edit.
export const revalidate = 3600;

export default async function AttorneysPage() {
  const attorneys = await prisma.lawyer.findMany({
    where: { active: true },
    orderBy: { order: 'asc' },
  });

  return (
    <>
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Attorneys', path: '/attorneys' },
        ])}
      />
      {attorneys.map((attorney) => (
        <JsonLd key={attorney.id} data={attorneyPersonJsonLd(attorney)} />
      ))}
      <AttorneysClient attorneys={attorneys} />
    </>
  );
}
