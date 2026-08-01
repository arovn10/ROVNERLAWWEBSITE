'use client';

import Link from 'next/link';
import { useFirmName } from '@/lib/FirmNameContext';
import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TOLLFREE_DISPLAY, TEL_HREF_TOLLFREE } from '@/lib/contact-details';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = '' }: HeaderProps) {
  const { firmName } = useFirmName();

  return (
    <>
      {/* Refined Professional Header */}
      <div className="w-full bg-white border-b border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.04)] relative z-[100]">
        <header className="w-full">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-1">Law Offices of</p>
              {/* Not an <h1>: this is the masthead logotype, repeated on every page.
                  As a heading it made the firm name the primary heading of all 21
                  pages instead of each page's own subject. */}
              <p className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">{firmName}</p>
              <div className="w-16 h-0.5 bg-amber-800/70 mt-3 rounded-full" />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Dials the toll-free number it displays. This used to show
                  888-DIAL-LAW and dial the local line instead. */}
              <a href={TEL_HREF_TOLLFREE} className="flex items-center gap-2 text-slate-900 hover:text-amber-800 transition-colors group">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors">
                  <Phone className="w-4 h-4 text-slate-600 group-hover:text-amber-800" />
                </span>
                <div className="text-left">
                  <span className="block text-xl font-bold tracking-tight">{PHONE_TOLLFREE_DISPLAY}</span>
                  <span className="text-xs text-slate-500">Toll Free · Local: {PHONE_DISPLAY}</span>
                </div>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 text-white font-semibold text-sm uppercase tracking-wider rounded-md hover:bg-slate-700 transition-all duration-200 shadow-sm"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </header>
      </div>

      {/* Refined Navigation */}
      <nav className="w-full bg-slate-800 text-white sticky top-0 z-[90] border-b border-white/5 shadow-sm">
        <ul className="max-w-6xl mx-auto flex flex-wrap justify-center">
          {[
            { href: '/', page: 'home', label: 'Home' },
            { href: '/about', page: 'about', label: 'About Us' },
            { href: '/attorneys', page: 'attorneys', label: 'Attorneys' },
            { href: '/practice', page: 'practice', label: 'Practice Areas' },
            { href: '/locations', page: 'locations', label: 'Locations' },
            { href: '/photo-gallery', page: 'photo-gallery', label: 'Photo Gallery' },
            { href: '/in-the-news', page: 'in-the-news', label: 'In the News' },
            { href: '/contact', page: 'contact', label: 'Contact' },
          ].map(({ href, page, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block px-5 py-4 text-sm font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] border-b-2 ${
                  currentPage === page
                    ? 'bg-white/5 text-amber-800/90 border-amber-800/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
} 