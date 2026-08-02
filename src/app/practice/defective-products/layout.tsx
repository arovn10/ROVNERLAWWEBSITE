import type { Metadata } from "next";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Philadelphia Product Liability Lawyer | Defective Product Injury",
  description: "Injured by a defective product, vehicle part or medical device? Our product liability attorneys pursue manufacturers in Pennsylvania and New Jersey.",
  alternates: { canonical: "/practice/defective-products" },
  openGraph: {
    title: "Philadelphia Product Liability Lawyer | Defective Product Injury",
    description: "Injured by a defective product, vehicle part or medical device? Our product liability attorneys pursue manufacturers in Pennsylvania and New Jersey.",
    url: "/practice/defective-products",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
