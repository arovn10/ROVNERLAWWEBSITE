import type { Metadata } from "next";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "The Bob Rovner Archives | Photo Gallery",
  description: "Photographs from more than four decades of the firm's history and Bob Rovner's public life in Pennsylvania.",
  alternates: { canonical: "/photo-gallery" },
  openGraph: {
    title: "The Bob Rovner Archives | Photo Gallery",
    description: "Photographs from more than four decades of the firm's history and Bob Rovner's public life in Pennsylvania.",
    url: "/photo-gallery",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
