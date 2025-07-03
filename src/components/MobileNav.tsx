"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const practiceAreas = [
  { name: "Personal Injury", href: "/practice/personal-injury" },
  { name: "Auto Accidents", href: "/practice/auto-accidents" },
  { name: "Motorcycle Accidents", href: "/practice/motorcycle-accidents" },
  { name: "Truck Accidents", href: "/practice/truck-accidents" },
  { name: "Premises Liability", href: "/practice/premises-liability" },
  { name: "Medical Malpractice", href: "/practice/medical-malpractice" },
  { name: "Products Liability", href: "/practice/products-liability" },
  { name: "Workers' Compensation", href: "/practice/workers-compensation" },
  { name: "Family Law", href: "/practice/family-law" },
  { name: "Criminal Defense", href: "/practice/criminal-defense" },
  { name: "Social Security Disability", href: "/practice/social-security-disability" },
  { name: "General Legal Matters", href: "/practice/general-legal-matters" },
];

export default function MobileNav({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [practiceOpen, setPracticeOpen] = useState(false);
  if (!isOpen) return null;
  return (
    <div className="lg:hidden border-t border-gray-200 bg-white shadow-md">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link href="/" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>Home</Link>
        <Link href="/about" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>About Us</Link>
        <Link href="/attorneys" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>Attorneys</Link>
        <div className="px-3 py-3">
          <button
            onClick={() => setPracticeOpen(!practiceOpen)}
            className="flex items-center justify-between text-gray-700 hover:text-blue-600 w-full text-left"
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
                  className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
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
        <Link href="/locations" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>Locations</Link>
        <Link href="/photo-gallery" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>Photo Gallery</Link>
        <Link href="/in-the-news" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>In The News</Link>
        <Link href="/contact" className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors" onClick={onClose}>Contact</Link>
        <div className="px-3 py-3">
          <Link href="/contact" className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded shadow transition-colors" onClick={onClose}>
            Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
} 