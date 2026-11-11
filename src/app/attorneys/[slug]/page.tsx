import type { Metadata } from 'next';
import Link from 'next/link';
import { SmoothImage } from '@/components/SmoothImage';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavShell from '@/components/MobileNavShell';
import JsonLd from '@/components/JsonLd';
import { prisma } from '@/lib/prisma';
import { attorneyPath, attorneySlug, HIDE_EDUCATION_EXPERIENCE_FOR, NO_CONTACT_BUTTON_FOR } from '@/lib/attorneys';
import { PHONE_DISPLAY, TEL_HREF } from '@/lib/contact-details';
import { attorneyPersonJsonLd, breadcrumbListJsonLd } from '@/lib/schema-org';

export const revalidate = 3600;

async function loadAttorneys() {
  try {
    return await prisma.lawyer.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    });
  } catch (error) {
    console.error('Attorney profile: could not load lawyers', error);
    return [];
  }
}

export async function generateStaticParams() {
  const attorneys = await loadAttorneys();
  return attorneys.map((attorney) => ({ slug: attorneySlug(attorney.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const attorney = (await loadAttorneys()).find((item) => attorneySlug(item.name) === slug);
  if (!attorney) return { title: 'Attorney Not Found', robots: { index: false, follow: true } };
  const description = (attorney.bio ?? `${attorney.name}, attorney at the firm’s Feasterville-Trevose office.`)
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 155);
  const path = attorneyPath(attorney.name);
  return {
    title: attorney.title ? `${attorney.name}, ${attorney.title}` : attorney.name,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: attorney.name,
      description,
      url: path,
      images: attorney.image ? [{ url: attorney.image }] : undefined,
    },
  };
}

export default async function AttorneyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const attorneys = await loadAttorneys();
  const attorney = attorneys.find((item) => attorneySlug(item.name) === slug);
  if (!attorney) notFound();

  const showCredentials = !HIDE_EDUCATION_EXPERIENCE_FOR.has(attorney.name);
  const path = attorneyPath(attorney.name);
  const others = attorneys.filter((item) => item.id !== attorney.id);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Attorneys', path: '/attorneys' },
          { name: attorney.name, path },
        ])}
      />
      <JsonLd data={attorneyPersonJsonLd(attorney)} />

      <div className="hidden lg:block w-full">
        <Header currentPage="attorneys" />
      </div>
      <div className="block lg:hidden w-full">
        <MobileNavShell />
      </div>

      <main className="flex-1">
        <article className="max-w-5xl mx-auto px-6 py-12 lg:py-16 grid lg:grid-cols-[280px_1fr] gap-10">
          <div>
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-500">
              <Link href="/attorneys" className="hover:text-slate-800">Attorneys</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span>{attorney.name}</span>
            </nav>
            <div className="relative aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden">
              <SmoothImage
                src={attorney.image || '/photos/default-headshot.svg'}
                alt={attorney.name}
                fill
                sizes="280px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          <div>
            <h1 className="font-serif text-4xl font-bold text-slate-900 tracking-tight">{attorney.name}</h1>
            {attorney.title && <p className="mt-2 text-slate-500">{attorney.title}</p>}
            <p className="mt-3 text-sm text-slate-500">
              {attorney.name} practices at 175 Bustleton Pike, Feasterville-Trevose, PA 19053.
            </p>
            {attorney.bio && (
              <div className="mt-6 text-slate-700 leading-relaxed whitespace-pre-line">{attorney.bio}</div>
            )}
            <dl className="mt-8 grid gap-3 text-slate-700">
              {attorney.specialties && (
                <div>
                  <dt className="font-semibold text-slate-900">Specialties</dt>
                  <dd>{attorney.specialties}</dd>
                </div>
              )}
              {showCredentials && attorney.education && (
                <div>
                  <dt className="font-semibold text-slate-900">Education</dt>
                  <dd>{attorney.education}</dd>
                </div>
              )}
              {showCredentials && attorney.experience && (
                <div>
                  <dt className="font-semibold text-slate-900">Experience</dt>
                  <dd>{attorney.experience}</dd>
                </div>
              )}
              {attorney.email && (
                <div>
                  <dt className="font-semibold text-slate-900">Email</dt>
                  <dd><a className="underline hover:text-amber-800" href={`mailto:${attorney.email}`}>{attorney.email}</a></dd>
                </div>
              )}
              {attorney.phone && (
                <div>
                  <dt className="font-semibold text-slate-900">Phone</dt>
                  <dd><a className="underline hover:text-amber-800" href={`tel:${attorney.phone}`}>{attorney.phone}</a></dd>
                </div>
              )}
            </dl>
            {!NO_CONTACT_BUTTON_FOR.has(attorney.name) && (
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-amber-700">
                  Contact {attorney.name.split(' ')[0]}
                </Link>
                <a href={TEL_HREF} className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900">
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            )}
          </div>
        </article>

        {others.length > 0 && (
          <section className="bg-slate-50 border-t border-slate-200">
            <div className="max-w-5xl mx-auto px-6 py-12">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Other attorneys</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {others.map((other) => (
                  <li key={other.id}>
                    <Link href={attorneyPath(other.name)} className="text-slate-800 underline underline-offset-2 hover:text-amber-800">
                      {other.name}
                    </Link>
                    {other.title && <span className="text-slate-500"> — {other.title}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
