"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';

export default function DeleteSubmissionButton({ id }: { id: string }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!confirm('Delete this submission? This cannot be undone.')) {
      return;
    }
    setIsDeleting(true);
    setError(null);

    try {
      const res = await fetch(`/api/contact-us/submissions/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Delete failed (${res.status})`);
      }
      router.push('/admin/contact-us/submissions');
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Delete failed');
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        type="button"
        onClick={handleDelete}
        disabled={isDeleting}
        className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg font-medium border border-red-100 transition-colors shadow-sm hover:shadow-md disabled:opacity-50"
      >
        <Trash2 className="h-4 w-4" />
        {isDeleting ? 'Deleting…' : 'Delete'}
      </button>
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
