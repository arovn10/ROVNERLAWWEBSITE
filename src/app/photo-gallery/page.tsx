"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

// Inferred photo data for Bob Rovner Archives
const rovnerPhotos = [
  // Presidents
  { file: 'BUSH2.jpg', category: 'Presidents', description: 'Bob Rovner with President George H.W. Bush' },
  { file: 'CLINTON1-230x300.jpg', category: 'Presidents', description: 'Bob Rovner with President Bill Clinton' },
  { file: 'CLINTON2.jpg', category: 'Presidents', description: 'Bob Rovner with President Bill Clinton' },
  { file: 'REAGAN.jpg', category: 'Presidents', description: 'Bob Rovner with President Ronald Reagan' },
  { file: 'KENNEDY.jpg', category: 'Presidents', description: 'Bob Rovner with President John F. Kennedy' },
  { file: 'johnson.jpg', category: 'Presidents', description: 'Bob Rovner with President Lyndon B. Johnson' },
  { file: 'OBAMA.jpg', category: 'Presidents', description: 'Bob Rovner with President Barack Obama' },
  { file: 'TRUMP.jpg', category: 'Presidents', description: 'Bob Rovner with President Donald J. Trump' },
  // Senate & Politicians
  { file: 'SPECTER.jpg', category: 'Senate & Politicians', description: 'With Senator Arlen Specter' },
  { file: 'GORE.jpg', category: 'Senate & Politicians', description: 'With Vice President Al Gore' },
  { file: 'mccain.jpg', category: 'Senate & Politicians', description: 'With Senator John McCain' },
  { file: 'POWELL.jpg', category: 'Senate & Politicians', description: 'With General Colin Powell' },
  { file: 'BENNET.jpg', category: 'Senate & Politicians', description: 'With Senator Bill Bennett' },
  { file: 'ABRAHAM.jpg', category: 'Senate & Politicians', description: 'With Senator Spencer Abraham' },
  { file: 'BOXER.jpg', category: 'Senate & Politicians', description: 'With Senator Barbara Boxer' },
  { file: 'STONE.jpg', category: 'Senate & Politicians', description: 'With Senator Richard Stone' },
  { file: 'STREET.jpg', category: 'Senate & Politicians', description: 'With Mayor John Street' },
  { file: 'ridge.jpg', category: 'Senate & Politicians', description: 'With Governor Tom Ridge' },
  { file: 'arnold.jpg', category: 'Senate & Politicians', description: 'With Arnold Schwarzenegger' },
  { file: 'rendell2.jpg', category: 'Senate & Politicians', description: 'With Governor Ed Rendell' },
  { file: 'rendell3.jpg', category: 'Senate & Politicians', description: 'With Governor Ed Rendell' },
  // Celebrities
  { file: 'bonjovi.jpg', category: 'Celebrities', description: 'With Jon Bon Jovi' },
  { file: 'hanks.jpg', category: 'Celebrities', description: 'With Tom Hanks' },
  { file: 'king.jpg', category: 'Celebrities', description: 'With Larry King' },
  { file: 'jagger.jpg', category: 'Celebrities', description: 'With Mick Jagger' },
  { file: 'streisnd.jpg', category: 'Celebrities', description: 'With Barbra Streisand' },
  { file: 'minelli-271x300.jpg', category: 'Celebrities', description: 'With Liza Minnelli' },
  { file: 'whoopi.jpg', category: 'Celebrities', description: 'With Whoopi Goldberg' },
  { file: 'cosby2.jpg', category: 'Celebrities', description: 'With Bill Cosby' },
  { file: 'COSBY.jpg', category: 'Celebrities', description: 'With Bill Cosby' },
  // Misc/Archives
  { file: 'bobrovner1.jpg', category: 'Archives', description: '' },
  { file: 'doc03613020170208103844_001-1024x791.jpg', category: 'Archives', description: '' },
  { file: 'doc03613120170208103956_001-1024x791.jpg', category: 'Archives', description: '' },
  { file: 'doc03613220170208104114_001-1024x663.jpg', category: 'Archives', description: '' },
  { file: 'doc03613320170208104158_001-791x1024.jpg', category: 'Archives', description: '' },
  { file: 'doc03613420170208104216_001-1024x791.jpg', category: 'Archives', description: '' },
];

const categories = [
  'Presidents',
  'Senate & Politicians',
  'Celebrities',
  'Archives',
];

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
  const [lightbox, setLightbox] = useState<{src: string, desc?: string} | null>(null);
  return (
    <div>
      <Header currentPage="photo-gallery" />
      {/* Hero Image with Page Title */}
      <section className="relative py-24 bg-cover bg-center" style={{backgroundImage: "url('/photos/attorneys-hero.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">PHOTO GALLERY</h1>
        </div>
      </section>
      {/* Page Content */}
      <section className="py-16 bg-[var(--gray-50)]">
        <div className="max-w-7xl mx-auto px-4">
          {categories.map((cat) => (
            <div key={cat} className="mb-20">
              <div className="mb-4 flex items-center gap-4">
                <h2 className="text-2xl font-extrabold text-[var(--navy-primary)] tracking-tight">{cat}</h2>
                <div className="h-1 w-16 rounded bg-[var(--gold-accent)]"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rovnerPhotos.filter(p => p.category === cat).map((photo, idx) => (
                  <div
                    key={photo.file + idx}
                    className="attorney-card cursor-pointer group flex flex-row items-stretch border border-[var(--gray-200)] hover:border-[var(--blue-accent)] bg-white rounded-xl shadow-md transition overflow-hidden relative"
                    style={{height:'130px', maxWidth:'700px', minHeight:'130px'}} 
                    onClick={() => setLightbox({src: `/photos/BobRovnerArchives/${photo.file}`, desc: photo.description})}
                  >
                    {/* Accent Bar */}
                    <div className="w-3 bg-gradient-to-b from-[var(--gold-accent)] to-[var(--blue-accent)]" />
                    {/* Photo */}
                    <div className="flex-shrink-0 flex items-center justify-center bg-[var(--gray-200)]" style={{width:'130px', height:'130px'}}>
                      <Image
                        src={`/photos/BobRovnerArchives/${photo.file}`}
                        alt={photo.description || photo.file}
                        width={130}
                        height={130}
                        className="rounded-lg group-hover:scale-105 transition-transform duration-200 shadow"
                        style={{objectFit:'cover', width:'120px', height:'120px'}}
                      />
                    </div>
                    {/* Description */}
                    <div className="flex flex-col justify-center px-6 py-2 flex-1 bg-white h-full">
                      {photo.description && (
                        <div className="text-base font-semibold text-[var(--navy-primary)] mb-1">
                          {photo.description}
                        </div>
                      )}
                      <div className="text-xs text-[var(--blue-accent)] font-bold uppercase tracking-wide">
                        {cat}
                      </div>
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
      <Footer />
      
      {/* Lightbox Modal - Positioned outside main content */}
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