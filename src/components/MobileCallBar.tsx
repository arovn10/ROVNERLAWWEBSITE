"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare } from "lucide-react";
import { PHONE_TOLLFREE_DISPLAY, TEL_HREF_TOLLFREE } from "@/lib/contact-details";

/**
 * Fixed call/consult bar, mobile only.
 *
 * Someone searching for an injury lawyer is usually on a phone, often shortly
 * after the incident, and wants to talk to a person. Before this the only call
 * affordance on mobile was a small icon in the header, which scrolls away.
 *
 * Rendered once from the root layout. `lg:hidden` keeps it off desktop, where
 * the header already carries a persistent number. Suppressed on the admin area
 * and on /contact, where it would sit on top of the form's own submit button.
 */
const HIDDEN_ON = ["/admin", "/contact"];

export default function MobileCallBar() {
  const pathname = usePathname() ?? "";
  if (HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null;
  }

  return (
    <>
      {/* Spacer so the bar never covers the last of the page content. */}
      <div className="h-20 lg:hidden" aria-hidden="true" />

      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm shadow-[0_-2px_12px_rgba(15,23,42,0.08)] pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-stretch gap-2 px-3 py-2.5">
          <a
            href={TEL_HREF_TOLLFREE}
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-slate-800 px-4 py-3 font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call {PHONE_TOLLFREE_DISPLAY}</span>
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
          >
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            <span>Free review</span>
          </Link>
        </div>
      </div>
    </>
  );
}
