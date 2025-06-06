'use client';

import Link from 'next/link';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = '' }: HeaderProps) {
  return (
    <>
      {/* Professional Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-titles">
            <div className="firm-name-styled">
              <h1>LAW OFFICES OF</h1>
              <h2>Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h2>
            </div>
          </div>
          <div className="header-contact">
            <div className="phone-number">215-259-5958</div>
            <button className="cta-button">GET A FREE CONSULTATION!</button>
            <p className="header-tagline">Serving Pennsylvania Since 1981</p>
          </div>
        </div>
      </header>

      {/* Professional Navigation */}
      <nav className="navigation">
        <ul className="nav-list">
          <li><Link href="/" className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>HOME</Link></li>
          <li><Link href="/about" className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}>ABOUT US</Link></li>
          <li><Link href="/attorneys" className={`nav-link ${currentPage === 'attorneys' ? 'active' : ''}`}>ATTORNEYS</Link></li>
          <li><Link href="/practice" className={`nav-link ${currentPage === 'practice' ? 'active' : ''}`}>PRACTICE AREAS</Link></li>
          <li><Link href="/locations" className={`nav-link ${currentPage === 'locations' ? 'active' : ''}`}>LOCATIONS</Link></li>
          <li><Link href="/photo-gallery" className={`nav-link ${currentPage === 'photo-gallery' ? 'active' : ''}`}>PHOTO GALLERY</Link></li>
          <li><Link href="/in-the-news" className={`nav-link ${currentPage === 'in-the-news' ? 'active' : ''}`}>IN THE NEWS</Link></li>
          <li><Link href="/radio-show" className={`nav-link ${currentPage === 'radio-show' ? 'active' : ''}`}>RADIO SHOW</Link></li>
          <li><Link href="/contact" className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}>CONTACT US</Link></li>
        </ul>
      </nav>
    </>
  );
} 