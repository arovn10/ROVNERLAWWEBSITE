"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function ArchivesAdminPage() {
  const [archives, setArchives] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/archives')
      .then(res => res.json())
      .then(data => {
        setArchives(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching archives:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this archive?')) return;
    try {
      const response = await fetch(`/api/archives/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setArchives(archives.filter(a => a.id !== id));
      } else {
        alert('Failed to delete archive');
      }
    } catch (error) {
      console.error('Error deleting archive:', error);
      alert('Error deleting archive');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bob Rovner Archives</h1>
          <p className="text-gray-600 mt-2">Manage the Bob Rovner photo archives</p>
        </div>
        <Link 
          href="/admin/archives/new"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
        >
          <Plus className="h-5 w-5" />
          Add Archive
        </Link>
      </div>

      {/* Archives List */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="text-lg font-semibold text-gray-700">Loading archives...</div>
          </div>
        ) : archives.length === 0 ? (
          <div className="p-8 text-center">
            <div className="text-lg font-semibold text-gray-700 mb-2">No archives found</div>
            <p className="text-gray-500">Get started by adding your first archive.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Image</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {archives.map((a: any) => (
                  <tr key={a.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{a.title}</td>
                    <td className="px-6 py-4">
                      {a.imageUrl && (
                        <img src={a.imageUrl} alt={a.title} className="h-16 w-16 object-cover rounded-lg border" />
                      )}
                    </td>
                    <td className="px-6 py-4">{a.date ? new Date(a.date).toLocaleDateString() : ''}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link 
                          href={`/admin/archives/${a.id}/edit`}
                          className="flex items-center gap-1 px-3 py-1.5 text-sm bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                          Edit
                        </Link>
                        <button 
                          onClick={() => handleDelete(a.id)}
                          className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 