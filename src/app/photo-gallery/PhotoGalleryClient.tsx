"use client";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Mail } from 'lucide-react';

// Archive type definition
interface Archive {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
}

// Lightbox Component
function Lightbox({ src, desc, onClose }: { src: string; desc?: string; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90" onClick={onClose}>
      <div className="relative max-w-4xl w-full mx-4" onClick={e => e.stopPropagation()}>
        <button
          className="absolute -top-4 -right-4 bg-white bg-opacity-90 rounded-full p-3 shadow-lg hover:bg-opacity-100 transition z-10"
          onClick={onClose}
          aria-label="Close"
        >
          <span style={{fontSize:'1.5rem',fontWeight:700,lineHeight:1}}>&times;</span>
        </button>
        <Image
          src={src}
          alt={desc || ''}
          width={900}
          height={700}
          className="w-full h-auto rounded-xl shadow-2xl border-4 border-white"
          style={{maxHeight:'85vh',objectFit:'contain',background:'#fff'}}
        />
        {desc && (
          <div className="mt-4 text-center text-white text-lg bg-black bg-opacity-60 rounded-lg p-4 max-w-2xl mx-auto">
            {desc}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

export default function PhotoGalleryClient({ archives }: { archives: Archive[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{src: string, desc?: string} | null>(null);
  const [loading] = useState(false);

  // Get unique categories from the database
  const categories = [...new Set(archives.map(archive => archive.category))];

  if (loading) {
    return (
      <div>
        {/* Desktop Header/Nav */}
        <div className="hidden lg:block w-full">
          <Header currentPage="photo-gallery" />
        </div>
        {/* Mobile Header/Nav */}
        <div className="block lg:hidden w-full">
          <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
          <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </div>
        <div className="py-16 bg-[var(--gray-50)]">
          <div style={{maxWidth:'1200px',margin:'0 auto',paddingLeft:'2.5rem',paddingRight:'2.5rem'}}>
            <div className="text-center text-lg font-semibold text-gray-700">Loading archives...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      {/* Desktop Header/Nav */}
      <div className="hidden lg:block w-full">
        <Header currentPage="photo-gallery" />
      </div>
      {/* Mobile Header/Nav */}
      <div className="block lg:hidden w-full">
        <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block">
        {/* Hero/Intro Section */}
        <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-amber-50/40 py-16 mb-4">
          <div className="max-w-7xl mx-auto px-8 flex items-center gap-12">
            <div className="flex-shrink-0">
              <Image
                src="/photos/Attorneys/rrovner.png"
                alt="Senator Bob Rovner"
                width={220}
                height={280}
                className="rounded-2xl shadow-xl object-cover"
                style={{width:220,height:280}}
              />
            </div>
            <div>
              <p className="text-amber-700 text-sm font-semibold uppercase tracking-widest mb-2">A Legacy of Service</p>
              <h1 className="font-serif text-5xl font-bold text-slate-900 tracking-tight mb-4">The Bob Rovner Archives</h1>
              <div className="h-1 w-16 rounded bg-amber-500 mb-5" />
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Explore the remarkable journey of Senator Bob Rovner — attorney, legislator, broadcaster, and community leader. These archives chronicle a lifetime of service, achievement, and unforgettable moments with presidents, politicians, and icons of our time.
              </p>
            </div>
          </div>
        </section>

        {/* Page Content */}
        <section className="py-16 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-8">
            {categories.map((cat, catIdx) => {
              let intro = '';
              if (cat === 'Presidents') intro = 'Moments with U.S. Presidents — snapshots of history and leadership.';
              else if (cat === 'Senate & Politicians') intro = 'Encounters with influential lawmakers and public servants.';
              else if (cat === 'Celebrities') intro = 'A lifetime among icons of music, film, and culture.';
              else if (cat === 'Archives') intro = 'Personal memories, rare documents, and the legacy of a public life.';
              const items = archives.filter(archive => archive.category === cat);
              return (
                <div key={cat} className={catIdx > 0 ? 'mt-20' : ''}>
                  <div className="mb-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 tracking-tight mb-2">{cat}</h2>
                    <div className="h-1 w-12 rounded bg-amber-500 mb-3" />
                    {intro && <p className="text-slate-500 max-w-2xl">{intro}</p>}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {items.map((archive, idx) => (
                      <button
                        key={archive.id + idx}
                        type="button"
                        onClick={() => setLightbox({src: archive.imageUrl, desc: archive.title})}
                        className="group bg-white rounded-xl overflow-hidden border border-slate-200/70 hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 text-left"
                      >
                        <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                          <Image
                            src={archive.imageUrl}
                            alt={archive.title || 'Archive photo'}
                            fill
                            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5">
                          {archive.title && (
                            <h3 className="font-semibold text-slate-900 leading-snug mb-1 line-clamp-2 group-hover:text-amber-700 transition-colors">
                              {archive.title}
                            </h3>
                          )}
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{cat}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-orange-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-800 to-orange-600" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <p className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>The Bob Rovner Archives</p>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>A lifetime of service and achievement</p>
          </div>
        </section>

        {/* Mobile Bob Rovner Snippet */}
        <section className="px-4 py-4">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 mb-4">
            <div className="flex items-center gap-4 mb-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/photos/Attorneys/rrovner.png"
                  alt="Senator Bob Rovner"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Senator Bob Rovner</h2>
                <p className="text-sm text-gray-600">Attorney, Legislator, Broadcaster</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Explore the remarkable journey of Senator Bob Rovner, attorney, legislator, broadcaster, and community leader. These archives chronicle a lifetime of service, achievement, and unforgettable moments with presidents, politicians, and icons of our time.
            </p>
          </div>
        </section>

        {/* Mobile Photo Gallery */}
        <section className="px-4 py-4">
          {categories.map((cat) => (
            <div key={cat} className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-slate-900">{cat}</h3>
                <div className="h-1 w-8 bg-yellow-500 rounded"></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {archives.filter(archive => archive.category === cat).map((archive, idx) => (
                  <div
                    key={archive.id + idx}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                    onClick={() => setLightbox({src: archive.imageUrl, desc: archive.title})}
                  >
                    <div className="relative h-32">
                      <Image
                        src={archive.imageUrl}
                        alt={archive.title || 'Archive photo'}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      {archive.title && (
                        <h4 className="font-semibold text-slate-900 text-sm mb-1 line-clamp-2">
                          {archive.title}
                        </h4>
                      )}
                      <p className="text-xs text-yellow-600 font-medium">{cat}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Mobile Quick Access */}
        <section className="px-4 pt-4 pb-2">
          <h3 className="text-lg font-bold mb-3 text-slate-900">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Link href="/attorneys" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">👥</div>
              <div className="font-semibold text-gray-800 text-sm">Our Attorneys</div>
            </Link>
            <Link href="/contact" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">📞</div>
              <div className="font-semibold text-gray-800 text-sm">Contact Us</div>
            </Link>
            <Link href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">📍</div>
              <div className="font-semibold text-gray-800 text-sm">Locations</div>
            </Link>
            <Link href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">⚖️</div>
              <div className="font-semibold text-gray-800 text-sm">Practice Areas</div>
            </Link>
          </div>
        </section>

        {/* Mobile Free Consultation */}
        <section className="px-4 pt-4 pb-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col gap-3 p-4 items-center">
            <Link href="/contact" className="w-full bg-slate-800 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-slate-700 transition flex items-center justify-center gap-2">
              <Mail size={20} />
              Free Consultation
            </Link>
          </div>
        </section>
      </div>

      {/* Shared footer, moved outside the mobile-only wrapper above — nested
         there, it (and its fixed "Free Consultation" tab) never rendered on
         desktop at all, since a hidden ancestor collapses a child regardless
         of the child's own responsive classes. */}
      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          desc={lightbox.desc}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
} 