"use client";

import { Menu, X, Phone } from "lucide-react";
import { useFirmName } from '@/lib/FirmNameContext';

export default function MobileHeader({ onMenuClick, isMenuOpen }: { onMenuClick: () => void, isMenuOpen: boolean }) {
  const { firmName } = useFirmName();
  return (
    <header className="flex items-center justify-between px-4 h-16 bg-white border-b border-slate-200 lg:hidden sticky top-0 z-50 shadow-sm">
      <span className="font-serif font-bold text-slate-900 text-sm truncate max-w-[60vw]">{firmName}</span>
      <div className="flex items-center gap-1">
        <a href="tel:215-259-5958" className="p-3 text-slate-600 hover:text-slate-800 rounded-lg hover:bg-slate-50 transition-colors" aria-label="Call Rovner Law">
          <Phone className="h-5 w-5" />
        </a>
        <button
          onClick={onMenuClick}
          className="p-3 text-slate-600 hover:text-slate-800 rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>
  );
} 