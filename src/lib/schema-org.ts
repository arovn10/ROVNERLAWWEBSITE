import { SITE_URL } from './site';

/**
 * schema.org JSON-LD builders.
 *
 * The site-wide LegalService block lives inline in src/app/layout.tsx (it
 * predates this file). Everything added since — BreadcrumbList on every
 * practice/attorney/news page, Person markup for attorneys, FAQPage on the
 * three database-only practice areas — goes through here so the shape stays
 * consistent and every emitted block matches something actually visible on
 * the page. Google's structured-data guidelines treat markup that doesn't
 * match rendered content as spam, which is also why this file does NOT
 * attempt to turn the freeform Lawyer.education/experience text into
 * alumniOf/hasCredential: that text is inconsistent in format (some rows are
 * real "University, JD (Year)" strings, one is a bio fact-not-a-degree) and
 * mis-structuring it risks a manual action for no real benefit.
 */

export interface BreadcrumbItem {
  name: string;
  path: string; // site-relative, e.g. "/practice" or "" for the homepage
}

export function breadcrumbListJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export function faqPageJsonLd(entries: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer,
      },
    })),
  };
}

export interface AttorneyForSchema {
  name: string;
  title: string | null;
  bio: string | null;
  image: string | null;
}

/**
 * Person markup for an attorney bio. Deliberately omits education/experience
 * (see file header) and any field a given attorney's card doesn't render —
 * jobTitle and bio only appear here when the page shows them too.
 */
export function attorneyPersonJsonLd(attorney: AttorneyForSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: attorney.name,
    ...(attorney.title ? { jobTitle: attorney.title } : {}),
    ...(attorney.bio ? { description: attorney.bio } : {}),
    ...(attorney.image ? { image: absoluteUrl(attorney.image) } : {}),
    worksFor: {
      '@type': 'LegalService',
      name: 'Rovner Law',
      url: SITE_URL,
    },
    url: `${SITE_URL}/attorneys`,
  };
}

function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}
