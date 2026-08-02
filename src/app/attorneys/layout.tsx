import type { Metadata } from "next";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Our Attorneys | Philadelphia Personal Injury Lawyers",
  description: "Meet the attorneys of Rovner, Allen, Rovner & Sigman \u2014 trial lawyers handling personal injury, malpractice and criminal defense in PA and NJ.",
  alternates: { canonical: "/attorneys" },
  openGraph: {
    title: "Our Attorneys | Philadelphia Personal Injury Lawyers",
    description: "Meet the attorneys of Rovner, Allen, Rovner & Sigman \u2014 trial lawyers handling personal injury, malpractice and criminal defense in PA and NJ.",
    url: "/attorneys",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
