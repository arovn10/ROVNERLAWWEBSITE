"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, FileText, LogOut, Settings } from "lucide-react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Still loading
    if (!session) router.push("/admin/login");
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: "/admin/login" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {session.user.name || session.user.email}</p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Manage Lawyers Card */}
            <Link href="/admin/lawyers" className="block">
              <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Manage Lawyers
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          Add, edit, and organize attorney profiles
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-3">
                  <div className="text-sm text-blue-600 font-medium">
                    View all lawyers →
                  </div>
                </div>
              </div>
            </Link>

            {/* Manage Settlements Card */}
            <Link href="/admin/settlements" className="block">
              <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <FileText className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Manage Settlements
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          Add and update recent settlements & verdicts
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-3">
                  <div className="text-sm text-green-600 font-medium">
                    View all settlements →
                  </div>
                </div>
              </div>
            </Link>

            {/* Website Settings Card */}
            <Link href="/admin/settings" className="block">
              <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Settings className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Website Settings
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          Configure site settings and content
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-3">
                  <div className="text-sm text-purple-600 font-medium">
                    Manage settings →
                  </div>
                </div>
              </div>
            </Link>

          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/admin/lawyers/new">Add New Lawyer</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/admin/settlements/new">Add New Settlement</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/" target="_blank">View Website</Link>
              </Button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
            <div className="bg-white shadow rounded-lg">
              <div className="p-6">
                <p className="text-gray-500">No recent activity to display.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 