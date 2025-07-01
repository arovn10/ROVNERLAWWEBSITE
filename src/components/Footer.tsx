'use client';

import Link from 'next/link';
import { useFirmName } from '@/lib/FirmNameContext';

export default function Footer() {
  const { firmName } = useFirmName();

  return (
    <>
      {/* Fixed Contact Button */}
      <Link href="/contact" className="fixed-contact">
        CONTACT US!
      </Link>

      {/* Professional Footer */}
      <div className="footer-bg" style={{ width: '100%', background: 'var(--gradient-navy)', color: 'white', padding: '5rem 2rem 3rem', marginTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <footer className="footer" style={{ width: '100%' }}>
          <div className="footer-content" style={{ maxWidth: 1400, margin: '0 auto' }}>
            <div className="footer-grid">
              {/* Navigation */}
              <div className="footer-section">
                <h4>Navigation</h4>
                <ul className="footer-list">
                  <li><Link href="/" className="footer-link">Home</Link></li>
                  <li><Link href="/about" className="footer-link">About</Link></li>
                  <li><Link href="/attorneys" className="footer-link">Attorneys</Link></li>
                  <li><Link href="/locations" className="footer-link">Locations</Link></li>
                  <li><Link href="/photo-gallery" className="footer-link">Photo Gallery</Link></li>
                  <li><Link href="/in-the-news" className="footer-link">In the News</Link></li>
                  <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
                </ul>
              </div>

              {/* Practice Areas */}
              <div className="footer-section">
                <h4>Practice Areas</h4>
                <ul className="footer-list">
                  <li><Link href="/practice" className="footer-link">Personal Injury</Link></li>
                  <li><Link href="/practice" className="footer-link">Automobile Accidents</Link></li>
                  <li><Link href="/practice" className="footer-link">Motorcycle Accidents</Link></li>
                  <li><Link href="/practice" className="footer-link">Truck Accidents</Link></li>
                  <li><Link href="/practice" className="footer-link">Premises Liability</Link></li>
                  <li><Link href="/practice" className="footer-link">Medical Malpractice</Link></li>
                  <li><Link href="/practice" className="footer-link">Defective Products</Link></li>
                  <li><Link href="/practice" className="footer-link">Workers' Compensation</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="footer-section">
                <h4>Contact Us</h4>
                <div className="footer-contact-info">
                  <p>175 Bustleton Pike<br />Feasterville-Trevose, PA 19053</p>
                  <p className="footer-phone">215-259-5958</p>
                  <p>rovners@dial-law.com</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="footer-section">
                <h4>Professional Memberships</h4>
                <div className="footer-contact-info">
                  <p>Pennsylvania Bar Association</p>
                  <p>Philadelphia Bar Association</p>
                  <p>American Association for Justice</p>
                  <p>Pennsylvania Association for Justice</p>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="footer-disclaimer">
                The hiring of a lawyer is an important decision that should not be based solely upon advertisements. 
                <Link href="#"> Click here to see our disclaimer policies.</Link>
              </p>
              <p className="footer-copyright">©1997-2025 by Robert A. Rovner, P.C. All rights reserved. Programmed by Alec Rovner</p>
              <p className="footer-legal">
                The submission of the information contained above in this form is not intended to create an attorney-client relationship. There will be no representation of the party submitting this above information for any potential legal claim until that party is contacted by a member of {firmName} ("the Firm") and a formal, written contract is signed by that party and an authorized member of the Firm. The Firm will not be liable for any time limitations or representation in any legal matter raised by the use of this internet website.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 