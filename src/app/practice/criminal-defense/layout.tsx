import type { Metadata } from "next";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Philadelphia Criminal Defense Attorney | DUI & Felony Defense",
  description: "Charged with a crime in Pennsylvania or New Jersey? Our criminal defense attorneys handle DUI, drug, assault and felony matters. Confidential consultation.",
  alternates: { canonical: "/practice/criminal-defense" },
  openGraph: {
    title: "Philadelphia Criminal Defense Attorney | DUI & Felony Defense",
    description: "Charged with a crime in Pennsylvania or New Jersey? Our criminal defense attorneys handle DUI, drug, assault and felony matters. Confidential consultation.",
    url: "/practice/criminal-defense",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
