import type { Metadata } from "next";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "In the News | Rovner Law in the Media",
  description: "Press coverage and news featuring the Law Offices of Rovner, Allen, Rovner & Sigman.",
  alternates: { canonical: "/in-the-news" },
  openGraph: {
    title: "In the News | Rovner Law in the Media",
    description: "Press coverage and news featuring the Law Offices of Rovner, Allen, Rovner & Sigman.",
    url: "/in-the-news",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
