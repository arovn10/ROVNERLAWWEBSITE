"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFirmName } from '@/lib/FirmNameContext';
import { Calendar, ExternalLink, FileText, ArrowLeft } from 'lucide-react';

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
      <Header currentPage="in-the-news" />
      
      {/* Hero Section */}
      <section className="hero-professional" style={{ position: 'relative', minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="hero-image-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'var(--gradient-navy)',
            zIndex: 1
          }} />
        </div>
        <div className="hero-content" style={{
          maxWidth: 2000,
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '2rem 0',
        }}>
          <h1 className="content-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 800, marginBottom: '0.5rem', color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>In the News</h1>
          <div className="accent-bar" style={{ margin: '0 auto 1.5rem auto', background: 'var(--gradient-gold)' }}></div>
          <p className="content-text" style={{ marginBottom: '2.5rem', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', color: '#e5e7eb', fontSize: '1.25rem', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
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
              <div className="commercial-video" style={{ width: '100%', aspectRatio: '16/9', background: '#222', borderRadius: 12, overflow: 'hidden' }}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/KIk_uZ_Jyg0?si=7DtH3rNXINH0S59X" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
  );
} 