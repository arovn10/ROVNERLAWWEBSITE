"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useState, useRef, useEffect } from 'react';

export default function AttorneysClient({ attorneys }: { attorneys: any[] }) {
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
    // Check which bios overflow their container and are over the length limit
    const newOverflowing: { [id: string]: boolean } = {};
    attorneys.forEach((attorney) => {
      const ref = bioRefs.current[attorney.id];
      if (ref) {
        newOverflowing[attorney.id] = (ref.scrollHeight > 96 && (attorney.bio?.length > BIO_LENGTH_LIMIT));
      }
    });
    setOverflowing(newOverflowing);
  }, [attorneys, expanded]);

  // Recalculate on window resize and after images load
  useEffect(() => {
    const handleResize = () => {
      const newOverflowing: { [id: string]: boolean } = {};
      attorneys.forEach((attorney) => {
        const ref = bioRefs.current[attorney.id];
        if (ref) {
          newOverflowing[attorney.id] = (ref.scrollHeight > 96 && (attorney.bio?.length > BIO_LENGTH_LIMIT));
        }
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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f0fe 0%, #fff 100%)',
      paddingBottom: '3rem'
    }}>
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
        <section style={{position:'relative',width:'100%',height:'320px',marginBottom:'2.5rem',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Image 
            src="/photos/banner-about-1-1024x128.png"
            alt="About Our Legal Team"
            fill
            style={{objectFit:'cover',objectPosition:'center top',zIndex:0}}
          />
          <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:'rgba(20,28,38,0.65)',zIndex:1}} />
          <div style={{position:'relative',zIndex:2,width:'100%',textAlign:'center',color:'#fff',padding:'2rem 1rem',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%'}}>
            <h2 style={{fontSize:'2.2rem',fontWeight:800,marginBottom:'0.5rem',textShadow:'0 2px 12px rgba(0,0,0,0.7)'}}>Our Legal Team</h2>
            <p style={{fontSize:'1.2rem',fontWeight:500,textShadow:'0 2px 8px rgba(0,0,0,0.4)'}}>Experienced Attorneys Fighting for Your Rights</p>
          </div>
        </section>
        {/* Attorneys List - Profile Card Style */}
        <section className="section">
          <div className="section-title">
            <h3>Meet Our Attorneys</h3>
            <p>Our team of lawyers and paralegals</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr',gap:'2.5rem',justifyContent:'center',alignItems:'center',margin:'2rem 0'}}>
          {attorneys.map((attorney) => (
            <div key={attorney.id} style={{
              display:'grid',
              gridTemplateColumns:'160px 1fr 1.2fr',
              gridTemplateRows:'1fr auto',
              alignItems:'center',
              maxWidth:'1400px',
              margin:'0 auto',
              width:'100%',
              background:'linear-gradient(90deg, #f7fafc 0%, #fffbe6 100%)',
              borderRadius:'18px',
              border:'none',
              boxShadow:'0 4px 24px rgba(20,28,38,0.10)',
              position:'relative',
              overflow:'hidden',
              fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
              padding:'2.5rem 2.5rem 1.5rem 2.5rem',
            }}
            className="attorney-card-hover"
            >
              {/* Gradient Left Border */}
              <div style={{position:'absolute',left:0,top:0,bottom:0,width:'12px',background:'linear-gradient(180deg, #1a237e 0%, #f59e0b 100%)',borderRadius:'18px 0 0 18px',zIndex:2,gridRow:'1 / span 2'}} />
              {/* Photo Section */}
              <div style={{gridColumn:1,gridRow:1,display:'flex',alignItems:'center',justifyContent:'center',height:'220px',background:'#f3f4f6',borderRadius:'12px 0 0 12px',overflow:'hidden',boxShadow:'0 1px 6px rgba(20,28,38,0.08)',zIndex:3}}>
              <Image
                src={attorney.image || '/photos/default-headshot.jpg'}
                alt={attorney.name}
                  width={160}
                  height={220}
                  style={{objectFit:'cover',width:'160px',height:'220px'}}
              />
              </div>
              {/* About Section */}
              <div style={{gridColumn:2,gridRow:1,padding:'0 2rem 0 2.5rem',display:'flex',flexDirection:'column',justifyContent:'center',height:'100%',zIndex:3}}>
                <div style={{fontWeight:700,fontSize:'1.18rem',color:'#1a237e',marginBottom:'0.2rem',textAlign:'left',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',letterSpacing:'-0.01em'}}>{attorney.name}</div>
                <div style={{fontWeight:500,fontSize:'1.01rem',color:'#f59e0b',marginBottom:'0.7rem',textAlign:'left',letterSpacing:'0.01em'}}>{attorney.title}</div>
                {attorney.bio && (
                  <div style={{position:'relative'}}>
                    <div
                      ref={el => { bioRefs.current[attorney.id] = el; }}
                      style={{
                        fontSize:'0.95rem',color:'#444',marginBottom:'0.7rem',textAlign:'left',lineHeight:1.6,letterSpacing:'0.01em',
                        maxHeight: expanded[attorney.id] ? 'none' : '96px',
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
              </div>
              {/* Divider */}
              <div style={{gridColumn:3,gridRow:1,position:'absolute',left:'calc(160px + 2.5rem)',top:'10%',bottom:'10%',width:'1.5px',background:'#e3e7ee',borderRadius:'2px',zIndex:4}} />
              {/* Specialty & Details Section */}
              <div style={{gridColumn:3,gridRow:1,padding:'0 2.5rem 0 2rem',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',height:'100%',zIndex:3}}>
                {attorney.specialties && (
                  <div style={{fontSize:'0.97rem',color:'#1976d2',marginBottom:'0.7rem',fontWeight:500,letterSpacing:'0.01em'}}>
                    <strong>Specialties:</strong> {Array.isArray(attorney.specialties) ? attorney.specialties.join(', ') : attorney.specialties}
                  </div>
                )}
                {attorney.education && (
                  <div style={{fontSize:'0.94rem',color:'#333',marginBottom:'0.5rem',letterSpacing:'0.01em'}}><strong>Education:</strong> {attorney.education}</div>
                )}
                {attorney.experience && (
                  <div style={{fontSize:'0.94rem',color:'#333',marginBottom:'0.5rem',letterSpacing:'0.01em'}}><strong>Experience:</strong> {attorney.experience}</div>
                )}
                {attorney.email && (
                  <div style={{fontSize:'0.94rem',color:'#333',marginBottom:'0.5rem',letterSpacing:'0.01em'}}><strong>Email:</strong> {attorney.email}</div>
                )}
                {attorney.phone && (
                  <div style={{fontSize:'0.94rem',color:'#333',marginBottom:'0.5rem',letterSpacing:'0.01em'}}><strong>Phone:</strong> {attorney.phone}</div>
                )}
              </div>
              {/* Contact Button Row */}
              {attorney.name !== 'Robert A. Rovner' && (
                <div style={{gridColumn:'2 / span 2',gridRow:2,display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'1.2rem',width:'100%'}}>
                  <Link href="/contact" style={{
                    display:'inline-block',
                    background:'#1a237e',
                    color:'#fff',
                    fontWeight:700,
                    fontSize:'1.08rem',
                    padding:'0.8rem 2.5rem',
                    borderRadius:10,
                    boxShadow:'0 2px 8px rgba(20,28,38,0.10)',
                    textDecoration:'none',
                    letterSpacing:'0.01em',
                    transition:'background 0.2s, box-shadow 0.2s',
                  }}
                  className="attorney-btn-hover"
                  >Contact {attorney.name.split(' ')[0]}</Link>
                </div>
              )}
            </div>
          ))}
          </div>
        </section>
        {/* Why Choose Our Team */}
        <section className="section team-why-choose" style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',background:'none',marginTop:'3rem'}}>
          <div className="about-content" style={{maxWidth:'1400px',margin:'0 auto',width:'100%',display:'flex',flexDirection:'row',gap:'2.5rem',alignItems:'flex-start',justifyContent:'center'}}>
            <div className="about-text" style={{textAlign:'center',flex:'2',minWidth:0}}>
              <div className="content-title-section" style={{textAlign:'center',width:'100%'}}>
                <h2 className="content-title" style={{fontSize:'2rem',fontWeight:800,marginBottom:'0.5rem',color:'#1a237e',textAlign:'center'}}>Why Choose Our Legal Team?</h2>
                <div className="accent-bar" style={{margin:'0.5rem auto 1.5rem auto',background:'#f59e0b',height:'4px',width:'60px',borderRadius:'2px'}}></div>
              </div>
              <div className="content-text-blocks" style={{textAlign:'center',margin:'0 auto',maxWidth:'700px'}}>
                <p className="content-text" style={{fontSize:'1.1rem',color:'#444',marginBottom:'2rem'}}>Our team of lawyers and paralegals, investigators, experts, all with hundreds of years of combined experience, put us at the top of the Philadelphia Area legal profession.</p>
              </div>
              <div className="highlight-box gold-highlight" style={{margin:'2rem auto',maxWidth:'700px',textAlign:'left'}}>
                  <h3 className="highlight-title">Unmatched Experience & Results</h3>
                  <ul className="highlight-list">
                    <li>Hundreds of years of combined legal experience</li>
                  <li>Proven track record of success</li>
                  </ul>
              </div>
            </div>
            <div className="about-sidebar" style={{margin:'2rem 0 0 0',maxWidth:'400px',textAlign:'center',flex:'1'}}>
              <div className="sidebar-box contact-form-box">
                <h3 className="sidebar-title">Schedule a Consultation</h3>
                <div className="consultation-content">
                  <p>Ready to discuss your case with one of our experienced attorneys?</p>
                  <Link href="/contact" className="phone-cta-btn">Get Free Consultation</Link>
                  <p className="quick-contact-note">No fee unless we win your case</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Attorney Cards */}
      <div className="block lg:hidden w-full px-2 pt-4 pb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Our Legal Team</h2>
        <div className="flex flex-col gap-4">
          {attorneys.map((attorney) => (
            <div key={attorney.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center border border-blue-100">
              <Image
                src={attorney.image || '/photos/default-headshot.jpg'}
                alt={attorney.name}
                width={120}
                height={160}
                className="rounded-lg object-cover mb-2"
              />
              <div className="text-lg font-bold text-blue-900 mb-1 text-center">{attorney.name}</div>
              <div className="text-sm text-blue-600 mb-2 text-center">{attorney.title}</div>
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
                <div className="text-xs text-blue-700 mb-1 text-center"><strong>Specialties:</strong> {Array.isArray(attorney.specialties) ? attorney.specialties.join(', ') : attorney.specialties}</div>
              )}
              {attorney.email && (
                <div className="text-xs text-gray-500 mb-1 text-center"><strong>Email:</strong> {attorney.email}</div>
              )}
              {attorney.phone && (
                <div className="text-xs text-gray-500 mb-2 text-center"><strong>Phone:</strong> {attorney.phone}</div>
              )}
              <Link href="/contact" className="w-full bg-blue-700 text-white font-bold rounded-lg py-2 text-center text-base shadow hover:bg-blue-800 transition mt-2">Contact</Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
} 