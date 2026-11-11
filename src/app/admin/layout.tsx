import type { Metadata } from "next";
import AdminSessionProvider from "./AdminSessionProvider";

export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

/** Login and authenticated pages share the session provider. Auth chrome lives in (secure)/layout. */
export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminSessionProvider>{children}</AdminSessionProvider>;
}
