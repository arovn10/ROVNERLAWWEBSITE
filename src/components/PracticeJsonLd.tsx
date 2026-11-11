import JsonLd from '@/components/JsonLd';
import { PRACTICE_AREA_FAQS } from '@/lib/practice-area-faqs';
import { breadcrumbListJsonLd, faqPageJsonLd, practiceServiceJsonLd } from '@/lib/schema-org';

/**
 * Breadcrumb, Service and FAQ markup for a hand-written practice page.
 * FAQ markup is emitted only for questions the page also renders.
 */
export default function PracticeJsonLd({
  slug,
  name,
  path,
  serviceType,
}: {
  slug: string;
  name: string;
  path: string;
  serviceType: string;
}) {
  const faqs = PRACTICE_AREA_FAQS[slug] ?? [];
  return (
    <>
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Practice Areas', path: '/practice' },
          { name, path },
        ])}
      />
      <JsonLd data={practiceServiceJsonLd({ name: serviceType, path })} />
      {faqs.length > 0 && <JsonLd data={faqPageJsonLd(faqs)} />}
    </>
  );
}
