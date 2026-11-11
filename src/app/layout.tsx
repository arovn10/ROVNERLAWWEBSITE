import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { HideDevPortal } from "@/components/HideDevPortal";
import MobileCallBar from "@/components/MobileCallBar";
import { SITE_URL } from "@/lib/site";
import { getFirmName } from "@/lib/settings";
import { publicFirmName } from "@/lib/firm";
import { firmGraphJsonLd } from "@/lib/schema-org";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const libreBaskerville = Libre_Baskerville({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-serif" });

const DEFAULT_TITLE =
  "Personal Injury Lawyers in Feasterville-Trevose & Philadelphia | Rovner Law";
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
    // 1200x630 (the standard social-preview ratio) — the old banner-social
    // asset was 1024x128 (8:1), which Facebook/LinkedIn/Slack render as a
    // thin, badly-cropped sliver rather than a real preview image.
    images: [{ url: "/photos/og-social-1200x630.jpg", width: 1200, height: 630, alt: "Rovner Law Offices" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/photos/og-social-1200x630.jpg"],
  },
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
    firmName = publicFirmName(await getFirmName());
  } catch (error) {
    console.error("Root layout: could not load firm name", error);
    firmName = publicFirmName(null);
  }
  const firmGraph = firmGraphJsonLd(firmName, DEFAULT_DESCRIPTION);

  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(firmGraph) }}
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
