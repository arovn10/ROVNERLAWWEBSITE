import type { Metadata } from "next";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Practice Areas | Personal Injury, Malpractice & Criminal Defense",
  description: "Personal injury, auto and truck accidents, medical malpractice, workers' compensation, criminal defense and more across Pennsylvania and New Jersey.",
  alternates: { canonical: "/practice" },
  openGraph: {
    title: "Practice Areas | Personal Injury, Malpractice & Criminal Defense",
    description: "Personal injury, auto and truck accidents, medical malpractice, workers' compensation, criminal defense and more across Pennsylvania and New Jersey.",
    url: "/practice",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
