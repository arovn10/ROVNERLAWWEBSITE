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
  // Obama (corrected)
  { file: 'doc03613020170208103844_001-1024x791.jpg', category: 'Presidents', description: 'FORMER STATE SENATOR BOB ROVNER TOLD BARACK OBAMA HE ENJOYED BEING A DELEGATE IN 2008 AT THE DENVER DEMOCRATIC CONVENTION AND AGAIN IN CHARLOTTE IN 2012' },
  // Trump (corrected)
  { file: 'bobrovner1.jpg', category: 'Presidents', description: 'Bob Rovner with President Donald J. Trump' },
  // Remove JFK and Johnson (if not accurate)
  // Senate & Politicians
  { file: 'SPECTER.jpg', category: 'Senate & Politicians', description: 'With Senator Arlen Specter' },
  { file: 'GORE.jpg', category: 'Senate & Politicians', description: 'With Vice President Al Gore' },
  { file: 'mccain.jpg', category: 'Senate & Politicians', description: 'With Senator John McCain' },
  { file: 'POWELL.jpg', category: 'Senate & Politicians', description: 'With General Colin Powell' },
  { file: 'BENNET.jpg', category: 'Senate & Politicians', description: 'With Senator Bill Bennett' },
  { file: 'ABRAHAM.jpg', category: 'Senate & Politicians', description: '' },
  { file: 'BOXER.jpg', category: 'Senate & Politicians', description: 'With Senator Barbara Boxer' },
  { file: 'STONE.jpg', category: 'Senate & Politicians', description: '' },
  { file: 'STREET.jpg', category: 'Senate & Politicians', description: 'With Mayor John Street' },
  { file: 'ridge.jpg', category: 'Senate & Politicians', description: 'With Governor Tom Ridge' },
  { file: 'arnold.jpg', category: 'Senate & Politicians', description: 'With Arnold Schwarzenegger' },
  { file: 'rendell2.jpg', category: 'Senate & Politicians', description: 'With Governor Ed Rendell' },
  { file: 'rendell3.jpg', category: 'Senate & Politicians', description: 'With Governor Ed Rendell' },
  // Hillary Clinton (corrected)
  { file: 'doc03613420170208104216_001-1024x791.jpg', category: 'Senate & Politicians', description: 'Bob Rovner with Hillary Clinton' },
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
  // Archives & World Leaders
  { file: 'doc03613220170208104114_001-1024x663.jpg', category: 'Archives', description: 'BOB ROVNER MEETS WITH THE FOUNDING FATHER OF THE STATE OF ISRAEL AND PRIME MINISTER DAVID BEN GURION IN 1971 WHEN HE WAS THE SENATOR AND TOLD THE PRIME MINISTER THAT HE WAS THE "GEORGE WASHINGTON" OF ISRAEL AND THANKED HIM FOR ALL HE DID FOR THE JEWISH PEOPLE' },
  { file: 'doc03613120170208103956_001-1024x791.jpg', category: 'Archives', description: '' },
  { file: 'doc03613320170208104158_001-791x1024.jpg', category: 'Archives', description: '' },
  // Any other photos without a name
  { file: 'KENNEDY.jpg', category: 'Archives', description: '' },
  { file: 'johnson.jpg', category: 'Archives', description: '' },
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
                {rovnerPhotos.filter(p => p.category === cat).map((photo, idx) => (
                  <div
                    key={photo.file + idx}
                    className="group relative flex flex-row items-stretch bg-white rounded-2xl shadow-lg border-none overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1"
                    style={{ maxWidth: '900px', minHeight: '170px', marginLeft:0, position: 'relative', width:'100%', boxShadow:'0 4px 24px rgba(20,28,38,0.10)', background:'linear-gradient(90deg, #f7fafc 0%, #fffbe6 100%)', padding:'1.5rem 2.2rem 1.5rem 0', alignItems:'center' }}
                    onClick={() => setLightbox({src: `/photos/BobRovnerArchives/${photo.file}`, desc: photo.description})}
                  >
                    {/* Timeline dot */}
                    <div style={{position:'absolute',left:'-26px',top:'50%',transform:'translateY(-50%)',width:'18px',height:'18px',background:'linear-gradient(180deg,#1a237e 0%,#f59e0b 100%)',borderRadius:'50%',boxShadow:'0 2px 8px rgba(20,28,38,0.10)',zIndex:3,border:'3px solid #fff'}}></div>
                    {/* Photo Section */}
                    <div style={{width:'150px',height:'150px',background:'#f3f4f6',borderRadius:'12px',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',zIndex:3,boxShadow:'0 1px 6px rgba(20,28,38,0.08)',marginRight:'2.2rem'}}>
                      <Image
                        src={`/photos/BobRovnerArchives/${photo.file}`}
                        alt={photo.description || photo.file}
                        width={150}
                        height={150}
                        className="rounded-lg group-hover:scale-105 transition-transform duration-200 shadow"
                        style={{objectFit:'cover',width:'140px',height:'140px'}}
                      />
                    </div>
                    {/* Details Section */}
                    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',zIndex:3,alignItems:'flex-start'}}>
                      {photo.description && (
                        <div style={{fontWeight:700,fontSize:'1.18rem',color:'#1a237e',marginBottom:'0.2rem',textAlign:'left',whiteSpace:'normal',overflow:'hidden',textOverflow:'ellipsis',letterSpacing:'-0.01em'}}>{photo.description}</div>
                      )}
                      <div style={{fontWeight:500,fontSize:'0.97rem',color:'#f59e0b',textAlign:'left',letterSpacing:'0.01em',marginTop:photo.description?'.2rem':'0'}}>{cat}</div>
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