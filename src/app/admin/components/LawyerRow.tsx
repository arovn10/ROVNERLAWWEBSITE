'use client';

import Link from 'next/link';

interface Lawyer {
  id: string;
  name: string;
  title?: string;
  email?: string;
  phone?: string;
  order: number;
  active: boolean;
}

export default function LawyerRow({ lawyer }: { lawyer: Lawyer }) {
  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this lawyer?')) {
      try {
        const response = await fetch(`/api/lawyers/${lawyer.id}`, { 
          method: 'DELETE' 
        });
        
        if (response.ok) {
          window.location.reload();
        } else {
          alert('Failed to delete lawyer');
        }
      } catch (error) {
        console.error('Error deleting lawyer:', error);
        alert('Failed to delete lawyer');
      }
    }
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lawyer.name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.title || '-'}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.email || '-'}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.phone || '-'}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.order}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          lawyer.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {lawyer.active ? 'Active' : 'Inactive'}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
        <Link 
          href={`/admin/lawyers/${lawyer.id}/edit`} 
          className="text-blue-600 hover:text-blue-900 transition-colors"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-900 transition-colors"
        >
          Delete
        </button>
      </td>
    </tr>
  );
} 