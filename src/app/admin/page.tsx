import Link from 'next/link';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

interface Lawyer {
  id: string;
  name: string;
  title?: string;
  email?: string;
  phone?: string;
  order: number;
  active: boolean;
}

export default async function AdminDashboard() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/admin/login');
  }

  // Fetch all lawyers from the database
  const lawyers = await prisma.lawyer.findMany({
    orderBy: { order: 'asc' }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Rovner Law Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, {session.user?.email}</span>
              <Link href="/api/auth/signout" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Manage Lawyers</h2>
            <Link href="/admin/lawyers/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Add New Lawyer
            </Link>
          </div>
          <div className="border-t border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {lawyers.map((lawyer: Lawyer) => (
                  <tr key={lawyer.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lawyer.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.title || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.email || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.phone || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.order}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lawyer.active ? 'Yes' : 'No'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link href={`/admin/lawyers/${lawyer.id}/edit`} className="text-blue-600 hover:text-blue-900 mr-4">Edit</Link>
                      <button
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this lawyer?')) {
                            fetch(`/api/lawyers/${lawyer.id}`, { method: 'DELETE' })
                              .then(response => {
                                if (response.ok) {
                                  window.location.reload();
                                } else {
                                  alert('Failed to delete lawyer');
                                }
                              })
                              .catch(error => {
                                console.error('Error deleting lawyer:', error);
                                alert('Failed to delete lawyer');
                              });
                          }
                        }}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 