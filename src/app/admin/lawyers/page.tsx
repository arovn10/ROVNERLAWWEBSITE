import Link from 'next/link';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Image from 'next/image';
import { Edit, Trash2, Plus, LogIn, LogOut } from 'lucide-react';

export default async function LawyersManagement() {
  const session = await getServerSession();
  if (!session) {
    redirect('/admin/login');
  }

  // Fetch all lawyers from the database
  const lawyers = await prisma.lawyer.findMany({
    orderBy: { order: 'asc' }
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Lawyers</h1>
          <p className="text-gray-600 mt-1">Add, edit, and organize attorney profiles</p>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/api/auth/signout" className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium border border-gray-200 transition-colors">
            <LogOut className="h-5 w-5" /> Logout
          </Link>
          <Link 
            href="/admin/lawyers/new" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Plus className="h-5 w-5" /> Add Lawyer
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {lawyers.map(lawyer => (
          <div key={lawyer.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              {lawyer.image ? (
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover border border-gray-200 shadow"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-400">
                  {lawyer.name.charAt(0)}
                </div>
              )}
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">{lawyer.name}</h2>
            {lawyer.title && <p className="text-sm text-gray-600 mb-2">{lawyer.title}</p>}
            <div className="flex gap-2 justify-center mt-2">
              <Link href={`/admin/lawyers/${lawyer.id}/edit`} className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded hover:bg-blue-200 transition-colors">
                <Edit className="h-4 w-4 mr-1" /> Edit
              </Link>
              <Link href={`/admin/lawyers/${lawyer.id}/delete`} className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-red-700 bg-red-100 rounded hover:bg-red-200 transition-colors">
                <Trash2 className="h-4 w-4 mr-1" /> Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 