import type { Metadata } from "next";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Our Locations | Serving Pennsylvania & New Jersey",
  description: "Our office is in Feasterville-Trevose, PA, serving Philadelphia, Bucks, Montgomery and Delaware counties plus southern and central New Jersey.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Our Locations | Serving Pennsylvania & New Jersey",
    description: "Our office is in Feasterville-Trevose, PA, serving Philadelphia, Bucks, Montgomery and Delaware counties plus southern and central New Jersey.",
    url: "/locations",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
