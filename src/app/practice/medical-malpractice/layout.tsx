import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbListJsonLd } from "@/lib/schema-org";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Philadelphia Medical Malpractice Lawyer | Hospital Negligence",
  description: "Misdiagnosis, surgical error and birth injury claims in Pennsylvania and New Jersey. Our medical malpractice attorneys work with medical experts. Free review.",
  alternates: { canonical: "/practice/medical-malpractice" },
  openGraph: {
    title: "Philadelphia Medical Malpractice Lawyer | Hospital Negligence",
    description: "Misdiagnosis, surgical error and birth injury claims in Pennsylvania and New Jersey. Our medical malpractice attorneys work with medical experts. Free review.",
    url: "/practice/medical-malpractice",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: "/practice" },
          { name: "Medical Malpractice", path: "/practice/medical-malpractice" },
        ])}
      />
      {children}
    </>
  );
}
