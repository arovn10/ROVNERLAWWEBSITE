import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { HideDevPortal } from "@/components/HideDevPortal";
import MobileCallBar from "@/components/MobileCallBar";
import { SITE_URL } from "@/lib/site";
import { getFirmName } from "@/lib/settings";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const libreBaskerville = Libre_Baskerville({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-serif" });

const DEFAULT_TITLE = "Rovner Law — Premier Personal Injury Lawyers in Philadelphia, PA";
const DEFAULT_DESCRIPTION =
  "Over 40 years fighting for clients across Pennsylvania and New Jersey. Personal injury, auto accidents, medical malpractice, workers' compensation. Free consultation — no fee unless we win.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Rovner Law",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Rovner Law",
  // This is the HOMEPAGE canonical, and it is only safe because every other
  // public route now sets its own — via a route-segment layout.tsx, or
  // generateMetadata on the dynamic routes. Previously nothing overrode it, so
  // all 21 pages declared themselves duplicates of "/", which is enough on its
  // own to keep them out of the index. If you add a public route, give it a
  // canonical or it will inherit this one and be de-indexed in favour of "/".
  //
  // Worth keeping rather than relying on self-canonicalisation: Google Ads
  // appends gclid/utm parameters, and without an explicit canonical
  // "/?gclid=..." can be indexed as a URL separate from "/".
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Rovner Law",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/photos/banner-social-1024x128.png", width: 1024, height: 128, alt: "Rovner Law" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/photos/banner-social-1024x128.png"],
  },
};

const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Rovner Law",
  alternateName: "Law Offices of Rovner Law",
  url: SITE_URL,
  logo: `${SITE_URL}/photos/rovner-logo-5.png`,
  image: `${SITE_URL}/photos/rovner-logo-5.png`,
  description: DEFAULT_DESCRIPTION,
  telephone: "+1-215-259-5958",
  priceRange: "Free consultation",
  address: {
    "@type": "PostalAddress",
    streetAddress: "175 Bustleton Pike",
    addressLocality: "Feasterville-Trevose",
    addressRegion: "PA",
    postalCode: "19053",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "Pennsylvania" },
    { "@type": "State", name: "New Jersey" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read the firm name on the server so it appears in the rendered HTML. The
  // client provider would otherwise render its "Law Firm" placeholder until
  // hydration, publishing that as the brand and site-wide heading. Degrades to
  // the default rather than 500-ing the whole site if the database is down.
  let firmName = "Rovner Law";
  try {
    firmName = await getFirmName();
  } catch (error) {
    console.error("Root layout: could not load firm name", error);
  }

  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <HideDevPortal />
        <Providers initialFirmName={firmName}>{children}</Providers>
        <MobileCallBar />
      </body>
    </html>
  );
}
