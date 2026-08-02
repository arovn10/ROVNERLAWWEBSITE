"use client";

import Link from 'next/link';
import { SmoothImage } from '@/components/SmoothImage';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';
import { formatSettlementAmount } from '@/lib/utils';
import { Phone, Users, Briefcase, Mail, DollarSign, MapPin } from 'lucide-react';

type Settlement = {
  id: string;
  title: string;
  description: string;
  amount: number;
  date: string;
  caseType: string;
};

interface PracticeAreaItem {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  image?: string | null;
  banner?: string | null;
  color?: string | null;
  imageUrl?: string | null;
}

/**
 * Client shell for the homepage. Data arrives as props from the server
 * component in page.tsx — this used to fetch /api/settlements and
 * /api/practice-areas in a useEffect, so the server could only prerender a
 * loading skeleton and the static hero text. On the single most important
 * page on the site, none of the settlements or practice areas reached the
 * HTML that search engines and AI crawlers see.
 */
export default function HomeClient({
  settlements,
  practiceAreas,
}: {
  settlements: Settlement[];
  practiceAreas: PracticeAreaItem[];
}) {
  const { firmName } = useFirmName();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSettlementIndex, setCurrentSettlementIndex] = useState(0);
  const [currentPracticeAreaIndex, setCurrentPracticeAreaIndex] = useState(0);

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
              {/* The firm name stays the dominant visual element, but it is the brand,
                  not the page's subject — so the <h1> is the line that says what this
                  page is about. Swap the two if you'd rather lead with the name. */}
              <p className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-3 tracking-tight leading-[1.1] max-w-4xl drop-shadow-lg">
                {firmName}
              </p>
              <h1 className="text-base md:text-lg text-slate-200 font-medium mb-6">
                Personal Injury &amp; Civil Litigation Attorneys in Philadelphia
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link                   href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm uppercase tracking-wider rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Free Consultation
                </Link>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <span className="block text-xl md:text-2xl font-bold text-amber-400 leading-none">150+</span>
                    {/* Qualified deliberately: PA RPC 7.1 forbids misleading claims about a
                        lawyer's services, and "150+ Years Experience" read literally is
                        impossible for a firm established in 1980. */}
                    <span className="text-[10px] text-slate-300 font-medium uppercase tracking-wider mt-1 block">Years Combined Experience</span>
                  </div>
                  <div className="w-px h-8 bg-slate-600" aria-hidden="true" />
                  <div className="text-center">
                    <span className="block text-xl md:text-2xl font-bold text-amber-400 leading-none">25,000+</span>
                    {/* "Cases Won" is an outcome claim the firm would have to substantiate.
                        "Clients Represented" is verifiable and says the same thing about scale. */}
                    <span className="text-[10px] text-slate-300 font-medium uppercase tracking-wider mt-1 block">Clients Represented</span>
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
              {/* Past-results disclaimer sits with the figures it qualifies, rather than
                  only on /disclaimer where nobody reading these numbers will see it. */}
              <p className="text-slate-400 text-xs mt-4 max-w-2xl mx-auto leading-relaxed">
                Prior results do not guarantee a similar outcome. Every case is decided on its own
                facts. See our <Link href="/disclaimer" className="underline hover:text-slate-600">full disclaimer</Link>.
              </p>
            </div>
            {settlements.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No settlements found.</div>
            ) : (
              /* Grid, not a carousel: a carousel hid all but the first three
                 recoveries behind a click, and off-screen content is weaker for
                 crawlers. This puts every figure in the initial HTML. */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {settlements.slice(0, 9).map((settlement: Settlement) => (
                  <article
                    key={settlement.id}
                    className="group bg-white rounded-2xl border border-slate-200/80 p-8 hover:shadow-lg hover:border-amber-500/40 transition-all duration-200"
                  >
                    <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 group-hover:bg-amber-100 transition-colors">
                      <DollarSign size={22} className="text-amber-700" />
                    </div>
                    <p className="font-serif text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                      {formatSettlementAmount(settlement.amount)}
                    </p>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">
                      {settlement.caseType}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">{settlement.title}</p>
                  </article>
                ))}
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
              <div className="text-center py-8 text-gray-500">No practice areas found.</div>
            ) : (
              /* All 13 areas as a grid, not four visible behind a carousel —
                 every one of these links is worth having crawlable from the
                 homepage. */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {practiceAreas.map((area) => (
                  <Link
                    key={area.id}
                    href={`/practice/${area.slug}`}
                    className="group flex flex-col bg-white rounded-xl border border-slate-200 p-7 hover:shadow-lg hover:border-amber-500/60 hover:-translate-y-0.5 transition-all duration-200"
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
              <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-slate-800 text-slate-100 font-semibold rounded-md hover:bg-slate-700 transition-all duration-200 shadow-sm">
                Free Consultation
              </Link>
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
            <p className="font-serif text-2xl font-bold mb-0.5 leading-tight">{firmName}</p>
            <p className="text-slate-200 text-xs mb-3">Personal Injury & Civil Litigation</p>
            <div className="flex gap-2">
              <span className="bg-amber-600/90 text-white px-2.5 py-1 rounded text-xs font-semibold">150+ years combined experience</span>
              <Link href="/contact" className="bg-white/20 text-white px-2.5 py-1 rounded text-xs font-medium backdrop-blur-sm hover:bg-white/30 transition-colors">Free Consultation</Link>
            </div>
          </div>
        </section>
        {/* Mobile Settlements Carousel */}
        <section className="px-4 py-4">
          <h3 className="text-lg font-bold mb-3 text-slate-800">Recent Results</h3>
          {settlements.length === 0 ? (
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
                  {/* amber-700, matching the desktop settlement cards' money accent
                      rather than the green this used to be — one accent colour, not two */}
                  <div className="text-amber-700 font-bold text-2xl mb-1">{formatSettlementAmount(settlements[currentSettlementIndex]?.amount ?? 0)}</div>
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
                      idx === currentSettlementIndex ? 'bg-slate-800' : 'bg-gray-300'
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
                      index === currentPracticeAreaIndex ? 'bg-slate-800' : 'bg-gray-300'
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
            <Link href="/attorneys" className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center hover:shadow-md hover:border-slate-300 transition">
              <Users className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <div className="font-semibold text-slate-800 text-sm">Our Attorneys</div>
            </Link>
            <Link href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center hover:shadow-md hover:border-slate-300 transition">
              <Briefcase className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <div className="font-semibold text-slate-800 text-sm">Practice Areas</div>
            </Link>
            <Link href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center hover:shadow-md hover:border-slate-300 transition">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <div className="font-semibold text-slate-800 text-sm">Locations</div>
            </Link>
            <Link href="/contact" className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center hover:shadow-md hover:border-slate-300 transition">
              <Phone className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <div className="font-semibold text-slate-800 text-sm">Contact Us</div>
            </Link>
          </div>
        </section>

        {/* Mobile CTA */}
        <section className="px-4 pt-4 pb-6">
          <Link href="/contact" className="block w-full bg-slate-800 text-slate-100 font-semibold rounded-xl py-4 text-center text-base shadow-sm hover:bg-slate-700 transition flex items-center justify-center gap-2">
            <Mail size={20} />
            Free Consultation
          </Link>
        </section>
      </div>

      {/*
        Footer, shared by both trees rather than duplicated.
        It used to live only inside the mobile-only wrapper above, which meant
        the entire footer — nav links, contact info, the memberships list, and
        the fixed "Free Consultation" tab — never rendered on desktop at all.
        The desktop wrapper is `hidden lg:block`; once it hides at lg and up,
        an inner `<Footer />` placed only in the mobile (`block lg:hidden`)
        tree has zero size at any viewport, because a hidden ancestor collapses
        it regardless of the footer's own responsive classes.
      */}
      <Footer />
    </div>
  );
}

