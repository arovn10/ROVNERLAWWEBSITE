"use client";

import { SessionProvider } from "next-auth/react";
import { FirmNameProvider } from "@/lib/FirmNameContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <FirmNameProvider>
        {children}
      </FirmNameProvider>
    </SessionProvider>
  );
} 