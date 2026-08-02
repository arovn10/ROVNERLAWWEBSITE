import type { Metadata } from "next";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Philadelphia Personal Injury Lawyer | Free Consultation",
  description: "Injured in Pennsylvania or New Jersey? Our personal injury attorneys have recovered results for clients since 1980. Free consultation, no fee unless we win.",
  alternates: { canonical: "/practice/personal-injury" },
  openGraph: {
    title: "Philadelphia Personal Injury Lawyer | Free Consultation",
    description: "Injured in Pennsylvania or New Jersey? Our personal injury attorneys have recovered results for clients since 1980. Free consultation, no fee unless we win.",
    url: "/practice/personal-injury",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
