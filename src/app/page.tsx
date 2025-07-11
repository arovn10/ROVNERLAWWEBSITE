"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';
import { practiceAreas } from './practice/page';
import { Phone, Users, Briefcase, Mail, DollarSign } from 'lucide-react';

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
  const [practiceAreas, setPracticeAreas] = useState<any[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPracticeAreaIndex, setCurrentPracticeAreaIndex] = useState(0);

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
    fetch('/api/practice-areas')
      .then(res => res.json())
      .then((data) => setPracticeAreas(data));
  }, []);

  useEffect(() => {
    if (settlements.length <= visibleSettlementCount) return;
    const interval = setInterval(() => {
      setCurrentSettlementIndex((prev) => (prev + 1 > maxSettlementIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxSettlementIndex, settlements.length]);

  useEffect(() => {
    if (practiceAreas.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentPracticeAreaIndex((prev) => (prev + 1 >= practiceAreas.length ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [practiceAreas.length]);

  const nextSettlement = () => setCurrentSettlementIndex((prev) => (prev + 1 > maxSettlementIndex ? 0 : prev + 1));
  const prevSettlement = () => setCurrentSettlementIndex((prev) => (prev - 1 < 0 ? maxSettlementIndex : prev - 1));
  
  const nextPracticeArea = () => setCurrentPracticeAreaIndex((prev) => (prev + 1 >= practiceAreas.length ? 0 : prev + 1));
  const prevPracticeArea = () => setCurrentPracticeAreaIndex((prev) => (prev - 1 < 0 ? practiceAreas.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center font-sans">
      {/* Desktop Header/Nav */}
      <div className="hidden lg:block w-full">
        <Header currentPage="home" />
      </div>
      {/* Mobile Header/Nav */}
      <div className="block lg:hidden w-full">
        <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block w-full">
        {/* Mobile Quick Access Section */}
        <div className="block lg:hidden w-full px-4 pt-4 pb-2 flex flex-col gap-3">
          <Link href="/contact" className="w-full bg-blue-700 text-white font-bold rounded-lg py-3 text-center text-lg shadow hover:bg-blue-800 transition">Contact Us</Link>
          <a href="tel:215-259-5958" className="w-full bg-yellow-400 text-blue-900 font-bold rounded-lg py-3 text-center text-lg shadow hover:bg-yellow-500 transition">Call 215-259-5958</a>
          <Link href="/contact" className="w-full bg-green-600 text-white font-bold rounded-lg py-3 text-center text-lg shadow hover:bg-green-700 transition">Free Consultation</Link>
        </div>

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
        {/* Desktop Settlements Carousel */}
        <section className="section hidden lg:block" style={{paddingBottom: '2rem', marginBottom: '0'}}>
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
              <div className="grid grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.2rem'}}>
                {settlements.slice(currentSettlementIndex, currentSettlementIndex + visibleSettlementCount).map((settlement: Settlement) => (
                  <div key={settlement.id} className="card settlement-card" style={{
                    background: '#fff',
                    borderRadius: '18px',
                    boxShadow: '0 2px 16px rgba(20,28,38,0.09)',
                    border: '1px solid #e5e7eb',
                    padding: '2.2rem 1.5rem 1.7rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '220px',
                    maxWidth: '370px',
                    margin: '0 auto',
                    gap: '0.7rem',
                  }}>
                    <div style={{marginBottom:'1.1rem'}}>
                      <span style={{display:'flex',alignItems:'center',justifyContent:'center',width:54,height:54,borderRadius:'50%',background:'linear-gradient(135deg,#22c55e 0%,#16a34a 100%)',boxShadow:'0 2px 8px rgba(34,197,94,0.10)'}}>
                        <DollarSign size={28} color="#fff" />
                      </span>
                    </div>
                    <div className="settlement-amount" style={{fontSize:'2.3rem',fontWeight:800,color:'#16a34a',marginBottom:'0.5rem',letterSpacing:'-0.02em',lineHeight:1}}>
                      ${settlement.amount.toLocaleString()}
                    </div>
                    <div className="settlement-type" style={{fontSize:'0.93rem',color:'#64748b',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em',lineHeight:1.4,marginBottom:'0.2rem'}}>{settlement.caseType}</div>
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

        {/* Desktop Practice Areas Carousel/Section */}
        <section className="section hidden lg:block">
          <div className="section-title" style={{marginBottom: '1.5rem'}}>
            <h3>Our Practice Areas</h3>
            <p>Comprehensive legal services with proven results</p>
          </div>
          <PracticeAreasCarousel practiceAreas={practiceAreas} />
        </section>

        {/* Quick Links Section */}
        <div className="quick-links-bg" style={{ width: '100%', padding: '0 0 3rem 0', margin: 0 }}>
          <section className="section quick-links" style={{ maxWidth: 1400, margin: '0 auto', background: 'transparent', padding: 0 }}>
            <div className="section-title">
              <h3>Quick Access</h3>
              <p>Get the help you need quickly</p>
            </div>
            <div className="quick-links-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem', width: '100%' }}>
              <Link href="/contact" className="quick-link-card">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 64, height: 64, borderRadius: '50%', background: 'var(--gradient-blue)', boxShadow: '0 2px 8px rgba(29,78,216,0.10)' }}>
                    <Phone size={32} color="#fff" />
                  </span>
                </div>
                <h4>Free Consultation</h4>
                <p>Get expert legal advice at no cost</p>
              </Link>
              <Link href="/attorneys" className="quick-link-card">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 64, height: 64, borderRadius: '50%', background: 'var(--gradient-blue)', boxShadow: '0 2px 8px rgba(29,78,216,0.10)' }}>
                    <Users size={32} color="#fff" />
                  </span>
                </div>
                <h4>Our Attorneys</h4>
                <p>Meet our experienced legal team</p>
              </Link>
              <Link href="/practice" className="quick-link-card">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 64, height: 64, borderRadius: '50%', background: 'var(--gradient-blue)', boxShadow: '0 2px 8px rgba(29,78,216,0.10)' }}>
                    <Briefcase size={32} color="#fff" />
                  </span>
                </div>
                <h4>Practice Areas</h4>
                <p>Comprehensive legal services</p>
              </Link>
              <Link href="/contact" className="quick-link-card">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 64, height: 64, borderRadius: '50%', background: 'var(--gradient-blue)', boxShadow: '0 2px 8px rgba(29,78,216,0.10)' }}>
                    <Mail size={32} color="#fff" />
                  </span>
                </div>
                <h4>Contact Us</h4>
                <p>Reach out for immediate help</p>
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <Image
            src="/photos/banner-home-new-1-1024x343.png"
            alt="Rovner Law - Personal Injury & Criminal Defense"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 20%' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-purple-900/70" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>Rovner, Allen, Rovner And Sigman</h1>
            <p className="text-sm mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>Personal Injury & Criminal Defense</p>
            <div className="flex justify-center gap-2">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">40+ Years Experience</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">Free Consultation</span>
            </div>
          </div>
        </section>
        {/* Mobile Settlements Carousel */}
        <section className="px-4 py-4">
          <h3 className="text-lg font-bold mb-3 text-blue-900">Recent Results</h3>
          {loading ? (
            <div className="text-center py-8 text-gray-500">Loading settlements...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">{error}</div>
          ) : settlements.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No settlements found.</div>
          ) : (
            <div className="relative">
              <button 
                onClick={prevSettlement}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-100"
                style={{ width: 40, height: 40 }}
                aria-label="Previous Settlement"
              >
                <span className="text-gray-600 text-lg">‹</span>
              </button>
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex flex-col items-center text-center overflow-hidden mx-4 w-full max-w-xs min-w-[220px]">
                  <div className="text-green-600 font-bold text-2xl mb-1">${settlements[currentSettlementIndex]?.amount.toLocaleString()}</div>
                  <div className="text-base text-gray-700 mb-2 font-semibold">{settlements[currentSettlementIndex]?.title}</div>
                  <div className="text-xs text-gray-500">{settlements[currentSettlementIndex]?.description}</div>
                </div>
              </div>
              <button 
                onClick={nextSettlement}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-100"
                style={{ width: 40, height: 40 }}
                aria-label="Next Settlement"
              >
                <span className="text-gray-600 text-lg">›</span>
              </button>
              {/* Settlements Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {settlements.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSettlementIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      idx === currentSettlementIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to settlement ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
        {/* Mobile Practice Areas */}
        <section className="px-4 py-4">
          <h3 className="text-lg font-bold mb-2 text-blue-900">Practice Areas</h3>
          {practiceAreas.length === 0 ? (
            <div className="text-center py-8 text-gray-500">Loading practice areas...</div>
          ) : (
            <div className="relative">
              <button 
                onClick={prevPracticeArea}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50"
                style={{ width: 40, height: 40 }}
                aria-label="Previous Practice Area"
              >
                <span className="text-gray-600 text-lg">‹</span>
              </button>
              
              <div className="mx-12">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden" style={{ minHeight: 280 }}>
                  <div className="relative h-48">
                    <Image
                      src={practiceAreas[currentPracticeAreaIndex]?.image || '/photos/personal-inury.jpg'}
                      alt={practiceAreas[currentPracticeAreaIndex]?.title || 'Practice Area'}
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center 30%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-4 w-full bg-white">
                    <span className="font-bold text-blue-900 text-xl leading-tight block px-2 text-center" style={{lineHeight:'1.2', textShadow: 'none'}}>
                      {practiceAreas[currentPracticeAreaIndex]?.title}
                    </span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={nextPracticeArea}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50"
                style={{ width: 40, height: 40 }}
                aria-label="Next Practice Area"
              >
                <span className="text-gray-600 text-lg">›</span>
              </button>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {practiceAreas.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPracticeAreaIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentPracticeAreaIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to practice area ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Mobile Quick Access */}
        <section className="px-4 pt-4 pb-2">
          <h3 className="text-lg font-bold mb-3 text-blue-900">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <a href="/attorneys" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">👥</div>
              <div className="font-semibold text-gray-800 text-sm">Our Attorneys</div>
            </a>
            <a href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">⚖️</div>
              <div className="font-semibold text-gray-800 text-sm">Practice Areas</div>
            </a>
            <a href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📍</div>
              <div className="font-semibold text-gray-800 text-sm">Locations</div>
            </a>
            <a href="/contact" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📞</div>
              <div className="font-semibold text-gray-800 text-sm">Contact Us</div>
            </a>
          </div>
        </section>

        {/* Mobile Free Consultation */}
        <section className="px-4 pt-4 pb-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col gap-3 p-4 items-center">
            <a href="/contact" className="w-full bg-green-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-green-700 transition flex items-center justify-center gap-2">
              <Mail size={20} />
              Free Consultation
            </a>
          </div>
        </section>

        {/* Mobile Footer */}
        <Footer />
      </div>
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

function PracticeAreasCarousel({ practiceAreas }: { practiceAreas: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = practiceAreas.length - visibleCount;

  useEffect(() => {
    if (practiceAreas.length <= visibleCount) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex, practiceAreas.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));

  return (
    <div className="carousel-container" style={{maxWidth: '1400px', margin: '0 auto'}}>
      <button className="carousel-btn prev-btn" onClick={prev}>&#8249;</button>
      <div className="settlements-carousel">
        <div className="grid grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem'}}>
          {practiceAreas.slice(currentIndex, currentIndex + visibleCount).map((area: any) => (
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
                {area.image && <img src={area.image} alt={area.title} style={{maxWidth:'100%',height:'120px',objectFit:'cover',borderRadius:'10px'}} />}
              </div>
              <div style={{fontWeight:700,fontSize:'1.08rem',margin:'0.3rem 0 0.2rem',color:'#1a202c',textAlign:'center',lineHeight:1.2}}>{area.title}</div>
              <div style={{fontSize:'0.93rem',color:'#444',marginBottom:'0.7rem',lineHeight:1.5,fontWeight:400,textAlign:'center',minHeight:0}}>{area.description}</div>
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
