import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { prisma } from '@/lib/prisma';

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
      <Header currentPage="in-the-news" />

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
  );
} 