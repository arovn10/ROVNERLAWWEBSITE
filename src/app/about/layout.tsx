import type { Metadata } from "next";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "About Our Firm | 45+ Years in Philadelphia",
  description: "Rovner, Allen, Rovner & Sigman has represented injured people across Pennsylvania and New Jersey since 1980. Meet the firm and how we work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Our Firm | 45+ Years in Philadelphia",
    description: "Rovner, Allen, Rovner & Sigman has represented injured people across Pennsylvania and New Jersey since 1980. Meet the firm and how we work.",
    url: "/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
