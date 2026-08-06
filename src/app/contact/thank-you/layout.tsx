import type { Metadata } from "next";

// Route-segment metadata, same pattern as every other client-component page.
// noindex: this page has no content of its own value to a search result —
// it's a post-submit confirmation, and indexing it risks it showing up for
// unrelated "thank you" queries or being landed on directly by someone who
// never actually submitted the form.
export const metadata: Metadata = {
  title: "Message Received",
  robots: { index: false, follow: true },
  alternates: { canonical: "/contact/thank-you" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
