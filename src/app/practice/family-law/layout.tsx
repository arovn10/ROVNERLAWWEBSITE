import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbListJsonLd } from "@/lib/schema-org";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Philadelphia Family Law Attorney | Divorce & Custody",
  description: "Divorce, custody and support matters in Pennsylvania and New Jersey, handled with discretion by attorneys who have practised here for decades.",
  alternates: { canonical: "/practice/family-law" },
  openGraph: {
    title: "Philadelphia Family Law Attorney | Divorce & Custody",
    description: "Divorce, custody and support matters in Pennsylvania and New Jersey, handled with discretion by attorneys who have practised here for decades.",
    url: "/practice/family-law",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: "/practice" },
          { name: "Family Law", path: "/practice/family-law" },
        ])}
      />
      {children}
    </>
  );
}
