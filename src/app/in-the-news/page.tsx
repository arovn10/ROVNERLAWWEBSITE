"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';
import { FileText, Calendar, ArrowLeft } from 'lucide-react';

interface News {
  id: string;
  title: string;
  content: string;
  date: string;
  source: string;
  url?: string;
}

export default function InTheNewsPage() {
  const { firmName } = useFirmName();
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Fetch news articles
    fetch('/api/news')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('News data received:', data);
        setNews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setError('Failed to load news articles');
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center font-sans">
      {/* Desktop Header/Nav */}
      <div className="hidden lg:block w-full">
        <Header currentPage="in-the-news" />
      </div>
      {/* Mobile Header/Nav */}
      <div className="block lg:hidden w-full">
        <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block w-full">
        {/* Hero Section with Full-Width Color (no image, fixed) */}
        <section
          className="hero-professional"
          style={{
            width: '100%',
            minHeight: '140px',
            background: 'linear-gradient(120deg, #1e293b 60%, #334155 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <div className="hero-content" style={{ color: '#fff', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 800, marginBottom: '0.5rem', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>In the News</h2>
            <div className="accent-bar" style={{ margin: '0 auto 1.5rem auto', background: 'var(--gradient-gold)' }}></div>
            <p style={{ marginBottom: '2.5rem', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', color: '#e5e7eb', fontSize: '1.25rem', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              Stay updated with the latest news, press mentions, and media coverage featuring {firmName}
            </p>
          </div>
        </section>
        {/* News Content */}
        <section className="section">
          <div className="news-content" style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}>
            <div>
              <div className="section-title">
                <h3>Latest News & Media Coverage</h3>
                <p>Press mentions, articles, and media appearances</p>
              </div>
              {loading ? (
                <div className="text-center py-12">
                  <div className="text-lg font-semibold text-gray-700">Loading news articles...</div>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <div className="text-lg font-semibold text-red-600 mb-2">Error loading news</div>
                  <div className="text-gray-600">{error}</div>
                </div>
              ) : news.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No news articles yet</h3>
                  <p className="text-gray-600">Check back soon for the latest updates and media coverage.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8">
                  {news.map((article) => (
                    <Link key={article.id} href={`/in-the-news/${article.id}`} className="block">
                      <article className="card news-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                        <div className="news-header">
                          <div className="news-meta">
                            <div className="news-date">
                              <Calendar className="h-4 w-4" />
                              {formatDate(article.date)}
                            </div>
                            <div className="news-source">{article.source}</div>
                          </div>
                        </div>
                        <h3 className="news-title">{article.title}</h3>
                        <div className="news-content">
                          <p>{truncateContent(article.content)}</p>
                        </div>
                        <div className="news-actions">
                          <span className="news-cta-btn">
                            Read Full Article
                            <ArrowLeft className="h-4 w-4 rotate-180" />
                          </span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              {/* Sidebar: Contact Form */}
              <div className="sidebar-box contact-form-box mb-8">
                <h3 className="sidebar-title">Contact Us!</h3>
                <form className="contact-form">
                  <div className="form-group">
                    <label>Name *</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input type="tel" />
                  </div>
                  <div className="form-group">
                    <label>Date of Incident *</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Are you represented by another lawyer for this matter?</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input type="radio" name="represented" value="no" />
                        No
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="represented" value="yes" />
                        Yes
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Facts of what happened *</label>
                    <textarea rows={4}></textarea>
                  </div>
                  <div className="form-disclaimer">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      *I understand and agree that the submission of this form does not create an attorney-client relationship.
                    </label>
                  </div>
                  <button type="submit" className="submit-btn">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
              {/* Sidebar: Commercial */}
              <div className="sidebar-box commercial-box">
                <h3 className="sidebar-title">Our TV Commercial</h3>
                <div className="commercial-video" style={{ 
                  width: '100%', 
                  aspectRatio: '16/9', 
                  background: '#222', 
                  borderRadius: 12, 
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <iframe 
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      borderRadius: 12
                    }}
                    src="https://www.youtube.com/embed/KIk_uZ_Jyg0?si=7DtH3rNXINH0S59X" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact CTA */}
        <section className="section">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Need Legal Representation?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our experienced attorneys are ready to help you with your legal needs. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:215-259-5958"
                className="inline-block bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
              >
                Call 215-259-5958
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden w-full">
        {/* Mobile Hero Section */}
        <section className="relative w-full h-32 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h2 className="text-lg font-bold mb-1">In the News</h2>
            <p className="text-xs">Latest updates and media coverage</p>
          </div>
        </section>
        {/* Mobile News */}
        <section className="px-4 py-6">
          <div className="flex flex-col gap-4">
            {loading ? (
              <div className="text-center py-8 text-gray-700 font-semibold">Loading news articles...</div>
            ) : error ? (
              <div className="text-center py-8 text-red-600 font-semibold">{error}</div>
            ) : news.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No news articles yet. Check back soon!</div>
            ) : (
              news.map((article) => (
                <Link key={article.id} href={`/in-the-news/${article.id}`} className="bg-white rounded-lg p-4 shadow border border-gray-200">
                  <h4 className="font-bold text-blue-900 mb-2 text-base">{article.title}</h4>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {truncateContent(article.content, 100)}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-600 font-semibold text-xs">{formatDate(article.date)}</span>
                    <span className="text-gray-500 text-xs">{article.source}</span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
        {/* Mobile Contact CTA */}
        <section className="px-4 pb-8">
          <div className="bg-blue-700 rounded-xl p-5 text-white text-center shadow">
            <h3 className="text-lg font-bold mb-2">Need Legal Help?</h3>
            <p className="text-blue-100 mb-4 text-sm">
              Contact us today for a free consultation or call <a href="tel:215-259-5958" className="underline">215-259-5958</a>
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 font-bold px-6 py-2 rounded-lg shadow hover:bg-blue-100 transition"
            >
              Get Free Consultation
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
} 