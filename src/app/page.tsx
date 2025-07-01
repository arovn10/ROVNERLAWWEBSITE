"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFirmName } from '@/lib/FirmNameContext';
import { practiceAreas } from './practice/page';

// Settlement type for fetched data
type Settlement = {
  id: string;
  title: string;
  description: string;
  amount: number;
  date: string;
  caseType: string;
  createdAt?: string;
  updatedAt?: string;
};

// Group settlements into chunks for the carousel
function groupSettlementsForCarousel(settlements: Settlement[], groupSize: number) {
  const groups = [];
  for (let i = 0; i < settlements.length; i += groupSize) {
    groups.push(settlements.slice(i, i + groupSize));
  }
  return groups;
}

export default function HomePage() {
  const { firmName } = useFirmName();
  const [settlements, setSettlements] = useState<Settlement[]>([]);
  const [settlementGroups, setSettlementGroups] = useState<Settlement[][]>([]);
  const [currentSettlementIndex, setCurrentSettlementIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const visibleSettlementCount = 3;
  const maxSettlementIndex = settlements.length - visibleSettlementCount;

  useEffect(() => {
    fetch('/api/settlements')
      .then(res => res.json())
      .then((data: Settlement[]) => {
        setSettlements(data);
        setSettlementGroups(groupSettlementsForCarousel(data, 3));
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load settlements');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (settlements.length <= visibleSettlementCount) return;
    const interval = setInterval(() => {
      setCurrentSettlementIndex((prev) => (prev + 1 > maxSettlementIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxSettlementIndex, settlements.length]);

  const nextSettlement = () => setCurrentSettlementIndex((prev) => (prev + 1 > maxSettlementIndex ? 0 : prev + 1));
  const prevSettlement = () => setCurrentSettlementIndex((prev) => (prev - 1 < 0 ? maxSettlementIndex : prev - 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center font-sans">
      <Header currentPage="home" />
      {/* Hero Banner with Professional Home Image and overlayed content */}
      <div className="hero-bg" style={{ width: '100%', position: 'relative', minHeight: '140px', background: 'linear-gradient(120deg, #1e293b 60%, #334155 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <section className="hero-professional" style={{ width: '100%', position: 'relative', minHeight: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', padding: 0 }}>
          <div className="hero-image-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Image 
              src="/photos/banner-home-new-1-1024x343.png" 
              alt="Professional Law Firm" 
              width={1024}
              height={343}
              className="hero-background"
              priority
              style={{ 
                objectPosition: 'center top', 
                objectFit: 'cover', 
                width: '100%', 
                height: '100%',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(20, 28, 38, 0.45)',
              zIndex: 1
            }} />
          </div>
          <div className="hero-content" style={{
            maxWidth: 1200,
            margin: '0 auto',
            width: '100%',
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '2rem 0',
          }}>
            <h1 className="content-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 800, marginBottom: '0.5rem', color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>{firmName}</h1>
            <div className="accent-bar" style={{ margin: '0 auto 1.5rem auto', background: 'var(--gradient-gold)' }}></div>
            <h2 className="content-subtitle" style={{ marginBottom: '1.5rem', color: '#f3f4f6', fontWeight: 600, fontSize: '1.7rem', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Premier Injury Lawyers</h2>
            <p className="content-text" style={{ marginBottom: '2.5rem', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', color: '#e5e7eb', fontSize: '1.25rem', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              For over 40 years, {firmName} has been fighting for clients in Philadelphia who have been victims of negligence, auto accidents, personal injury, medical malpractice and premise liability.
            </p>
            <div className="firm-highlights" style={{ justifyContent: 'center', gap: '3rem', marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap' }}>
              <div className="highlight-item" style={{ minWidth: 120 }}>
                <span className="highlight-number" style={{ color: '#fbbf24', fontSize: '2.2rem', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>40+</span>
                <span className="highlight-text" style={{ color: '#f3f4f6', display: 'block', fontWeight: 500, marginTop: 4, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Years of Experience</span>
              </div>
              <div className="highlight-item" style={{ minWidth: 120 }}>
                <span className="highlight-number" style={{ color: '#fbbf24', fontSize: '2.2rem', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>15+</span>
                <span className="highlight-text" style={{ color: '#f3f4f6', display: 'block', fontWeight: 500, marginTop: 4, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Skilled Attorneys</span>
              </div>
              <div className="highlight-item" style={{ minWidth: 120 }}>
                <span className="highlight-number" style={{ color: '#fbbf24', fontSize: '2.2rem', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>1000+</span>
                <span className="highlight-text" style={{ color: '#f3f4f6', display: 'block', fontWeight: 500, marginTop: 4, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Cases Won</span>
              </div>
            </div>
            <a href="/contact" style={{
              display: 'inline-block',
              background: 'var(--gradient-gold, linear-gradient(135deg, #d97706 0%, #f59e0b 100%))',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.15rem',
              padding: '0.9rem 2.5rem',
              borderRadius: 8,
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              marginTop: 8,
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.background = 'var(--gold-accent, #d97706)'}
            onMouseOut={e => e.currentTarget.style.background = 'var(--gradient-gold, linear-gradient(135deg, #d97706 0%, #f59e0b 100%))'}
            >
              Get a Free Consultation
            </a>
          </div>
        </section>
      </div>
      {/* Settlement Carousel */}
      <section className="section" style={{paddingBottom: '2rem', marginBottom: '0'}}>
        <div className="section-title" style={{marginBottom: '1.5rem'}}>
          <h3>Recent Results</h3>
          <p>We get results for our clients</p>
        </div>
        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading settlements...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">{error}</div>
        ) : settlements.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No settlements found.</div>
        ) : (
        <div className="carousel-container" style={{maxWidth: '1400px', margin: '0 auto'}}>
          <button className="carousel-btn prev-btn" onClick={prevSettlement}>&#8249;</button>
          <div className="settlements-carousel">
            <div className="grid grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem'}}>
              {settlements.slice(currentSettlementIndex, currentSettlementIndex + visibleSettlementCount).map((settlement: Settlement) => (
                <div key={settlement.id} className="card settlement-card">
                  <div className="settlement-icon">
                    <div className="settlement-symbol">$</div>
                  </div>
                  <div className="settlement-amount">
                    ${settlement.amount.toLocaleString()}
                  </div>
                  <div className="settlement-type">{settlement.caseType}</div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators" style={{display:'flex',justifyContent:'center',marginTop:'1.5rem'}}>
              {Array.from({length: maxSettlementIndex + 1}).map((_, idx) => (
                <button key={idx} className={`indicator ${idx === currentSettlementIndex ? 'active' : ''}`} onClick={() => setCurrentSettlementIndex(idx)} />
              ))}
            </div>
          </div>
          <button className="carousel-btn next-btn" onClick={nextSettlement}>&#8250;</button>
        </div>
        )}
      </section>
      {/* Subtle Divider */}
      <div style={{height: '0.5rem', background: 'transparent', margin: '0 auto', width: '100%'}} />
      {/* Practice Areas Carousel */}
      <section className="section" style={{paddingTop: '0', marginTop: '0'}}>
        <div className="section-title" style={{marginBottom: '1.5rem'}}>
          <h3>Our Practice Areas</h3>
          <p>Comprehensive legal services with proven results</p>
        </div>
        <PracticeAreasCarousel />
      </section>
      {/* Quick Links Section */}
      <div className="quick-links-bg" style={{ width: '100%', background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', padding: '0 0 3rem 0', margin: 0 }}>
        <section className="section quick-links" style={{ maxWidth: 1400, margin: '0 auto', background: 'transparent', padding: 0 }}>
          <div className="section-title">
            <h3>Quick Access</h3>
            <p>Get the help you need quickly</p>
          </div>
          <div className="quick-links-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem', width: '100%' }}>
            <Link href="/contact" className="quick-link-card">
              <Image 
                src="/photos/quicklink-1-1.png" 
                alt="Free Consultation" 
                width={64} 
                height={64}
                className="quick-link-icon"
              />
              <h4>Free Consultation</h4>
              <p>Get expert legal advice at no cost</p>
            </Link>
            <Link href="/attorneys" className="quick-link-card">
              <Image 
                src="/photos/quicklink-2-1.png" 
                alt="Our Attorneys" 
                width={64} 
                height={64}
                className="quick-link-icon"
              />
              <h4>Our Attorneys</h4>
              <p>Meet our experienced legal team</p>
            </Link>
            <Link href="/practice" className="quick-link-card">
              <Image 
                src="/photos/quicklink-3-1.png" 
                alt="Practice Areas" 
                width={64} 
                height={64}
                className="quick-link-icon"
              />
              <h4>Practice Areas</h4>
              <p>Comprehensive legal services</p>
            </Link>
            <Link href="/contact" className="quick-link-card">
              <Image 
                src="/photos/quicklink-4-1.png" 
                alt="Contact Us" 
                width={64} 
                height={64}
                className="quick-link-icon"
              />
              <h4>Contact Us</h4>
              <p>Reach out for immediate help</p>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

function groupPracticeAreasForCarousel(areas: typeof practiceAreas, groupSize: number) {
  const groups = [];
  for (let i = 0; i < areas.length; i += groupSize) {
    groups.push(areas.slice(i, i + groupSize));
  }
  return groups;
}

function PracticeAreasCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = practiceAreas.length - visibleCount;

  useEffect(() => {
    if (practiceAreas.length <= visibleCount) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const next = () => setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));

  return (
    <div className="carousel-container" style={{maxWidth: '1400px', margin: '0 auto'}}>
      <button className="carousel-btn prev-btn" onClick={prev}>&#8249;</button>
      <div className="settlements-carousel">
        <div className="grid grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem'}}>
          {practiceAreas.slice(currentIndex, currentIndex + visibleCount).map((area: typeof practiceAreas[0]) => (
            <div key={area.id} className="card settlement-card" style={{
              background:'#fff',
              borderRadius:'14px',
              boxShadow:'0 2px 10px rgba(20,28,38,0.07)',
              padding:'1.1rem 1.2rem 1.2rem 1.2rem',
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              minHeight:'320px',
              maxWidth:'370px',
              margin:'0 auto',
              gap:'0.7rem',
            }}>
              <div className="settlement-icon" style={{marginBottom:'0.5rem'}}>
                <Image src={area.image} alt={area.title} width={400} height={200} style={{maxWidth:'100%',height:'120px',objectFit:'cover',borderRadius:'10px'}} />
              </div>
              <div style={{fontWeight:700,fontSize:'1.08rem',margin:'0.3rem 0 0.2rem',color:'#1a202c',textAlign:'center',lineHeight:1.2}}>{area.title}</div>
              <div style={{fontSize:'0.93rem',color:'#444',marginBottom:'0.7rem',lineHeight:1.5,fontWeight:400,textAlign:'center',minHeight:0}}>{area.description}</div>
              <Link href="/practice" className="learn-more-btn" style={{display:'inline-block',margin:'0 auto',padding:'0.5rem 1.2rem',fontSize:'0.97rem',fontWeight:600,borderRadius:'7px',background:'#1a237e',color:'#fff',textDecoration:'none',boxShadow:'0 1px 4px rgba(20,28,38,0.08)',transition:'background 0.2s'}}>Learn More</Link>
            </div>
          ))}
        </div>
        <div className="carousel-indicators" style={{display:'flex',justifyContent:'center',marginTop:'1.5rem'}}>
          {Array.from({length: maxIndex + 1}).map((_, idx) => (
            <button key={idx} className={`indicator ${idx === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(idx)} />
          ))}
        </div>
      </div>
      <button className="carousel-btn next-btn" onClick={next}>&#8250;</button>
    </div>
  );
}
