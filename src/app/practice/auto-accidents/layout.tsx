import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbListJsonLd } from "@/lib/schema-org";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Philadelphia Car Accident Lawyer | Auto Injury Attorney",
  description: "Hurt in a car crash in PA or NJ? We handle insurance, limited tort questions and injury claims. Free consultation with a Philadelphia auto accident lawyer.",
  alternates: { canonical: "/practice/auto-accidents" },
  openGraph: {
    title: "Philadelphia Car Accident Lawyer | Auto Injury Attorney",
    description: "Hurt in a car crash in PA or NJ? We handle insurance, limited tort questions and injury claims. Free consultation with a Philadelphia auto accident lawyer.",
    url: "/practice/auto-accidents",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: "/practice" },
          { name: "Auto Accidents", path: "/practice/auto-accidents" },
        ])}
      />
      {children}
    </>
  );
}
