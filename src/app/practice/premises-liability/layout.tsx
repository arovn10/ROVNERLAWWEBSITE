import type { Metadata } from "next";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Philadelphia Slip and Fall Lawyer | Premises Liability",
  description: "Injured on someone else's property in PA or NJ? Our premises liability attorneys handle slip and fall, unsafe property and negligent security claims.",
  alternates: { canonical: "/practice/premises-liability" },
  openGraph: {
    title: "Philadelphia Slip and Fall Lawyer | Premises Liability",
    description: "Injured on someone else's property in PA or NJ? Our premises liability attorneys handle slip and fall, unsafe property and negligent security claims.",
    url: "/practice/premises-liability",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
