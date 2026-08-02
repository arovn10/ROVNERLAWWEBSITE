import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbListJsonLd } from "@/lib/schema-org";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Philadelphia Truck Accident Lawyer | 18-Wheeler Injury Claims",
  description: "Truck and tractor-trailer collisions involve commercial insurers and federal rules. Our Philadelphia truck accident attorneys handle both. Free case review.",
  alternates: { canonical: "/practice/truck-accidents" },
  openGraph: {
    title: "Philadelphia Truck Accident Lawyer | 18-Wheeler Injury Claims",
    description: "Truck and tractor-trailer collisions involve commercial insurers and federal rules. Our Philadelphia truck accident attorneys handle both. Free case review.",
    url: "/practice/truck-accidents",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: "/practice" },
          { name: "Truck Accidents", path: "/practice/truck-accidents" },
        ])}
      />
      {children}
    </>
  );
}
