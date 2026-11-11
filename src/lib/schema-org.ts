import { SITE_URL } from './site';
import { attorneyPath } from './attorneys';
import {
  OFFICE_ADDRESS,
  OFFICE_EMAIL,
  OFFICE_GEO,
  PHONE_TEL,
  PHONE_TOLLFREE_TEL,
} from './contact-details';
import { OFFICE_MAP_URL, ORGANIZATION_ID, SERVICE_AREA_PLACES, WEBSITE_ID } from './firm';
import { PRACTICE_LINKS, practiceAreaPath } from './practice-areas';

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
  const path = attorneyPath(attorney.name);
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}${path}#person`,
    name: attorney.name,
    ...(attorney.title ? { jobTitle: attorney.title } : {}),
    ...(attorney.bio ? { description: attorney.bio } : {}),
    ...(attorney.image ? { image: absoluteUrl(attorney.image) } : {}),
    worksFor: { '@id': ORGANIZATION_ID },
    url: `${SITE_URL}${path}`,
  };
}

function e164(display: string): string {
  const digits = display.replace(/\D/g, '');
  return digits.length === 10 ? `+1-${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}` : display;
}

/**
 * The one firm node. Pass the name rendered in the header so the graph and
 * the page say the same thing. `areaServed` is the locations-page list, not
 * a second office.
 */
export function organizationJsonLd(firmName: string, description?: string) {
  return {
    '@type': 'LegalService',
    '@id': ORGANIZATION_ID,
    name: firmName,
    legalName: firmName,
    alternateName: ['Rovner Law', `Law Offices of ${firmName}`],
    ...(description ? { description } : {}),
    url: SITE_URL,
    logo: `${SITE_URL}/photos/rovner-logo-5.png`,
    image: `${SITE_URL}/photos/og-social-1200x630.jpg`,
    telephone: e164(PHONE_TEL),
    email: OFFICE_EMAIL,
    foundingDate: '1980',
    address: {
      '@type': 'PostalAddress',
      streetAddress: OFFICE_ADDRESS.street,
      addressLocality: OFFICE_ADDRESS.locality,
      addressRegion: OFFICE_ADDRESS.region,
      postalCode: OFFICE_ADDRESS.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: OFFICE_GEO.latitude,
      longitude: OFFICE_GEO.longitude,
    },
    hasMap: OFFICE_MAP_URL,
    areaServed: SERVICE_AREA_PLACES.map((place) => ({
      '@type': place.type,
      name: place.name,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: e164(PHONE_TEL),
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        telephone: e164(PHONE_TOLLFREE_TEL),
        contactType: 'customer service',
        contactOption: 'TollFree',
        availableLanguage: 'English',
      },
    ],
    knowsAbout: PRACTICE_LINKS.map((link) => link.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Practice areas',
      itemListElement: PRACTICE_LINKS.map((link) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: link.name,
          url: `${SITE_URL}${practiceAreaPath(link.slug)}`,
        },
      })),
    },
  };
}

export function websiteJsonLd(firmName: string) {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: firmName,
    inLanguage: 'en-US',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function firmGraphJsonLd(firmName: string, description?: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationJsonLd(firmName, description), websiteJsonLd(firmName)],
  };
}

/** A practice page is a service the firm provides, not a second law firm. */
export function practiceServiceJsonLd(service: { name: string; path: string; description?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${service.path}#service`,
    name: service.name,
    url: `${SITE_URL}${service.path}`,
    ...(service.description ? { description: service.description } : {}),
    provider: { '@id': ORGANIZATION_ID },
    areaServed: SERVICE_AREA_PLACES.map((place) => ({
      '@type': place.type,
      name: place.name,
    })),
  };
}

export function newsArticleJsonLd(article: {
  title: string;
  description: string;
  path: string;
  datePublished: Date;
  dateModified?: Date;
  source?: string | null;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished.toISOString(),
    ...(article.dateModified ? { dateModified: article.dateModified.toISOString() } : {}),
    mainEntityOfPage: `${SITE_URL}${article.path}`,
    ...(article.source ? { citation: article.source } : {}),
    publisher: { '@id': ORGANIZATION_ID },
    author: { '@id': ORGANIZATION_ID },
  };
}

/**
 * Local landing page. The street address is always the Feasterville office.
 * `areaServed` is the place the page is about, which is often not the office.
 */
export function serviceAreaJsonLd(area: {
  name: string;
  path: string;
  description: string;
  areaServedName: string;
  areaServedType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${SITE_URL}${area.path}#service`,
    name: area.name,
    description: area.description,
    url: `${SITE_URL}${area.path}`,
    parentOrganization: { '@id': ORGANIZATION_ID },
    telephone: e164(PHONE_TEL),
    address: {
      '@type': 'PostalAddress',
      streetAddress: OFFICE_ADDRESS.street,
      addressLocality: OFFICE_ADDRESS.locality,
      addressRegion: OFFICE_ADDRESS.region,
      postalCode: OFFICE_ADDRESS.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: OFFICE_GEO.latitude,
      longitude: OFFICE_GEO.longitude,
    },
    areaServed: { '@type': area.areaServedType, name: area.areaServedName },
  };
}

function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}
