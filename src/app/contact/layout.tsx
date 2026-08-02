import type { Metadata } from "next";

// Route-segment metadata. The page itself is a client component and so cannot
// export metadata; a layout in the same segment can, which avoids restructuring
// the page. Without this, every route inherited the root layout's single title,
// description and canonical.
export const metadata: Metadata = {
  title: "Contact Us | Free Case Review",
  description: "Tell us what happened and we will review your case at no cost. Call 888-DIAL-LAW or send a message. No recovery, no fee.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Free Case Review",
    description: "Tell us what happened and we will review your case at no cost. Call 888-DIAL-LAW or send a message. No recovery, no fee.",
    url: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
