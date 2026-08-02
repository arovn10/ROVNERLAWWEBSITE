"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { PRACTICE_LINKS, practiceAreaPath } from "@/lib/practice-areas";

const practiceAreas = PRACTICE_LINKS.map((a) => ({ name: a.name, href: practiceAreaPath(a.slug) }));

export default function MobileNav({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [practiceOpen, setPracticeOpen] = useState(false);
  if (!isOpen) return null;
  return (
    <div className="lg:hidden border-t border-gray-200 bg-white shadow-md">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link href="/" className="block px-3 py-3 text-gray-700 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>Home</Link>
        <Link href="/about" className="block px-3 py-3 text-gray-700 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>About Us</Link>
        <Link href="/attorneys" className="block px-3 py-3 text-gray-700 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>Attorneys</Link>
        <div className="px-3 py-3">
          <button
            onClick={() => setPracticeOpen(!practiceOpen)}
            className="flex items-center justify-between text-gray-700 hover:text-slate-800 w-full text-left"
          >
            <span>Practice Areas</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${practiceOpen ? 'rotate-180' : ''}`} />
          </button>
          {practiceOpen && (
            <div className="mt-2 space-y-1">
              {practiceAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="block py-2 px-4 text-sm text-gray-600 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => {
                    setPracticeOpen(false);
                    onClose();
                  }}
                >
                  {area.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link href="/locations" className="block px-3 py-3 text-gray-700 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>Locations</Link>
        <Link href="/photo-gallery" className="block px-3 py-3 text-gray-700 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>Photo Gallery</Link>
        <Link href="/in-the-news" className="block px-3 py-3 text-gray-700 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>In The News</Link>
        <Link href="/contact" className="block px-3 py-3 text-gray-700 hover:text-slate-800 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>Contact</Link>
        <div className="px-3 py-3">
          <Link href="/contact" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold px-4 py-2 rounded shadow-sm transition-colors" onClick={onClose}>
            Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
} 