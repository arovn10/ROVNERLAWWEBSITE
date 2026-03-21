'use client';

import Link from 'next/link';
import { useFirmName } from '@/lib/FirmNameContext';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const { firmName } = useFirmName();

  return (
    <>
      {/* Fixed Contact - refined */}
      <Link
        href="/contact"
        className="fixed right-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center z-[1000] hidden xl:block bg-slate-700 text-slate-100 px-6 py-3 text-sm font-semibold tracking-wider rounded-t-lg shadow-md hover:bg-slate-600 transition-colors"
      >
        Free Consultation
      </Link>

      {/* Refined Footer */}
      <footer className="w-full bg-slate-900 text-slate-300 mt-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Navigation */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-sm hover:text-slate-200 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-sm hover:text-slate-200 transition-colors">About</Link></li>
                <li><Link href="/attorneys" className="text-sm hover:text-slate-200 transition-colors">Attorneys</Link></li>
                <li><Link href="/locations" className="text-sm hover:text-slate-200 transition-colors">Locations</Link></li>
                <li><Link href="/photo-gallery" className="text-sm hover:text-slate-200 transition-colors">Photo Gallery</Link></li>
                <li><Link href="/in-the-news" className="text-sm hover:text-slate-200 transition-colors">In the News</Link></li>
                <li><Link href="/contact" className="text-sm hover:text-slate-200 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-6">Practice Areas</h4>
              <ul className="space-y-3">
                <li><Link href="/practice/personal-injury" className="text-sm hover:text-slate-200 transition-colors">Personal Injury</Link></li>
                <li><Link href="/practice/auto-accidents" className="text-sm hover:text-slate-200 transition-colors">Auto Accidents</Link></li>
                <li><Link href="/practice/medical-malpractice" className="text-sm hover:text-slate-200 transition-colors">Medical Malpractice</Link></li>
                <li><Link href="/practice/premises-liability" className="text-sm hover:text-slate-200 transition-colors">Premises Liability</Link></li>
                <li><Link href="/practice/workers-compensation" className="text-sm hover:text-slate-200 transition-colors">Workers&apos; Compensation</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <span>175 Bustleton Pike<br />Feasterville-Trevose, PA 19053</span>
                </div>
                <a href="tel:215-259-5958" className="flex items-center gap-3 text-amber-800/90 font-semibold hover:text-slate-200 transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  888-DIAL-LAW
                </a>
                <a href="mailto:rovners@dial-law.com" className="flex items-center gap-3 text-sm hover:text-slate-200 transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  rovners@dial-law.com
                </a>
              </div>
            </div>

            {/* Memberships */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-6">Memberships</h4>
              <ul className="space-y-2 text-sm">
                <li>Pennsylvania Bar Association</li>
                <li>Philadelphia Bar Association</li>
                <li>American Association for Justice</li>
                <li>Pennsylvania Association for Justice</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 space-y-6">
            <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
              The hiring of a lawyer is an important decision that should not be based solely upon advertisements.{' '}
              <Link href="/disclaimer" className="text-slate-300 hover:text-white underline">View our disclaimer</Link>.
            </p>
            <p className="text-xs text-slate-500">©1997–2025 {firmName}. All rights reserved.</p>
            <p className="text-[11px] text-slate-600 leading-relaxed max-w-3xl">
              The submission of information through this website does not create an attorney-client relationship. 
              No representation will occur until you are contacted by {firmName} and a formal written contract is signed.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
} 