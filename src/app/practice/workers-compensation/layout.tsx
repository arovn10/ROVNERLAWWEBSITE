import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbListJsonLd } from "@/lib/schema-org";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Philadelphia Workers' Compensation Lawyer | Work Injury Claims",
  description: "Hurt at work in Pennsylvania? We handle denied claims, wage loss and medical benefits. Talk to a Philadelphia workers' compensation attorney at no cost.",
  alternates: { canonical: "/practice/workers-compensation" },
  openGraph: {
    title: "Philadelphia Workers' Compensation Lawyer | Work Injury Claims",
    description: "Hurt at work in Pennsylvania? We handle denied claims, wage loss and medical benefits. Talk to a Philadelphia workers' compensation attorney at no cost.",
    url: "/practice/workers-compensation",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: "/practice" },
          { name: "Workers' Compensation", path: "/practice/workers-compensation" },
        ])}
      />
      {children}
    </>
  );
}
