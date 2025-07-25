"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useFirmName } from '@/lib/FirmNameContext';
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

export default function PhotoGalleryPage() {
  const { firmName } = useFirmName();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{src: string, desc?: string} | null>(null);
  const [archives, setArchives] = useState<Archive[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/archives')
      .then(res => res.json())
      .then(data => {
        // Ensure data is an array
        if (Array.isArray(data)) {
          setArchives(data);
        } else {
          console.error('API returned non-array data:', data);
          setArchives([]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching archives:', error);
        setArchives([]);
        setLoading(false);
      });
  }, []);

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
        <section style={{position:'relative',width:'100%',height:'340px',marginBottom:'2.5rem',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'flex-start',background:'linear-gradient(90deg, #e8f0fe 0%, #fffbe6 100%)'}}>
          <div style={{position:'relative',height:'100%',width:'340px',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',zIndex:2}}>
            <Image 
              src="/photos/Attorneys/rrovner.png"
              alt="Senator Bob Rovner"
              width={220}
              height={300}
              style={{objectFit:'cover',borderRadius:'18px',boxShadow:'0 4px 24px rgba(20,28,38,0.13)'}}
            />
          </div>
          <div style={{padding:'0 2.5rem',zIndex:3}}>
            <h1 style={{fontSize:'2.7rem',fontWeight:900,marginBottom:'0.7rem',color:'#1a237e',letterSpacing:'-0.01em'}}>The Bob Rovner Archives</h1>
            <div style={{height:'5px',width:'80px',borderRadius:'2px',background:'var(--gold-accent)',marginBottom:'1.2rem'}}></div>
            <p style={{fontSize:'1.25rem',color:'#444',maxWidth:'700px',lineHeight:1.6}}>
              Explore the remarkable journey of Senator Bob Rovner, attorney, legislator, broadcaster, and community leader. These archives chronicle a lifetime of service, achievement, and unforgettable moments with presidents, politicians, and icons of our time.
            </p>
          </div>
        </section>
        {/* Page Content */}
        <section className="py-16 bg-[var(--gray-50)]">
          <div style={{maxWidth:'1200px',margin:'0 auto',paddingLeft:'2.5rem',paddingRight:'2.5rem'}}>
            {categories.map((cat) => (
              <div key={cat} style={{marginBottom:'3.5rem'}}>
                {/* Section Header as Chapter */}
                <div style={{display:'flex',alignItems:'center',gap:'1.2rem',marginBottom:'0.7rem',marginLeft:0}}>
                  <h2 style={{fontSize:'2rem',fontWeight:800,color:'#1a237e',letterSpacing:'-0.01em',margin:0,textAlign:'left'}}>{cat}</h2>
                  <div style={{height:'5px',width:'60px',borderRadius:'2px',background:'var(--gold-accent)'}}></div>
                </div>
                {/* Section Intro */}
                <div style={{marginBottom:'1.5rem',marginLeft:0}}>
                  {(() => {
                    let intro = '';
                    if (cat === 'Presidents') intro = 'Moments with U.S. Presidents—snapshots of history and leadership.';
                    else if (cat === 'Senate & Politicians') intro = 'Encounters with influential lawmakers and public servants.';
                    else if (cat === 'Celebrities') intro = 'A lifetime among icons of music, film, and culture.';
                    else if (cat === 'Archives') intro = 'Personal memories, rare documents, and the legacy of a public life.';
                    return (
                      <p style={{ fontSize: '1.08rem', color: '#555', maxWidth: 700, lineHeight: 1.5 }}>{intro}</p>
                    );
                  })()}
                </div>
                {/* Timeline Card Layout */}
                <div style={{display:'flex',flexDirection:'column',gap:'2.2rem',alignItems:'flex-start',position:'relative',paddingLeft:'32px'}}>
                  {/* Timeline vertical bar */}
                  <div style={{position:'absolute',left:'8px',top:0,bottom:0,width:'4px',background:'linear-gradient(180deg,#1a237e 0%,#f59e0b 100%)',borderRadius:'2px',zIndex:1,opacity:0.18}}></div>
                  {archives.filter(archive => archive.category === cat).map((archive, idx) => (
                    <div
                      key={archive.id + idx}
                      className="group relative flex flex-row items-stretch bg-white rounded-2xl shadow-lg border-none overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1"
                      style={{ maxWidth: '900px', minHeight: '170px', marginLeft:0, position: 'relative', width:'100%', boxShadow:'0 4px 24px rgba(20,28,38,0.10)', background:'linear-gradient(90deg, #f7fafc 0%, #fffbe6 100%)', padding:'1.5rem 2.2rem 1.5rem 0', alignItems:'center' }}
                      onClick={() => setLightbox({src: archive.imageUrl, desc: archive.title})}
                    >
                      {/* Timeline dot */}
                      <div style={{position:'absolute',left:'-26px',top:'50%',transform:'translateY(-50%)',width:'18px',height:'18px',background:'linear-gradient(180deg,#1a237e 0%,#f59e0b 100%)',borderRadius:'50%',boxShadow:'0 2px 8px rgba(20,28,38,0.10)',zIndex:3,border:'3px solid #fff'}}></div>
                      {/* Photo Section */}
                      <div style={{width:'150px',height:'150px',background:'#f3f4f6',borderRadius:'12px',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',zIndex:3,boxShadow:'0 1px 6px rgba(20,28,38,0.08)',marginRight:'2.2rem'}}>
                        <Image
                          src={archive.imageUrl}
                          alt={archive.title || 'Archive photo'}
                          width={150}
                          height={150}
                          className="rounded-lg group-hover:scale-105 transition-transform duration-200 shadow"
                          style={{objectFit:'cover',width:'140px',height:'140px'}}
                        />
                      </div>
                      {/* Details Section */}
                      <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',zIndex:3,alignItems:'flex-start'}}>
                        {archive.title && (
                          <div style={{fontWeight:700,fontSize:'1.18rem',color:'#1a237e',marginBottom:'0.2rem',textAlign:'left',whiteSpace:'normal',overflow:'hidden',textOverflow:'ellipsis',letterSpacing:'-0.01em'}}>{archive.title}</div>
                        )}
                        <div style={{fontWeight:500,fontSize:'0.97rem',color:'#f59e0b',textAlign:'left',letterSpacing:'0.01em',marginTop:archive.title?'.2rem':'0'}}>{cat}</div>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[var(--blue-accent)] bg-opacity-0 group-hover:bg-opacity-10 transition" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>The Bob Rovner Archives</h1>
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
                <h2 className="text-lg font-bold text-blue-900">Senator Bob Rovner</h2>
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
                <h3 className="text-lg font-bold text-blue-900">{cat}</h3>
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
                        <h4 className="font-semibold text-blue-900 text-sm mb-1 line-clamp-2">
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
          <h3 className="text-lg font-bold mb-3 text-blue-900">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <a href="/attorneys" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">👥</div>
              <div className="font-semibold text-gray-800 text-sm">Our Attorneys</div>
            </a>
            <a href="/contact" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📞</div>
              <div className="font-semibold text-gray-800 text-sm">Contact Us</div>
            </a>
            <a href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📍</div>
              <div className="font-semibold text-gray-800 text-sm">Locations</div>
            </a>
            <a href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">⚖️</div>
              <div className="font-semibold text-gray-800 text-sm">Practice Areas</div>
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
        <Footer />
      </div>

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