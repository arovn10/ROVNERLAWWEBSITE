"use client";

import { FirmNameProvider } from "@/lib/FirmNameContext";

/**
 * Client providers for the PUBLIC site.
 *
 * Deliberately does NOT include next-auth's SessionProvider. It used to, loaded
 * via `dynamic(..., { ssr: false })` — and because this component wraps
 * {children} in the root layout, that one flag opted the ENTIRE site out of
 * server rendering. Every page shipped an empty shell with a
 * BAILOUT_TO_CLIENT_SIDE_RENDERING marker and no crawlable content.
 *
 * Only the admin area consumes useSession, so SessionProvider now lives in
 * src/app/admin/AdminSessionProvider.tsx. Do not reintroduce it here.
 *
 * `initialFirmName` is read from the database by the root layout so the firm
 * name is present in the server-rendered HTML. Without it, SSR would emit the
 * provider's placeholder ("Law Firm") as the site-wide brand and heading.
 */
export function Providers({
  children,
  initialFirmName,
}: {
  children: React.ReactNode;
  initialFirmName: string;
}) {
  return <FirmNameProvider initialFirmName={initialFirmName}>{children}</FirmNameProvider>;
}
