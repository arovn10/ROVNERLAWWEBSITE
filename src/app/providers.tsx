"use client";

import dynamic from 'next/dynamic';
import { FirmNameProvider } from "@/lib/FirmNameContext";

// Dynamically import SessionProvider to avoid SSR issues
const SessionProvider = dynamic(
  () => import('next-auth/react').then(mod => ({ default: mod.SessionProvider })),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FirmNameProvider>
      <SessionProvider session={null}>
        {children}
      </SessionProvider>
    </FirmNameProvider>
  );
} 