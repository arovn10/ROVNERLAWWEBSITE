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

interface LawyersManagementClientProps {
  lawyers: Lawyer[];
}

function LawyerCard({ lawyer }: { lawyer: Lawyer }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (deleting) return;
    if (window.confirm(`Are you sure you want to delete ${lawyer.name}?`)) {
      setDeleting(true);
      const res = await fetch(`/api/lawyers/${lawyer.id}`, { method: 'DELETE' });
      setDeleting(false);
      if (res.ok) router.refresh();
      else alert('Failed to delete lawyer');
    }
  };

  return (
    <div className="attorney-profile-card relative">
      <Image
        src={lawyer.image || '/photos/default-headshot.jpg'}
        alt={lawyer.name}
        width={220}
        height={260}
        className="attorney-profile-image"
      />
      <div className="attorney-profile-content">
        <div className="attorney-profile-name">{lawyer.name}</div>
        <div className="attorney-profile-title">{lawyer.title}</div>
        {lawyer.specialties && (
          <div className="attorney-profile-specialties">
            <strong>Specialties:</strong> {Array.isArray(lawyer.specialties) ? lawyer.specialties.join(', ') : lawyer.specialties}
          </div>
        )}
        {lawyer.bio && (
          <div className="attorney-profile-bio">{lawyer.bio}</div>
        )}
        {lawyer.email && (
          <div className="attorney-profile-extra"><strong>Email:</strong> {lawyer.email}</div>
        )}
        {lawyer.phone && (
          <div className="attorney-profile-extra"><strong>Phone:</strong> {lawyer.phone}</div>
        )}
        <div className="flex gap-3 mt-6">
          <Link href={`/admin/lawyers/${lawyer.id}/edit`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded hover:bg-blue-200 transition-colors gap-2 shadow">
            <Edit className="h-4 w-4" /> Edit
          </Link>
          <button
            onClick={handleDelete}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-red-700 bg-red-100 rounded hover:bg-red-200 transition-colors gap-2 shadow"
            type="button"
            disabled={deleting}
          >
            <Trash2 className="h-4 w-4" /> {deleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LawyersManagementClient({ lawyers }: LawyersManagementClientProps) {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-navy-primary mb-1">Manage Lawyers</h1>
          <p className="text-gray-600">Add, edit, and organize attorney profiles</p>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/api/auth/signout" className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium border border-gray-200 transition-colors">
            Logout
          </Link>
          <Link 
            href="/admin/lawyers/new" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors flex items-center gap-2 shadow-md"
          >
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