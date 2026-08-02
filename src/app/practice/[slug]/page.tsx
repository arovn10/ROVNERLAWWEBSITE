import { notFound, permanentRedirect } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavShell from '@/components/MobileNavShell';
import { prisma } from '@/lib/prisma';
import { isDedicatedSlug, resolveAlias } from '@/lib/practice-areas';
import { PHONE_TOLLFREE_DISPLAY, TEL_HREF_TOLLFREE } from '@/lib/contact-details';

/**
 * Catch-all for practice areas that live only in the database.
 *
 * This route used to `redirect('/practice')` for anything without a hand-written
 * page, which meant four real practice areas — general legal matters, limited
 * tort, social security disability and product liability — answered HTTP 200
 * with an empty shell and bounced the visitor. They were also in the sitemap, so
 * the firm was submitting four content-free URLs to Google as soft 404s.
 *
 * Now it renders the database record. The copy is thinner than the ten
 * hand-written pages (~90 words) so these are a floor, not a finish line — but a
 * thin real page is indexable and a soft 404 is not. "Limited tort lawyer" in
 * particular is a high-intent Pennsylvania search term that previously resolved
 * to nothing.
 */

// Hourly ISR instead of a Postgres query on every view — admin writes call
// revalidatePath(`/practice/${slug}`) for instant publication on edit.
export const revalidate = 3600;

async function getPracticeArea(slug: string) {
  try {
    return await prisma.practiceArea.findUnique({ where: { slug } });
  } catch (error) {
    console.error('Error fetching practice area:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = await getPracticeArea(slug);

  if (!area) {
    return { title: 'Practice Area Not Found', robots: { index: false, follow: true } };
  }

  const description = (area.description ?? '').replace(/\s+/g, ' ').trim().slice(0, 155);

  return {
    title: `${area.title} Lawyer | Pennsylvania & New Jersey`,
    description: description || `${area.title} representation across Pennsylvania and New Jersey. Free consultation with the Law Offices of Rovner, Allen, Rovner & Sigman.`,
    alternates: { canonical: `/practice/${slug}` },
    openGraph: {
      title: `${area.title} Lawyer | Pennsylvania & New Jersey`,
      description: description || undefined,
      url: `/practice/${slug}`,
    },
  };
}

export default async function PracticeAreaDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // A hand-written page exists for this slug — 404 here so the static route wins.
  if (isDedicatedSlug(slug)) {
    notFound();
  }

  // Legacy or mistyped slug: send its authority to the page that does exist.
  const alias = resolveAlias(slug);
  if (alias) {
    permanentRedirect(`/practice/${alias}`);
  }

  const area = await getPracticeArea(slug);

  // Genuinely unknown slug: a real 404 rather than a 200 that redirects, so
  // Google drops it instead of recording a thin duplicate of /practice.
  if (!area || !area.active) {
    notFound();
  }

  const features = (area.features ?? '')
    .split('\n')
    .map((f) => f.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="hidden lg:block w-full">
        <Header currentPage="practice" />
      </div>
      <div className="block lg:hidden w-full">
        <MobileNavShell />
      </div>

      <main className="flex-1">
        <section className="bg-slate-800 py-14 lg:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-400">
              <Link href="/practice" className="hover:text-slate-200 transition-colors">Practice Areas</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-slate-200">{area.title}</span>
            </nav>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              {area.title}
            </h1>
            {area.description && (
              <p className="mt-4 text-slate-300 text-lg leading-relaxed max-w-2xl">{area.description}</p>
            )}
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="max-w-4xl mx-auto px-6">
            {area.content && (
              <div className="prose-slate max-w-none">
                {area.content.split('\n').filter((p) => p.trim()).map((para, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed mb-5">{para.trim()}</p>
                ))}
              </div>
            )}

            {features.length > 0 && (
              <div className="mt-10">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">How we help</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-700" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-7">
              <h2 className="font-serif text-xl font-bold text-slate-900">
                Talk to a lawyer about your {area.title.toLowerCase()} case
              </h2>
              <p className="mt-2 text-slate-600">
                Consultations are free and confidential. No recovery, no fee.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-slate-800 px-7 py-3 font-semibold text-white transition-colors hover:bg-slate-700"
                >
                  Request a free case review
                </Link>
                <a
                  href={TEL_HREF_TOLLFREE}
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 px-7 py-3 font-semibold text-slate-800 transition-colors hover:bg-white"
                >
                  Call {PHONE_TOLLFREE_DISPLAY}
                </a>
              </div>
            </div>

            <p className="mt-8 text-xs text-slate-400 leading-relaxed">
              This page is general information, not legal advice, and does not create an
              attorney-client relationship. Prior results do not guarantee a similar outcome.
              See our <Link href="/disclaimer" className="underline hover:text-slate-600">full disclaimer</Link>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
