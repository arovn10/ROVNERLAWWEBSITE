import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { prisma } from '@/lib/prisma';
import { useState } from 'react';

async function getNewsArticle(id: string) {
  try {
    const article = await prisma.news.findUnique({
      where: { id }
    });
    return article;
  } catch (error) {
    console.error('Error fetching news article:', error);
    return null;
  }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getNewsArticle(id);

  if (!article) {
    notFound();
  }

  return (
    <div>
      {/* Desktop Header/Nav */}
      <div className="hidden lg:block w-full">
        <Header currentPage="in-the-news" />
      </div>
      {/* Mobile Header/Nav */}
      <div className="block lg:hidden w-full">
        <MobileHeader isMenuOpen={false} onMenuClick={() => {}} />
        <MobileNav isOpen={false} onClose={() => {}} />
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block">
        {/* Hero Section */}
        <section className="hero-professional">
          <div className="hero-content" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
            <h2>In the News</h2>
            <p>Latest updates and media coverage</p>
          </div>
        </section>

        {/* Article Content */}
        <section className="section">
          <div className="article-container">
            <div className="article-header">
              <Link href="/in-the-news" className="back-link">
                ← Back to News
              </Link>
              <h1 className="article-title">{article.title}</h1>
              <div className="article-meta">
                <span className="article-date">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="article-source">Source: {article.source}</span>
                {article.url && (
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="article-link"
                  >
                    Read Original Article →
                  </a>
                )}
              </div>
            </div>
            
            <div className="article-content">
              <div className="article-text">
                {article.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="article-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-32 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-lg font-bold mb-1" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>In the News</h1>
            <p className="text-xs" style={{textShadow:'0 2px 8px #000'}}>Latest updates and media coverage</p>
          </div>
        </section>

        {/* Mobile Article Content */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-4">
            <Link href="/in-the-news" className="text-blue-600 font-semibold text-sm flex items-center gap-1">
              ← Back to News
            </Link>
            
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
              <h1 className="text-xl font-bold text-blue-900 mb-3">{article.title}</h1>
              
              <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
                <span className="font-semibold">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span>Source: {article.source}</span>
                {article.url && (
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold"
                  >
                    Read Original Article →
                  </a>
                )}
              </div>
              
              <div className="prose prose-sm max-w-none">
                {article.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-800 leading-relaxed mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
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
            <a href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">⚖️</div>
              <div className="font-semibold text-gray-800 text-sm">Practice Areas</div>
            </a>
            <a href="/about" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">ℹ️</div>
              <div className="font-semibold text-gray-800 text-sm">About Us</div>
            </a>
          </div>
        </section>

        {/* Mobile Contact CTA */}
        <section className="px-4 pt-4 pb-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col gap-3 p-4 items-center">
            <h3 className="font-bold text-gray-900 text-lg text-center">Need Legal Help?</h3>
            <p className="text-gray-600 text-center text-sm">Contact us today for a free consultation</p>
            <div className="flex flex-col gap-2 w-full">
              <a href="/contact" className="w-full bg-green-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-green-700 transition">
                Get Free Consultation
              </a>
              <a href="tel:215-259-5958" className="w-full bg-blue-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-blue-700 transition">
                Call 215-259-5958
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
} 