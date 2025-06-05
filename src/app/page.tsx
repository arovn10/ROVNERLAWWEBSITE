import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <header className="test-header">
        <div className="test-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h1 className="test-title">LAW OFFICES OF</h1>
              <h2 className="test-subtitle">Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h2>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="test-phone">215-259-5958</div>
              <button className="test-button">GET A FREE CONSULTATION!</button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="test-nav">
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about">ABOUT US</Link></li>
          <li><Link href="/attorneys">ATTORNEYS</Link></li>
          <li><Link href="/practice">PRACTICE</Link></li>
          <li><Link href="/locations">LOCATIONS</Link></li>
          <li><Link href="/photo-gallery">PHOTO GALLERY</Link></li>
          <li><Link href="/in-the-news">IN THE NEWS</Link></li>
          <li><Link href="/radio-show">RADIO SHOW</Link></li>
          <li><Link href="/contact">CONTACT US</Link></li>
        </ul>
      </nav>

      {/* Hero Banner */}
      <section className="test-hero">
        <h2>RECENT SETTLEMENTS & VERDICTS</h2>
        <p style={{ fontSize: '1.25rem', margin: '0' }}>Over 40 Years of Fighting for Our Clients</p>
      </section>

      {/* Test Content */}
      <section className="test-content">
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>
          CSS Test - If you can see this styled, CSS is working!
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#059669', marginBottom: '0.5rem' }}>$113,500</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>LIMITED TORT MOTOR VEHICLE ACCIDENT</div>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#059669', marginBottom: '0.5rem' }}>$50,000</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>SEPTA BUS ACCIDENT</div>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#059669', marginBottom: '0.5rem' }}>$185,000</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>TRIP AND FALL ACCIDENT</div>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '1rem' }}>Premier Injury Lawyers</h3>
          <p style={{ lineHeight: '1.6', color: '#374151' }}>
            For over 40 years, the Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt have been fighting for clients in Philly who have been victims of negligence, auto accidents, personal injury, medical malpractice and premise liability and need an injury lawyer to properly represent them.
          </p>
        </div>
      </section>
    </div>
  );
}
