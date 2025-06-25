"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, FileText } from 'lucide-react';

export default function NewNewsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    source: '',
    url: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/news');
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to create news article');
      }
    } catch (error) {
      console.error('Error creating news:', error);
      alert('Failed to create news article');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
          <h1 className="text-3xl font-bold text-gray-900">Add News Article</h1>
          <p className="text-gray-600 mt-2">Create a new press mention or media coverage</p>
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
              disabled={loading}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Creating...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Create Article
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