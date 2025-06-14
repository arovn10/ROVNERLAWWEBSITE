"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Edit, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface Lawyer {
  id: string;
  name: string;
  title?: string;
  bio?: string;
  education?: string;
  experience?: string;
  specialties?: string;
  email?: string;
  phone?: string;
  image?: string;
  active?: boolean;
}

function LawyerCard({ lawyer }: { lawyer: Lawyer }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this lawyer?')) {
      setDeleting(true);
      try {
        const response = await fetch(`/api/lawyers/${lawyer.id}`, { method: 'DELETE' });
        if (response.ok) {
          router.refresh();
        } else {
          alert('Failed to delete lawyer');
        }
      } catch {
        alert('Failed to delete lawyer');
      } finally {
        setDeleting(false);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mx-auto max-w-3xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 p-10 hover:shadow-3xl transition-all relative overflow-hidden group">
      <div className="flex-shrink-0 w-36 h-36 rounded-2xl overflow-hidden bg-gray-100 border-2 border-white shadow-lg flex items-center justify-center">
        {lawyer.image ? (
          <Image src={lawyer.image} alt={lawyer.name} width={144} height={144} className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-400 text-5xl font-bold">{lawyer.name[0]}</span>
        )}
      </div>
      <div className="flex-1 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 drop-shadow-sm">{lawyer.name}</h2>
            <p className="text-gray-500 text-lg mb-2 font-medium">{lawyer.title}</p>
            <p className="text-gray-700 text-base line-clamp-2 max-w-2xl mb-2">{lawyer.bio}</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Link href={`/admin/lawyers/${lawyer.id}/edit`} className="inline-flex items-center px-5 py-2 text-base font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all gap-2">
              <Edit className="h-5 w-5" /> Edit
            </Link>
            <button
              onClick={handleDelete}
              className="inline-flex items-center px-5 py-2 text-base font-semibold text-white bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition-all gap-2"
              type="button"
              disabled={deleting}
            >
              <Trash2 className="h-5 w-5" /> {deleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-6 text-base text-gray-600 items-center">
          {lawyer.email && <span className="flex items-center gap-1">📧 {lawyer.email}</span>}
          {lawyer.phone && <span className="flex items-center gap-1">📞 {lawyer.phone}</span>}
          {lawyer.active !== undefined && (
            <span className={`inline-flex items-center px-3 py-1 rounded-full font-semibold ${lawyer.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{lawyer.active ? 'Active' : 'Inactive'}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LawyersManagementClient({ lawyers }: { lawyers: Lawyer[] }) {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-10">
      {/* Sticky Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sticky top-0 z-10 bg-gray-50 py-4">
        <div>
          <h1 className="text-3xl font-bold text-navy-primary mb-1">Manage Lawyers</h1>
          <p className="text-gray-600">Add, edit, and organize attorney profiles</p>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/admin/lawyers/new" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-md">
            + Add Lawyer
          </Link>
        </div>
      </div>
      <div className="space-y-8">
        {lawyers.map(lawyer => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>
    </div>
  );
} 