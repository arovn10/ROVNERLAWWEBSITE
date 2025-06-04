"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, ArrowLeft } from "lucide-react";

interface Lawyer {
  id: string;
  name: string;
  title?: string;
  bio?: string;
  education?: string;
  experience?: string;
  specialties?: string;
  image?: string;
  email?: string;
  phone?: string;
  order: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function LawyersManagement() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/admin/login");
  }, [session, status, router]);

  useEffect(() => {
    fetchLawyers();
  }, []);

  const fetchLawyers = async () => {
    try {
      const response = await fetch("/api/lawyers");
      if (response.ok) {
        const data = await response.json();
        setLawyers(data);
      }
    } catch (error) {
      console.error("Failed to fetch lawyers:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteLawyer = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lawyer?")) return;

    try {
      const response = await fetch(`/api/lawyers/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setLawyers(lawyers.filter(lawyer => lawyer.id !== id));
      } else {
        alert("Failed to delete lawyer");
      }
    } catch (error) {
      console.error("Failed to delete lawyer:", error);
      alert("Failed to delete lawyer");
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/admin/dashboard" className="mr-4">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Manage Lawyers</h1>
                <p className="text-gray-600">Add, edit, and organize attorney profiles</p>
              </div>
            </div>
            <Button asChild>
              <Link href="/admin/lawyers/new">
                <Plus className="h-4 w-4 mr-2" />
                Add New Lawyer
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {lawyers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">No lawyers found</p>
              <Button asChild>
                <Link href="/admin/lawyers/new">Add Your First Lawyer</Link>
              </Button>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {lawyers.map((lawyer) => (
                  <li key={lawyer.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-16 w-16">
                            {lawyer.image ? (
                              <img
                                className="h-16 w-16 rounded-full object-cover"
                                src={lawyer.image}
                                alt={lawyer.name}
                              />
                            ) : (
                              <div className="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600 font-medium text-lg">
                                  {lawyer.name.charAt(0)}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center">
                              <p className="text-lg font-medium text-gray-900">
                                {lawyer.name}
                              </p>
                              {!lawyer.active && (
                                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  Inactive
                                </span>
                              )}
                            </div>
                            {lawyer.title && (
                              <p className="text-sm text-gray-600">{lawyer.title}</p>
                            )}
                            {lawyer.email && (
                              <p className="text-sm text-gray-500">{lawyer.email}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/admin/lawyers/${lawyer.id}/edit`}>
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteLawyer(lawyer.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                      {lawyer.bio && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {lawyer.bio.substring(0, 200)}
                            {lawyer.bio.length > 200 && "..."}
                          </p>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 