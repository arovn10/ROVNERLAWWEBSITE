'use client';

import Link from 'next/link';
import { useFirmName } from '@/lib/FirmNameContext';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = '' }: HeaderProps) {
  const { firmName } = useFirmName();

  return (
    <>
      {/* Professional Header */}
      <div className="header-bg" style={{ width: '100%', background: 'linear-gradient(180deg, #ffffff 0%, #fefefe 100%)', borderBottom: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)', position: 'relative', zIndex: 100 }}>
        <header className="header" style={{ width: '100%' }}>
          <div className="header-content" style={{ maxWidth: 1400, margin: '0 auto', padding: '2.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
            <div className="header-titles">
              <div className="firm-name-styled" style={{ maxWidth: 600 }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--navy-primary)', marginBottom: '0.5rem', lineHeight: 1.1 }}>LAW OFFICES OF</h1>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--gray-700)', lineHeight: 1.2, marginBottom: '0.5rem', wordBreak: 'break-word' }}>{firmName}</h2>
                <div style={{ width: 120, height: 6, background: 'var(--gradient-gold)', borderRadius: 3, margin: '0.5rem 0 0 0' }} />
              </div>
            </div>
            <div className="header-contact">
              <div className="phone-number">215-259-5958</div>
              <button className="cta-button">GET A FREE CONSULTATION!</button>
              <p className="header-tagline">Serving Pennsylvania and New Jersey Since 1980</p>
            </div>
          </div>
        </header>
      </div>

      {/* Professional Navigation */}
      <div className="navigation-bg" style={{ width: '100%', background: 'var(--gradient-navy)', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'sticky', top: 0, zIndex: 90, backdropFilter: 'blur(10px)' }}>
        <nav className="navigation" style={{ width: '100%' }}>
          <ul className="nav-list" style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <li><Link href="/" className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>HOME</Link></li>
            <li><Link href="/about" className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}>ABOUT US</Link></li>
            <li><Link href="/attorneys" className={`nav-link ${currentPage === 'attorneys' ? 'active' : ''}`}>ATTORNEYS</Link></li>
            <li><Link href="/practice" className={`nav-link ${currentPage === 'practice' ? 'active' : ''}`}>PRACTICE AREAS</Link></li>
            <li><Link href="/locations" className={`nav-link ${currentPage === 'locations' ? 'active' : ''}`}>LOCATIONS</Link></li>
            <li><Link href="/photo-gallery" className={`nav-link ${currentPage === 'photo-gallery' ? 'active' : ''}`}>PHOTO GALLERY</Link></li>
            <li><Link href="/in-the-news" className={`nav-link ${currentPage === 'in-the-news' ? 'active' : ''}`}>IN THE NEWS</Link></li>
            <li><Link href="/contact" className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}>CONTACT US</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
} 