"use client";

import Link from 'next/link';
import { SmoothImage } from '@/components/SmoothImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useState, useRef, useEffect } from 'react';

interface Attorney {
  id: string;
  name: string;
  title?: string | null;
  bio?: string | null;
  image?: string | null;
  email?: string | null;
  phone?: string | null;
  education?: string | null;
  experience?: string | null;
  specialties?: string | null;
  active?: boolean;
  order?: number;
}

// Per Alec: don't show Education/Experience on these two bios. Matches the
// existing by-name pattern below that hides the "Contact" button for
// Robert A. Rovner. If the underlying data should change instead of just its
// display, edit the record in the admin CMS — this only hides the fields here.
const HIDE_EDUCATION_EXPERIENCE_FOR = new Set(['Robert A. Rovner', 'Steven L. Rovner']);

export default function AttorneysClient({ attorneys }: { attorneys: Attorney[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Track expanded bios by attorney id
  const [expanded, setExpanded] = useState<{ [id: string]: boolean }>({});
  // Track which bios overflow (for conditional 'View More')
  const [overflowing, setOverflowing] = useState<{ [id: string]: boolean }>({});
  // Refs for each bio
  const bioRefs = useRef<{ [id: string]: HTMLDivElement | null }>({});

  // Only show 'View More' if bio is over a certain length
  const BIO_LENGTH_LIMIT = 350;

  useEffect(() => {
    // TEMP: Show 'View More' for any bio over the length limit
    const newOverflowing: { [id: string]: boolean } = {};
    attorneys.forEach((attorney) => {
      newOverflowing[attorney.id] = (attorney.bio?.length ?? 0) > BIO_LENGTH_LIMIT;
    });
    setOverflowing(newOverflowing);
  }, [attorneys, expanded]);

  // Recalculate on window resize and after images load
  useEffect(() => {
    const handleResize = () => {
      const newOverflowing: { [id: string]: boolean } = {};
      attorneys.forEach((attorney) => {
        newOverflowing[attorney.id] = (attorney.bio?.length ?? 0) > BIO_LENGTH_LIMIT;
      });
      setOverflowing(newOverflowing);
    };
    window.addEventListener('resize', handleResize);
    // Also recalc after all images load
    const imgs = Array.from(document.images);
    let loaded = 0;
    imgs.forEach(img => {
      if (img.complete) loaded++;
      else img.addEventListener('load', handleResize);
    });
    if (loaded === imgs.length) handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
      imgs.forEach(img => img.removeEventListener('load', handleResize));
    };
  }, [attorneys, expanded]);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-12">
      {/* Desktop Header/Nav */}
      <div className="hidden lg:block w-full">
        <Header currentPage="attorneys" />
      </div>
      {/* Mobile Header/Nav */}
      <div className="block lg:hidden w-full">
        <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>

      {/* Desktop Attorney Cards */}
      <div className="hidden lg:block">
        {/* Hero Banner Section */}
        <section className="relative w-full h-64 md:h-80 overflow-hidden">
          <SmoothImage
            src="/photos/banner-sign-hero.webp"
            alt="Rovner Law Offices — our team"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-2">Our Team</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Our Attorneys</h1>
            <p className="text-slate-200 text-lg">Experienced advocates fighting for your rights</p>
          </div>
        </section>
        {/* Attorneys List — responsive grid.
            This was a single column of full-width horizontal cards, so ten
            attorneys meant scrolling through ~6,000px of vertical space on a
            1440px-wide screen that was otherwise empty on both sides. A grid
            uses the width the desktop layout actually has. */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-14">
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">Our Team</p>
            <h2 className="font-serif text-3xl font-bold text-slate-900">Meet Our Attorneys</h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">Dedicated legal professionals committed to your case</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney) => (
              <article
                key={attorney.id}
                className="relative flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-slate-700 via-slate-500 to-amber-500" />
                <div className="relative w-full aspect-[4_/_5] bg-slate-100">
                  <SmoothImage
                    src={attorney.image || '/photos/default-headshot.svg'}
                    alt={attorney.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <header className="mb-4">
                    <h3 className="font-serif text-xl font-bold text-slate-900 tracking-tight">{attorney.name}</h3>
                    {attorney.title && (
                      <p className="text-slate-500 text-sm mt-1">{attorney.title}</p>
                    )}
                  </header>
                  {attorney.bio && (
                    <div className="mb-4 relative">
                      <div
                        ref={el => { bioRefs.current[attorney.id] = el; }}
                        className="text-slate-700 text-[14px] leading-relaxed whitespace-pre-line transition-all duration-300"
                        style={{
                          maxHeight: expanded[attorney.id] ? 'none' : '84px',
                          overflow: expanded[attorney.id] ? 'visible' : 'hidden',
                        }}
                      >
                        {attorney.bio}
                      </div>
                      {overflowing[attorney.id] && (
                        <button
                          type="button"
                          onClick={() => setExpanded(e => ({...e, [attorney.id]: !e[attorney.id]}))}
                          className="mt-1.5 inline-flex items-center text-sm font-semibold text-slate-700 hover:text-amber-700 transition-colors"
                        >
                          {expanded[attorney.id] ? 'View less ↑' : 'View more ↓'}
                        </button>
                      )}
                    </div>
                  )}
                  <dl className="grid grid-cols-1 gap-y-1.5 mb-5 text-[13px] text-slate-700 leading-relaxed">
                    {attorney.specialties && (
                      <div>
                        <dt className="inline font-semibold text-slate-900">Specialties: </dt>
                        <dd className="inline">{Array.isArray(attorney.specialties) ? attorney.specialties.join(', ') : attorney.specialties}</dd>
                      </div>
                    )}
                    {attorney.education && !HIDE_EDUCATION_EXPERIENCE_FOR.has(attorney.name) && (
                      <div>
                        <dt className="inline font-semibold text-slate-900">Education: </dt>
                        <dd className="inline">{attorney.education}</dd>
                      </div>
                    )}
                    {attorney.experience && !HIDE_EDUCATION_EXPERIENCE_FOR.has(attorney.name) && (
                      <div>
                        <dt className="inline font-semibold text-slate-900">Experience: </dt>
                        <dd className="inline">{attorney.experience}</dd>
                      </div>
                    )}
                    {attorney.email && (
                      <div className="truncate">
                        <dt className="inline font-semibold text-slate-900">Email: </dt>
                        <dd className="inline"><a href={`mailto:${attorney.email}`} className="text-slate-700 hover:text-amber-700 underline-offset-2 hover:underline">{attorney.email}</a></dd>
                      </div>
                    )}
                    {attorney.phone && (
                      <div>
                        <dt className="inline font-semibold text-slate-900">Phone: </dt>
                        <dd className="inline"><a href={`tel:${attorney.phone}`} className="text-slate-700 hover:text-amber-700">{attorney.phone}</a></dd>
                      </div>
                    )}
                  </dl>
                  {attorney.name !== 'Robert A. Rovner' && (
                    <div className="mt-auto pt-1">
                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-amber-600 text-white font-semibold text-sm uppercase tracking-wider rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
                      >
                        Contact {attorney.name.split(' ')[0]}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* Why Choose Our Team */}
        <section className="w-full bg-slate-50 mt-12 py-16">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-2">Why Choose Our Legal Team?</h2>
              <div className="h-1 w-14 bg-amber-500 rounded-full mb-6 mx-auto md:mx-0" />
              <p className="text-lg text-slate-600 mb-6 max-w-xl mx-auto md:mx-0">
                Our team of lawyers and paralegals, investigators, and experts, all with hundreds of
                years of combined experience, put us at the top of the Philadelphia area legal
                profession.
              </p>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 text-left max-w-xl mx-auto md:mx-0">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">Unmatched Experience &amp; Results</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2"><span aria-hidden="true">✓</span> Hundreds of years of combined legal experience</li>
                  <li className="flex gap-2"><span aria-hidden="true">✓</span> Proven track record of success</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-7 text-center shadow-sm">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Schedule a Consultation</h3>
              <p className="text-slate-600 text-sm mb-5">
                Ready to discuss your case with one of our experienced attorneys?
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-md transition-colors shadow-sm"
              >
                Get Free Consultation
              </Link>
              <p className="text-slate-400 text-xs mt-3">No fee unless we win your case</p>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Attorney Cards */}
      <div className="block lg:hidden w-full px-2 pt-4 pb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Our Legal Team</h2>
        <div className="flex flex-col gap-4">
          {attorneys.map((attorney) => (
            <div key={attorney.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center border border-orange-100">
              <SmoothImage
                src={attorney.image || '/photos/default-headshot.svg'}
                alt={attorney.name}
                width={120}
                height={160}
                className="rounded-lg object-cover mb-2"
              />
              <div className="text-lg font-bold text-slate-900 mb-1 text-center">{attorney.name}</div>
              <div className="text-sm text-orange-600 mb-2 text-center">{attorney.title}</div>
              {attorney.bio && (
                <div style={{position:'relative',width:'100%'}}>
                  <div
                    ref={el => { bioRefs.current[attorney.id] = el; }}
                    style={{
                      fontSize:'0.95rem',color:'#444',marginBottom:'0.7rem',textAlign:'center',lineHeight:1.6,letterSpacing:'0.01em',
                      maxHeight: expanded[attorney.id] ? 'none' : '72px',
                      overflow: expanded[attorney.id] ? 'visible' : 'hidden',
                      transition: 'max-height 0.3s',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {attorney.bio}
                  </div>
                  {overflowing[attorney.id] && (
                    <button
                      style={{
                        position:'absolute',right:0,bottom:0,background:'rgba(255,255,255,0.95)',color:'#1976d2',border:'none',fontWeight:600,fontSize:'0.95rem',cursor:'pointer',padding:'0.2rem 0.7rem',borderRadius:'8px',boxShadow:'0 1px 4px rgba(20,28,38,0.07)',zIndex:5
                      }}
                      onClick={() => setExpanded(e => ({...e, [attorney.id]: !e[attorney.id]}))}
                    >
                      {expanded[attorney.id] ? 'View Less' : 'View More'}
                    </button>
                  )}
                </div>
              )}
              {attorney.specialties && (
                <div className="text-xs text-orange-700 mb-1 text-center"><strong>Specialties:</strong> {Array.isArray(attorney.specialties) ? attorney.specialties.join(', ') : attorney.specialties}</div>
              )}
              {attorney.email && (
                <div className="text-xs text-gray-500 mb-1 text-center"><strong>Email:</strong> {attorney.email}</div>
              )}
              {attorney.phone && (
                <div className="text-xs text-gray-500 mb-2 text-center"><strong>Phone:</strong> {attorney.phone}</div>
              )}
              {attorney.name !== 'Robert A. Rovner' && (
                <Link href="/contact" className="w-full bg-slate-800 text-white font-bold rounded-lg py-2 text-center text-base shadow hover:bg-slate-700 transition mt-2">Contact</Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
} 