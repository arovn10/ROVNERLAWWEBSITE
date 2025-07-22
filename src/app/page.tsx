"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
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
  const settlementsTrackRef = useRef<HTMLDivElement>(null);
  const practiceTrackRef = useRef<HTMLDivElement>(null);

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
    <div className="min-h-screen bg-white flex flex-col items-center font-sans">
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
        {/* Hero Banner - Use <Image> for best quality, not backgroundImage */}
        <section className="relative w-full flex items-center justify-center overflow-hidden border-b border-slate-100" style={{ minHeight: '400px', background: 'black' }}>
          <Image
            src="/photos/bannernewwebsite.png"
            alt="Rovner Law Banner"
            fill
            style={{ objectFit: 'cover', width: '100%', height: '400px' }}
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6 w-full" style={{paddingTop: '48px', paddingBottom: '48px'}}>
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-2 tracking-tight drop-shadow-xl" style={{letterSpacing: '-0.03em'}}>Rovner, Allen, Rovner And Sigman</h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-100 mb-3 drop-shadow">Personal Injury Lawyers</h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-200 mb-6 max-w-2xl mx-auto drop-shadow">For over 40 years, Rovner, Allen, Rovner And Sigman has been fighting for clients in Philadelphia who have been victims of negligence, auto accidents, personal injury, medical malpractice and premise liability.</p>
            <a href="/contact" className="inline-block bg-white text-slate-900 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-slate-100 transition-all duration-150 mb-6">Get a Free Consultation</a>
            <div className="flex flex-row gap-10 mt-2 justify-center">
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-1 drop-shadow">150+</span>
                <span className="text-slate-100 font-medium text-sm md:text-base drop-shadow">Years of Combined Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-1 drop-shadow">25,000+</span>
                <span className="text-slate-100 font-medium text-sm md:text-base drop-shadow">Cases Won</span>
              </div>
            </div>
          </div>
        </section>

        {/* Settlements Section with Themed Background */}
        <section className="w-full py-20 border-t border-slate-100 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Recent Results</h3>
              <p className="text-slate-500">We get results for our clients</p>
            </div>
            {loading ? (
              <div className="text-center py-8 text-gray-500">Loading settlements...</div>
            ) : error ? (
              <div className="text-center py-8 text-red-500">{error}</div>
            ) : settlements.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No settlements found.</div>
            ) : (
              <div className="w-full flex justify-center">
                <div className="w-full bg-gray-100 py-8 flex justify-center">
                  <div className="relative max-w-4xl w-full">
                    <button
                    onClick={prevSettlement}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow border border-slate-200 hover:bg-slate-100 transition"
                    style={{ width: 44, height: 44 }}
                    aria-label="Previous Settlements"
                  >
                    <span className="text-slate-600 text-2xl">‹</span>
                  </button>
                  <div className="overflow-hidden">
                    <div
                      ref={settlementsTrackRef}
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{
                        width: `${settlements.length * 340}px`,
                        transform: `translateX(-${currentSettlementIndex * 340}px)`
                      }}
                    >
                      {settlements.map((settlement: Settlement) => (
                        <div key={settlement.id} className="bg-white rounded-2xl shadow-xl border border-slate-100 px-8 py-10 flex flex-col items-center min-w-[320px] max-w-[340px] mx-2 transition-all duration-200 hover:shadow-2xl">
                          <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow">
                            <DollarSign size={32} color="#fff" />
                          </div>
                          <div className="text-3xl font-extrabold text-green-600 mb-2">${settlement.amount.toLocaleString()}</div>
                          <div className="uppercase text-xs font-semibold text-slate-400 mb-1 tracking-widest">{settlement.caseType}</div>
                          <div className="text-slate-500 text-sm text-center">{settlement.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={nextSettlement}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow border border-slate-200 hover:bg-slate-100 transition"
                    style={{ width: 44, height: 44 }}
                    aria-label="Next Settlements"
                  >
                    <span className="text-slate-600 text-2xl">›</span>
                  </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Practice Areas Section with Themed Background */}
        <section className="w-full py-20 border-t border-slate-100 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Our Practice Areas</h3>
              <p className="text-slate-500">Comprehensive legal services with proven results</p>
            </div>
            <div className="relative">
              <div className="w-full flex justify-center">
                <div className="w-full bg-gray-100 py-8 flex justify-center">
                  <div className="relative max-w-4xl w-full">
                    <button
                  onClick={prevPracticeArea}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow border border-slate-200 hover:bg-slate-100 transition"
                  style={{ width: 44, height: 44 }}
                  aria-label="Previous Practice Areas"
                >
                  <span className="text-slate-600 text-2xl">‹</span>
                </button>
                <div className="overflow-hidden">
                  <div
                    ref={practiceTrackRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      width: `${practiceAreas.length * 260}px`,
                      transform: `translateX(-${currentPracticeAreaIndex * 260}px)`
                    }}
                  >
                    {practiceAreas.map((area: any) => (
                      <Link key={area.id} href={`/practice/${area.slug}`} className="group block bg-white rounded-2xl shadow-xl border border-slate-100 px-8 py-10 text-center hover:shadow-2xl transition-all duration-200 min-w-[240px] max-w-[260px] mx-2">
                        <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow">
                          <Briefcase size={32} color="#fff" />
                        </div>
                        <div className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{area.title}</div>
                        <div className="text-slate-500 text-sm">{area.description?.slice(0, 80)}{area.description?.length > 80 ? '...' : ''}</div>
                      </Link>
                    ))}
                  </div>
                </div>
                <button
                  onClick={nextPracticeArea}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow border border-slate-200 hover:bg-slate-100 transition"
                  style={{ width: 44, height: 44 }}
                  aria-label="Next Practice Areas"
                >
                  <span className="text-slate-600 text-2xl">›</span>
                </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-200 mb-8 text-lg">Our experienced attorneys are ready to help you with your legal needs. Contact us today for a free consultation.</p>
            <a href="/contact" className="inline-block bg-yellow-400 text-slate-900 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-150">Get Free Consultation</a>
          </div>
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
        <section className="relative w-full flex items-center justify-center rounded-b-3xl shadow-md mb-4 overflow-hidden" style={{ minHeight: '200px', height: '200px' }}>
          <Image
            src="/photos/bannernewwebsite.png"
            alt="Rovner Law Banner"
            fill
            style={{ objectFit: 'cover', width: '100%', height: '200px' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-purple-900/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white px-4 w-full">
            <h1 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>Rovner, Allen, Rovner And Sigman</h1>
            <p className="text-sm mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>Personal Injury & Criminal Defense</p>
            <div className="flex justify-center gap-2">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">150+ Years Combined Experience</span>
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
