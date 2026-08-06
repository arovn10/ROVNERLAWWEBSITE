"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function NewSettlementPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    amount: '',
    caseType: '',
    date: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Case Type used to be a free-text input, which let it drift from the
  // practice-area names shown elsewhere on the site (e.g. "Car Accident" vs.
  // "Auto Accidents"). Sourcing the dropdown from the same practice areas
  // keeps new settlements consistent; "Other" still allows a value outside
  // that list rather than blocking on a slug this page doesn't control.
  const [practiceAreaTitles, setPracticeAreaTitles] = useState<string[]>([]);
  const [otherMode, setOtherMode] = useState(false);

  useEffect(() => {
    fetch('/api/practice-areas')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPracticeAreaTitles(data.map((a: { title: string }) => a.title).filter(Boolean));
        }
      })
      .catch(() => {
        // Falls back to the free-text "Other" input below — a slow or failed
        // fetch shouldn't block adding a settlement.
        setOtherMode(true);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/settlements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          amount: parseFloat(form.amount),
        }),
      });
      
      const result = await res.json();
      
      if (res.ok) {
        router.push('/admin/settlements');
      } else {
        setError(result.error || 'Failed to create settlement');
      }
    } catch {
      setError('Error creating settlement');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/settlements" className="text-green-700 hover:underline flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Add New Settlement</h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Amount</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Case Type</label>
          {otherMode || practiceAreaTitles.length === 0 ? (
            <input
              type="text"
              name="caseType"
              value={form.caseType}
              onChange={handleChange}
              required
              placeholder="e.g. Auto Accidents"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          ) : (
            <select
              name="caseType"
              value={form.caseType}
              onChange={(e) => {
                if (e.target.value === '__other__') {
                  setOtherMode(true);
                  setForm({ ...form, caseType: '' });
                } else {
                  setForm({ ...form, caseType: e.target.value });
                }
              }}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled>Select a case type…</option>
              {practiceAreaTitles.map((title) => (
                <option key={title} value={title}>{title}</option>
              ))}
              <option value="__other__">Other…</option>
            </select>
          )}
          {otherMode && practiceAreaTitles.length > 0 && (
            <button
              type="button"
              onClick={() => setOtherMode(false)}
              className="mt-2 text-sm text-green-700 hover:underline"
            >
              Choose from practice areas instead
            </button>
          )}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Description (Optional)</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="Enter a description of the case (optional)"
          />
        </div>
        {error && <div className="text-red-600 font-semibold">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] disabled:opacity-60"
        >
          <Save className="h-5 w-5" />
          {loading ? 'Saving...' : 'Save Settlement'}
        </button>
      </form>
    </div>
  );
} 