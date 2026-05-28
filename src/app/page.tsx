"use client";

import Link from 'next/link';
import { SmoothImage } from '@/components/SmoothImage';
import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';
import { Phone, Users, Briefcase, Mail, DollarSign, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

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

export default function HomePage() {
  const { firmName } = useFirmName();
  const [settlements, setSettlements] = useState<Settlement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [practiceAreas, setPracticeAreas] = useState<any[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSettlementIndex, setCurrentSettlementIndex] = useState(0);
  const [currentPracticeAreaIndex, setCurrentPracticeAreaIndex] = useState(0);
  const settlementsScrollRef = useRef<HTMLDivElement>(null);
  const practiceAreasScrollRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, dir: 'left' | 'right') => {
    if (!ref.current) return;
    const card = ref.current.querySelector<HTMLElement>('[data-carousel-card]');
    const step = card ? card.offsetWidth + 24 : 320;
    ref.current.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  useEffect(() => {
    fetch('/api/settlements')
      .then(res => res.json())
      .then((data: Settlement[]) => {
        setSettlements(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load settlements');
        setLoading(false);
      });
    fetch('/api/practice-areas')
      .then(res => res.json())
      .then((data) => setPracticeAreas(data));
  }, []);

  const nextSettlement = () =>
    setCurrentSettlementIndex(prev => (prev + 1) % Math.max(settlements.length, 1));
  const prevSettlement = () =>
    setCurrentSettlementIndex(prev =>
      (prev - 1 + Math.max(settlements.length, 1)) % Math.max(settlements.length, 1)
    );
  const nextPracticeArea = () =>
    setCurrentPracticeAreaIndex(prev => (prev + 1) % Math.max(practiceAreas.length, 1));
  const prevPracticeArea = () =>
    setCurrentPracticeAreaIndex(prev =>
      (prev - 1 + Math.max(practiceAreas.length, 1)) % Math.max(practiceAreas.length, 1)
    );

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
        {/* Hero Banner - Cinematic */}
        <section className="relative w-full aspect-[4/1] min-h-[360px] overflow-hidden bg-slate-900">
          <SmoothImage
            src="/photos/banner-sign-hero.webp"
            alt="Rovner Law Offices — 175 Bustleton Pike, Feasterville-Trevose, PA"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/55 via-slate-900/75 to-slate-900/90 z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6 pointer-events-none">
            <div className="pointer-events-auto">
              <p className="text-amber-200/90 text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">Est. 1980 · Philadelphia</p>
              <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-3 tracking-tight leading-[1.1] max-w-4xl drop-shadow-lg">
                {firmName}
              </h1>
              <p className="text-base md:text-lg text-slate-200 font-medium mb-6">Personal Injury &amp; Civil Litigation</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm uppercase tracking-wider rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Free Consultation
                </a>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <span className="block text-xl md:text-2xl font-bold text-amber-400 leading-none">150+</span>
                    <span className="text-[10px] text-slate-300 font-medium uppercase tracking-wider mt-1 block">Years Experience</span>
                  </div>
                  <div className="w-px h-8 bg-slate-600" aria-hidden="true" />
                  <div className="text-center">
                    <span className="block text-xl md:text-2xl font-bold text-amber-400 leading-none">25,000+</span>
                    <span className="text-[10px] text-slate-300 font-medium uppercase tracking-wider mt-1 block">Cases Won</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Settlements Section - Grid */}
        <section className="w-full py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-14 text-center">
              <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">Proven Results</p>
              <h2 className="font-serif text-4xl font-bold text-slate-900 tracking-tight">Recent Verdicts &amp; Settlements</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">Decades of experience translating into life-changing recoveries for our clients</p>
            </div>
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-200/80 p-8 animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-slate-200 mb-5" />
                    <div className="h-8 bg-slate-200 rounded w-32 mb-3" />
                    <div className="h-4 bg-slate-100 rounded w-24 mb-3" />
                    <div className="h-4 bg-slate-100 rounded w-full" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-8 text-red-500">{error}</div>
            ) : settlements.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No settlements found.</div>
            ) : (
              <div className="relative">
                {settlements.length > 3 && (
                  <button
                    type="button"
                    onClick={() => scrollCarousel(settlementsScrollRef, 'left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-200 hover:bg-slate-50 hover:shadow-lg transition-all"
                    aria-label="Previous settlements"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-700" />
                  </button>
                )}
                <div
                  ref={settlementsScrollRef}
                  className="overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className="flex gap-6">
                    {settlements.map((settlement: Settlement) => (
                      <article
                        data-carousel-card
                        key={settlement.id}
                        className="group bg-white rounded-2xl border border-slate-200/80 p-8 hover:shadow-lg hover:border-amber-500/40 transition-all duration-200 flex-shrink-0 w-[320px] snap-start"
                      >
                        <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 group-hover:bg-amber-100 transition-colors">
                          <DollarSign size={22} className="text-amber-700" />
                        </div>
                        <p className="font-serif text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                          ${settlement.amount.toLocaleString()}
                        </p>
                        <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">
                          {settlement.caseType}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">{settlement.title}</p>
                      </article>
                    ))}
                  </div>
                </div>
                {settlements.length > 3 && (
                  <button
                    type="button"
                    onClick={() => scrollCarousel(settlementsScrollRef, 'right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-200 hover:bg-slate-50 hover:shadow-lg transition-all"
                    aria-label="Next settlements"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Practice Areas Section - Grid */}
        <section className="w-full py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-14 text-center">
              <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">Legal Expertise</p>
              <h2 className="font-serif text-4xl font-bold text-slate-900 tracking-tight">Our Practice Areas</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">Comprehensive representation across Pennsylvania and New Jersey</p>
            </div>
            {practiceAreas.length === 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="bg-white rounded-xl border border-slate-200 p-7 animate-pulse">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 mb-4" />
                    <div className="h-5 bg-slate-200 rounded w-2/3 mb-3" />
                    <div className="h-3 bg-slate-100 rounded w-full mb-2" />
                    <div className="h-3 bg-slate-100 rounded w-5/6" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative">
                {practiceAreas.length > 4 && (
                  <button
                    type="button"
                    onClick={() => scrollCarousel(practiceAreasScrollRef, 'left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-200 hover:bg-slate-50 hover:shadow-lg transition-all"
                    aria-label="Previous practice areas"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-700" />
                  </button>
                )}
                <div
                  ref={practiceAreasScrollRef}
                  className="overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className="flex gap-6">
                    {practiceAreas.map((area) => (
                      <Link
                        data-carousel-card
                        key={area.id}
                        href={`/practice/${area.slug}`}
                        className="group flex flex-col bg-white rounded-xl border border-slate-200 p-7 hover:shadow-lg hover:border-amber-500/60 hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 w-[260px] snap-start"
                      >
                        <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 group-hover:bg-amber-50 transition-colors">
                          <Briefcase size={22} className="text-slate-700 group-hover:text-amber-700 transition-colors" />
                        </div>
                        <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-amber-700 transition-colors">
                          {area.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                          {area.description?.slice(0, 100)}{(area.description?.length ?? 0) > 100 ? '…' : ''}
                        </p>
                        <span className="text-amber-700 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn more <span aria-hidden="true">→</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                {practiceAreas.length > 4 && (
                  <button
                    type="button"
                    onClick={() => scrollCarousel(practiceAreasScrollRef, 'right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-200 hover:bg-slate-50 hover:shadow-lg transition-all"
                    aria-label="Next practice areas"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section - Refined */}
        <section className="w-full py-24 bg-slate-900">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Ready to Discuss Your Case?</h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Our experienced attorneys offer free, confidential consultations. 
              No recovery, no fee. Contact us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-slate-800 text-slate-100 font-semibold rounded-md hover:bg-slate-700 transition-all duration-200 shadow-sm">
                Free Consultation
              </a>
              <a href="tel:215-259-5958" className="inline-flex items-center justify-center px-10 py-4 bg-white/5 text-slate-200 font-semibold rounded-md border border-slate-400/40 hover:bg-white/10 transition-all duration-200">
                888-DIAL-LAW
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links - Refined */}
        <section className="w-full py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="font-serif text-2xl font-bold text-slate-900">Quick Access</h2>
              <p className="text-slate-500 mt-1">Find what you need</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/contact" className="group flex flex-col items-center p-8 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 group-hover:bg-slate-200 mb-4">
                  <Phone className="w-6 h-6 text-slate-600 group-hover:text-slate-700" />
                </span>
                <h4 className="font-semibold text-slate-900 mb-1">Free Consultation</h4>
                <p className="text-sm text-slate-500 text-center">Expert advice at no cost</p>
              </Link>
              <Link href="/attorneys" className="group flex flex-col items-center p-8 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 group-hover:bg-slate-200 mb-4">
                  <Users className="w-6 h-6 text-slate-600 group-hover:text-slate-700" />
                </span>
                <h4 className="font-semibold text-slate-900 mb-1">Our Attorneys</h4>
                <p className="text-sm text-slate-500 text-center">Meet our legal team</p>
              </Link>
              <Link href="/practice" className="group flex flex-col items-center p-8 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 group-hover:bg-slate-200 mb-4">
                  <Briefcase className="w-6 h-6 text-slate-600 group-hover:text-slate-700" />
                </span>
                <h4 className="font-semibold text-slate-900 mb-1">Practice Areas</h4>
                <p className="text-sm text-slate-500 text-center">Comprehensive services</p>
              </Link>
              <Link href="/contact" className="group flex flex-col items-center p-8 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 group-hover:bg-slate-200 mb-4">
                  <Mail className="w-6 h-6 text-slate-600 group-hover:text-slate-700" />
                </span>
                <h4 className="font-semibold text-slate-900 mb-1">Contact Us</h4>
                <p className="text-sm text-slate-500 text-center">We're here to help</p>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden w-full bg-slate-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <SmoothImage
            src="/photos/banner-sign-hero.webp"
            alt="Rovner Law Offices"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white px-4">
            <p className="text-amber-200/90 text-[10px] font-semibold uppercase tracking-[0.2em] mb-1">Est. 1980</p>
            <h1 className="font-serif text-2xl font-bold mb-0.5 leading-tight">{firmName}</h1>
            <p className="text-slate-200 text-xs mb-3">Personal Injury & Civil Litigation</p>
            <div className="flex gap-2">
              <span className="bg-amber-600/90 text-white px-2.5 py-1 rounded text-xs font-semibold">150+ years of experience</span>
              <Link href="/contact" className="bg-white/20 text-white px-2.5 py-1 rounded text-xs font-medium backdrop-blur-sm hover:bg-white/30 transition-colors">Free Consultation</Link>
            </div>
          </div>
        </section>
        {/* Mobile Settlements Carousel */}
        <section className="px-4 py-4">
          <h3 className="text-lg font-bold mb-3 text-slate-800">Recent Results</h3>
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
                      idx === currentSettlementIndex ? 'bg-orange-600' : 'bg-gray-300'
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
          <h3 className="text-lg font-bold mb-2 text-slate-800">Practice Areas</h3>
            {practiceAreas.length === 0 ? (
            <div className="flex justify-center py-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full max-w-md animate-pulse">
                <div className="h-48 bg-slate-200" />
                <div className="p-4 space-y-2">
                  <div className="h-6 bg-slate-200 rounded w-3/4 mx-auto" />
                  <div className="h-4 bg-slate-100 rounded w-full" />
                </div>
              </div>
            </div>
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
                    <SmoothImage
                      src={practiceAreas[currentPracticeAreaIndex]?.image || '/photos/personal-injury.jpg'}
                      alt={practiceAreas[currentPracticeAreaIndex]?.title || 'Practice Area'}
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center 30%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-4 w-full bg-white">
                    <span className="font-bold text-slate-800 text-xl leading-tight block px-2 text-center" style={{lineHeight:'1.2', textShadow: 'none'}}>
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
                      index === currentPracticeAreaIndex ? 'bg-orange-600' : 'bg-gray-300'
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
          <h3 className="font-serif text-lg font-bold mb-3 text-slate-900">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <a href="/attorneys" className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center hover:shadow-md hover:border-slate-300 transition">
              <Users className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <div className="font-semibold text-slate-800 text-sm">Our Attorneys</div>
            </a>
            <a href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center hover:shadow-md hover:border-slate-300 transition">
              <Briefcase className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <div className="font-semibold text-slate-800 text-sm">Practice Areas</div>
            </a>
            <a href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center hover:shadow-md hover:border-slate-300 transition">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <div className="font-semibold text-slate-800 text-sm">Locations</div>
            </a>
            <a href="/contact" className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center hover:shadow-md hover:border-slate-300 transition">
              <Phone className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <div className="font-semibold text-slate-800 text-sm">Contact Us</div>
            </a>
          </div>
        </section>

        {/* Mobile CTA */}
        <section className="px-4 pt-4 pb-6">
          <a href="/contact" className="block w-full bg-slate-800 text-slate-100 font-semibold rounded-xl py-4 text-center text-base shadow-sm hover:bg-slate-700 transition flex items-center justify-center gap-2">
            <Mail size={20} />
            Free Consultation
          </a>
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
