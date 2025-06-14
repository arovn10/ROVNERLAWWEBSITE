"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, FileText, Settings } from "lucide-react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [firmName, setFirmName] = useState("");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/admin/login");
  }, [session, status, router]);

  useEffect(() => {
    fetch("/api/settings/firm-name")
      .then((res) => res.json())
      .then((data) => setFirmName(data.firmName || ""));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSuccess(false);
    const res = await fetch("/api/settings/firm-name", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firmName }),
    });
    if (res.ok) setSuccess(true);
    setSaving(false);
  };

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

  return (
    <div className="space-y-10">
      {/* Main Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link href="/admin/lawyers" className="group block rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100 hover:border-blue-200">
          <div className="flex items-center gap-4 mb-4">
            <Users className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold text-gray-900">Lawyers</span>
          </div>
          <p className="text-gray-500 text-sm">Add, edit, and organize attorney profiles</p>
        </Link>
        <Link href="/admin/settlements" className="group block rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100 hover:border-green-200">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold text-gray-900">Settlements</span>
          </div>
          <p className="text-gray-500 text-sm">Add and update recent settlements & verdicts</p>
        </Link>
        <Link href="/admin/news" className="group block rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100 hover:border-yellow-200">
          <div className="flex items-center gap-4 mb-4">
            <Settings className="h-8 w-8 text-yellow-600 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold text-gray-900">In the News</span>
          </div>
          <p className="text-gray-500 text-sm">Manage news and press mentions</p>
        </Link>
        <Link href="/admin/archives" className="group block rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100 hover:border-purple-200">
          <div className="flex items-center gap-4 mb-4">
            <Settings className="h-8 w-8 text-purple-600 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold text-gray-900">Archives</span>
          </div>
          <p className="text-gray-500 text-sm">Access the Bob Rovner archives</p>
        </Link>
      </div>

      {/* Settings Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Settings className="h-6 w-6 text-blue-600" /> Firm Name Settings
        </h2>
        <div className="flex flex-col gap-4 max-w-lg">
          <label htmlFor="firmName" className="font-medium text-gray-700">Firm Name</label>
          <input
            id="firmName"
            type="text"
            value={firmName}
            onChange={e => setFirmName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-lg"
            disabled={saving}
          />
          <Button onClick={handleSave} disabled={saving} className="w-fit bg-blue-600 text-white mt-2">
            {saving ? 'Saving...' : 'Save'}
          </Button>
          {success && <span className="text-green-600 font-medium">Firm name updated!</span>}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 mt-8">
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md">
          <Link href="/admin/lawyers/new">+ Add New Lawyer</Link>
        </Button>
        <Button asChild variant="outline" className="px-6 py-3 rounded-lg shadow-md">
          <Link href="/admin/settlements/new">+ Add New Settlement</Link>
        </Button>
        <Button asChild variant="outline" className="px-6 py-3 rounded-lg shadow-md">
          <Link href="/" target="_blank">View Website</Link>
        </Button>
      </div>

      {/* Recent Activity Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <p className="text-gray-500">No recent activity to display.</p>
      </div>
    </div>
  );
} 