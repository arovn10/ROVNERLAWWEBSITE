import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavShell from '@/components/MobileNavShell';
import JsonLd from '@/components/JsonLd';
import { prisma } from '@/lib/prisma';
import { getFirmName } from '@/lib/settings';
import { publicFirmName, OFFICE_MAP_URL } from '@/lib/firm';
import { OFFICE_EMAIL, PHONE_DISPLAY, PHONE_TOLLFREE_DISPLAY, TEL_HREF, TEL_HREF_TOLLFREE } from '@/lib/contact-details';
import { SERVICE_AREAS, serviceAreaBySlug, type ServiceArea } from '@/lib/service-areas';
import { breadcrumbListJsonLd, faqPageJsonLd, serviceAreaJsonLd } from '@/lib/schema-org';

export const revalidate = 3600;

const COMMUNITY_FALLBACK: Record<ServiceArea['communityFields'][number], string> = {
  bucksCounty: 'Doylestown, Newtown, Levittown, Langhorne, Yardley, Bristol, Warminster, Warrington, Chalfont',
  philadelphiaArea:
    'Center City, Northeast Philadelphia, South Philadelphia, West Philadelphia, North Philadelphia, Northwest Philadelphia',
  montgomeryCounty: 'Norristown, King of Prussia, Lansdale, Pottstown, Conshohocken, Ardmore, Abington, Horsham',
  southernNJ: 'Camden, Cherry Hill, Voorhees, Mount Laurel, Marlton, Pennsauken, Haddonfield, Collingswood',
  centralNJ: 'Trenton, Princeton, Hamilton, Lawrence, Ewing, Hopewell, Pennington, West Windsor',
};

export function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ slug: area.slug }));
}

function withFirm(text: string, firmName: string) {
  return text.replaceAll('Rovner, Allen, Rovner and Sigman', firmName);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreaBySlug(slug);
  if (!area) return { title: 'Location Not Found', robots: { index: false, follow: true } };
  return {
    title: area.h1,
    description: area.metaDescription,
    alternates: { canonical: `/locations/${area.slug}` },
    openGraph: {
      title: area.h1,
      description: area.metaDescription,
      url: `/locations/${area.slug}`,
    },
  };
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = serviceAreaBySlug(slug);
  if (!area) notFound();

  let firmName = publicFirmName(null);
  let communities = area.communityFields.map((field) => COMMUNITY_FALLBACK[field]);
  try {
    const [settings, locations] = await Promise.all([
      getFirmName(),
      prisma.locations.findFirst(),
    ]);
    firmName = publicFirmName(settings);
    if (locations) {
      communities = area.communityFields.map((field) => locations[field] || COMMUNITY_FALLBACK[field]);
    }
  } catch (error) {
    console.error('Service area page: using published defaults', error);
  }

  const answer = withFirm(area.answer, firmName);
  const path = `/locations/${area.slug}`;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: area.name, path },
        ])}
      />
      <JsonLd
        data={serviceAreaJsonLd({
          name: `${firmName} — ${area.name}`,
          path,
          description: answer,
          areaServedName: area.areaServedName,
          areaServedType: area.areaServedType,
        })}
      />
      <JsonLd data={faqPageJsonLd(area.faqs)} />

      <div className="hidden lg:block w-full">
        <Header currentPage="locations" />
      </div>
      <div className="block lg:hidden w-full">
        <MobileNavShell />
      </div>

      <main className="flex-1">
        <section className="bg-slate-900 py-14 lg:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-400">
              <Link href="/" className="hover:text-slate-200">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/locations" className="hover:text-slate-200">Locations</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-slate-200">{area.name}</span>
            </nav>
            <p className="text-amber-200/90 text-xs font-semibold uppercase tracking-[0.18em] mb-3">
              One office · Feasterville-Trevose, PA
            </p>
            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {area.h1}
            </h1>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 py-12 lg:py-16">
          <p className="text-lg text-slate-800 leading-relaxed">{answer}</p>
          {area.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-5 text-slate-700 leading-relaxed">
              {withFirm(paragraph, firmName)}
            </p>
          ))}

          <h2 className="font-serif text-2xl font-bold text-slate-900 mt-12 mb-3">{area.communityHeading}</h2>
          {communities.map((list) => (
            <p key={list.slice(0, 24)} className="text-slate-700 leading-relaxed mt-2">{list}</p>
          ))}

          <h2 className="font-serif text-2xl font-bold text-slate-900 mt-12 mb-3">{area.directionsHeading}</h2>
          <p className="text-slate-700 leading-relaxed">{area.directions}</p>
          <p className="mt-3">
            <a href={OFFICE_MAP_URL} className="font-semibold text-amber-800 hover:text-amber-900" rel="noopener noreferrer">
              Open the office in Google Maps
            </a>
          </p>

          <h2 className="font-serif text-2xl font-bold text-slate-900 mt-12 mb-4">Practice areas</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-slate-800">
            {[
              ['/practice/personal-injury', 'Personal injury'],
              ['/practice/auto-accidents', 'Car accidents'],
              ['/practice/truck-accidents', 'Truck accidents'],
              ['/practice/medical-malpractice', 'Medical malpractice'],
              ['/practice/premises-liability', 'Slip and fall'],
              ['/practice/workers-compensation', 'Workers’ compensation'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="underline underline-offset-2 hover:text-amber-800">{label}</Link>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-2xl font-bold text-slate-900 mt-12 mb-4">Other places we practice</h2>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {SERVICE_AREAS.filter((other) => other.slug !== area.slug).map((other) => (
              <li key={other.slug}>
                <Link href={`/locations/${other.slug}`} className="font-semibold text-slate-800 underline underline-offset-2 hover:text-amber-800">
                  {other.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/locations" className="font-semibold text-slate-800 underline underline-offset-2 hover:text-amber-800">
                All locations
              </Link>
            </li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-slate-900 mt-12 mb-4">Common questions</h2>
          <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg">
            {area.faqs.map((faq) => (
              <div key={faq.question} className="p-5">
                <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-slate-900 text-white p-7">
            <h2 className="font-serif text-2xl font-bold">Talk to the {area.name} team</h2>
            <p className="mt-2 text-slate-300">175 Bustleton Pike, Feasterville-Trevose, PA 19053</p>
            <p className="mt-1 text-slate-300">{OFFICE_EMAIL}</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-amber-600 px-6 py-3 font-semibold hover:bg-amber-500">
                Free case review
              </Link>
              <a href={TEL_HREF} className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 font-semibold">
                {PHONE_DISPLAY}
              </a>
              <a href={TEL_HREF_TOLLFREE} className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 font-semibold">
                {PHONE_TOLLFREE_DISPLAY}
              </a>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-400 leading-relaxed">
            General information, not legal advice. Contacting the firm does not create an attorney-client
            relationship. Past results do not guarantee a similar outcome. See the{' '}
            <Link href="/disclaimer" className="underline hover:text-slate-600">disclaimer</Link>.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
