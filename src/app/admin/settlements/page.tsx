"use client";

import { useSession } from "next-auth/react";
import { Award, Plus } from "lucide-react";
import Link from "next/link";

export default function SettlementsPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="text-lg font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Recent Settlements</h1>
            <p className="text-green-100 text-lg">Manage and showcase your firm's successful cases</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-green-200">Welcome back</div>
              <div className="font-semibold">{session?.user?.name || session?.user?.email || "Admin"}</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg backdrop-blur-sm">
              {session?.user?.name?.[0]?.toUpperCase() || "A"}
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <Award className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Settlements Management</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          This feature is coming soon! You'll be able to add, edit, and manage your firm's recent settlements and verdicts to showcase your success and build credibility with potential clients.
        </p>
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]">
            <Plus className="h-4 w-4" />
            Add Settlement (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
} 