"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PracticeAreasAdminPage() {
  const [practiceAreas, setPracticeAreas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/practice-areas')
      .then(res => res.json())
      .then(data => {
        setPracticeAreas(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching practice areas:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this practice area?')) return;
    
    try {
      const response = await fetch(`/api/practice-areas/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setPracticeAreas(practiceAreas.filter(area => area.id !== id));
      } else {
        alert('Failed to delete practice area');
      }
    } catch (error) {
      console.error('Error deleting practice area:', error);
      alert('Error deleting practice area');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Practice Areas</h1>
          <p className="text-gray-600 mt-2">Manage your law firm's practice areas and specialties</p>
        </div>
        <Link 
          href="/admin/practice-areas/new"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
        >
          <Plus className="h-5 w-5" />
          Add Practice Area
        </Link>
      </div>

      {/* Practice Areas List */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="text-lg font-semibold text-gray-700">Loading practice areas...</div>
          </div>
        ) : practiceAreas.length === 0 ? (
          <div className="p-8 text-center">
            <div className="text-lg font-semibold text-gray-700 mb-2">No practice areas found</div>
            <p className="text-gray-500">Get started by adding your first practice area.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Slug</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {practiceAreas.map((area: any) => (
                  <tr key={area.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{area.title}</div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">{area.slug}</code>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-600 text-sm max-w-xs truncate">{area.description}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        area.active 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {area.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link 
                          href={`/admin/practice-areas/${area.id}/edit`}
                          className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                          Edit
                        </Link>
                        <button 
                          onClick={() => handleDelete(area.id)}
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