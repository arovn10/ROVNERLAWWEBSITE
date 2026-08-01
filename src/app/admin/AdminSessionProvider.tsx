"use client";

import { SessionProvider } from "next-auth/react";

/**
 * Scopes next-auth's SessionProvider to the admin area.
 *
 * This used to live in the root layout's Providers, loaded with
 * `dynamic(..., { ssr: false })`, which disabled server rendering for every
 * page on the site. Only admin pages call useSession, so the provider belongs
 * here where its cost is confined to routes that actually need it.
 *
 * next-auth v4's `next-auth/react` entry point is not marked "use client", so
 * it cannot be rendered directly from the server-side admin layout — this thin
 * wrapper supplies the client boundary.
 */
export default function AdminSessionProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
