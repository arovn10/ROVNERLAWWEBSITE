"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, FileText } from 'lucide-react';

interface News {
  id: string;
  title: string;
  content: string;
  date: string;
  source: string;
  url?: string;
}

export default function EditNewsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [news, setNews] = useState<News | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: '',
    source: '',
    url: ''
  });

  useEffect(() => {
    fetchNews();
  }, [params.id]);

  const fetchNews = async () => {
    try {
      const response = await fetch(`/api/news/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setNews(data);
        setFormData({
          title: data.title,
          content: data.content,
          date: new Date(data.date).toISOString().split('T')[0],
          source: data.source,
          url: data.url || ''
        });
      } else {
        alert('News article not found');
        router.push('/admin/news');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      alert('Failed to load news article');
      router.push('/admin/news');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(`/api/news/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/news');
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to update news article');
      }
    } catch (error) {
      console.error('Error updating news:', error);
      alert('Failed to update news article');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="text-lg font-semibold text-gray-700">Loading news article...</div>
      </div>
    );
  }

  if (!news) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/news">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Edit News Article</h1>
          <p className="text-gray-600 mt-2">Update press mention or media coverage</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
              Article Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
              placeholder="Enter article title..."
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
              Publication Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
            />
          </div>

          {/* Source */}
          <div>
            <label htmlFor="source" className="block text-sm font-semibold text-gray-700 mb-2">
              Source/Publication *
            </label>
            <input
              type="text"
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
              placeholder="e.g., Philadelphia Inquirer, Local News Channel, etc."
            />
          </div>

          {/* URL */}
          <div>
            <label htmlFor="url" className="block text-sm font-semibold text-gray-700 mb-2">
              Article URL (Optional)
            </label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
              placeholder="https://example.com/article"
            />
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
              Article Content *
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={12}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm resize-vertical"
              placeholder="Paste or write the full article content here..."
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save Changes
                </>
              )}
            </button>
            
            <Link href="/admin/news">
              <button
                type="button"
                className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] border border-gray-200 hover:border-gray-300"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
} 