"use client";

import { Menu, X, Phone } from "lucide-react";
import { useFirmName } from '@/lib/FirmNameContext';

export default function MobileHeader({ onMenuClick, isMenuOpen }: { onMenuClick: () => void, isMenuOpen: boolean }) {
  const { firmName } = useFirmName();
  return (
    <header className="flex items-center justify-between px-4 h-14 bg-white border-b shadow-sm lg:hidden">
      <span className="text-base font-bold text-blue-800 truncate max-w-[60vw]">{firmName}</span>
      <div className="flex items-center gap-2">
        <a href="tel:215-259-5958" className="text-blue-600 hover:text-blue-800 p-2" aria-label="Call Rovner Law">
          <Phone className="h-5 w-5" />
        </a>
        <button
          onClick={onMenuClick}
          className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>
  );
} 