import type { Metadata } from "next";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Philadelphia Motorcycle Accident Lawyer | Rider Injury Claims",
  description: "Motorcycle injuries are severe and riders are too often blamed. Our Philadelphia motorcycle accident attorneys push back. Free consultation.",
  alternates: { canonical: "/practice/motorcycle-accidents" },
  openGraph: {
    title: "Philadelphia Motorcycle Accident Lawyer | Rider Injury Claims",
    description: "Motorcycle injuries are severe and riders are too often blamed. Our Philadelphia motorcycle accident attorneys push back. Free consultation.",
    url: "/practice/motorcycle-accidents",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
