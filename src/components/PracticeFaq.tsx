import Link from 'next/link';
import { PRACTICE_AREA_FAQS } from '@/lib/practice-area-faqs';

/** Visible FAQ. The matching FAQPage JSON-LD lives in the route layout. */
export default function PracticeFaq({ slug }: { slug: string }) {
  const faqs = PRACTICE_AREA_FAQS[slug] ?? [];
  if (faqs.length === 0) return null;

  return (
    <section className="bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Common questions</h2>
        <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg">
          {faqs.map((faq) => (
            <div key={faq.question} className="p-5">
              <h3 className="font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-400 leading-relaxed">
          General information, not legal advice, and not a promise about the outcome of any case.
          See the <Link href="/disclaimer" className="underline hover:text-slate-600">disclaimer</Link>.
        </p>
      </div>
    </section>
  );
}
