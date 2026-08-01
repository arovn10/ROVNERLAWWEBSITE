"use client";

import { useState } from "react";
import MobileHeader from "@/components/MobileHeader";
import MobileNav from "@/components/MobileNav";

/**
 * Mobile header + slide-out nav with its own open/closed state.
 *
 * Server components cannot pass function props across the client boundary —
 * Next 15 throws at render time, which is how /in-the-news/[id] once shipped a
 * production 500. Any server page needing mobile nav renders this instead, since
 * a component reference is serializable where a callback is not.
 */
export default function MobileNavShell() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MobileHeader isMenuOpen={open} onMenuClick={() => setOpen((v) => !v)} />
      <MobileNav isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
