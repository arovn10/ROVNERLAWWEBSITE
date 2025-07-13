"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SettlementsAdminPage() {
  const [settlements, setSettlements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/admin/login");
  }, [session, status, router]);

  useEffect(() => {
    fetch('/api/settlements')
      .then(res => res.json())
      .then(data => {
        setSettlements(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching settlements:', error);
        setLoading(false);
      });
  }, []);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="text-lg font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this settlement?')) return;
    try {
      const response = await fetch(`/api/settlements/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setSettlements(settlements.filter(s => s.id !== id));
      } else {
        alert('Failed to delete settlement');
      }
    } catch (error) {
      console.error('Error deleting settlement:', error);
      alert('Error deleting settlement');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settlements</h1>
          <p className="text-gray-600 mt-2">Manage your law firm's settlements and verdicts</p>
        </div>
        <Link 
          href="/admin/settlements/new"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
        >
          <Plus className="h-5 w-5" />
          Add Settlement
        </Link>
      </div>

      {/* Settlements List */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="text-lg font-semibold text-gray-700">Loading settlements...</div>
          </div>
        ) : settlements.length === 0 ? (
          <div className="p-8 text-center">
            <div className="text-lg font-semibold text-gray-700 mb-2">No settlements found</div>
            <p className="text-gray-500">Get started by adding your first settlement.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Case Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {settlements.map((s: any) => (
                  <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{s.title}</td>
                    <td className="px-6 py-4 text-green-700 font-bold">${s.amount.toLocaleString()}</td>
                    <td className="px-6 py-4">{s.caseType}</td>
                    <td className="px-6 py-4">{new Date(s.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link 
                          href={`/admin/settlements/${s.id}/edit`}
                          className="flex items-center gap-1 px-3 py-1.5 text-sm bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                          Edit
                        </Link>
                        <button 
                          onClick={() => handleDelete(s.id)}
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