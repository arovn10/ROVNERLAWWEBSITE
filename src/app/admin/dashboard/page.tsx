"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useFirmName } from "@/lib/FirmNameContext";
import { Users, FileText, Settings, Award, Archive, Plus, ExternalLink, Save, CheckCircle, Briefcase } from "lucide-react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { firmName, setFirmName } = useFirmName();
  const [localFirmName, setLocalFirmName] = useState(firmName);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Database counts
  const [counts, setCounts] = useState({
    lawyers: 0,
    practiceAreas: 0,
    settlements: 0,
    news: 0,
    archives: 0
  });
  const [loading, setLoading] = useState(true);

  // Update local state when context firm name changes
  useEffect(() => {
    setLocalFirmName(firmName);
  }, [firmName]);

  // Fetch counts from database
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        setLoading(true);
        const [lawyersRes, practiceAreasRes, settlementsRes, newsRes, archivesRes] = await Promise.all([
          fetch('/api/lawyers'),
          fetch('/api/practice-areas'),
          fetch('/api/settlements'),
          fetch('/api/news'),
          fetch('/api/archives')
        ]);

        const lawyers = await lawyersRes.json();
        const practiceAreas = await practiceAreasRes.json();
        const settlements = await settlementsRes.json();
        const news = await newsRes.json();
        const archives = await archivesRes.json();

        setCounts({
          lawyers: Array.isArray(lawyers) ? lawyers.length : 0,
          practiceAreas: Array.isArray(practiceAreas) ? practiceAreas.length : 0,
          settlements: Array.isArray(settlements) ? settlements.length : 0,
          news: Array.isArray(news) ? news.length : 0,
          archives: Array.isArray(archives) ? archives.length : 0
        });
      } catch (error) {
        console.error('Error fetching counts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  // TEMPORARILY DISABLED - Session check and redirect
  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/admin/login");
  }, [session, status, router]);

  const handleSave = async () => {
    setSaving(true);
    setSuccess(false);
    const res = await fetch("/api/settings/firm-name", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firmName: localFirmName }),
    });
    if (res.ok) {
      setFirmName(localFirmName);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
    setSaving(false);
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="text-lg font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Main Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <Link href="/admin/lawyers" className="group">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Lawyers</h3>
                <p className="text-sm text-gray-500">Manage attorneys</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Add, edit, and organize attorney profiles with photos and specialties</p>
            <div className="mt-3 text-sm font-semibold text-blue-600">
              {loading ? 'Loading...' : `${counts.lawyers} total`}
            </div>
          </div>
        </Link>

        <Link href="/admin/practice-areas" className="group">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Practice Areas</h3>
                <p className="text-sm text-gray-500">Manage areas</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Add, edit, and organize practice areas and specialties</p>
            <div className="mt-3 text-sm font-semibold text-indigo-600">
              {loading ? 'Loading...' : `${counts.practiceAreas} total`}
            </div>
          </div>
        </Link>

        <Link href="/admin/settlements" className="group">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Settlements</h3>
                <p className="text-sm text-gray-500">Track results</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Add and showcase recent settlements & verdicts to build credibility</p>
            <div className="mt-3 text-sm font-semibold text-green-600">
              {loading ? 'Loading...' : `${counts.settlements} total`}
            </div>
          </div>
        </Link>

        <Link href="/admin/news" className="group">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-yellow-200 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">In the News</h3>
                <p className="text-sm text-gray-500">Press mentions</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Manage news articles, press releases, and media appearances</p>
            <div className="mt-3 text-sm font-semibold text-yellow-600">
              {loading ? 'Loading...' : `${counts.news} total`}
            </div>
          </div>
        </Link>

        <Link href="/admin/archives" className="group">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Archive className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Archives</h3>
                <p className="text-sm text-gray-500">Bob Rovner</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Access and manage the historic Bob Rovner archives collection</p>
            <div className="mt-3 text-sm font-semibold text-purple-600">
              {loading ? 'Loading...' : `${counts.archives} total`}
            </div>
          </div>
        </Link>

        <Link href="/admin/about-us" className="group">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-orange-200 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">About Us</h3>
                <p className="text-sm text-gray-500">Edit content</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Edit the About Us page content including paragraphs and highlights</p>
            <div className="mt-3 text-sm font-semibold text-orange-600">
              Edit content
            </div>
          </div>
        </Link>

        <Link href="/admin/locations" className="group">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-teal-200 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Locations</h3>
                <p className="text-sm text-gray-500">Edit content</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Edit the Locations page content including office info and service areas</p>
            <div className="mt-3 text-sm font-semibold text-teal-600">
              Edit content
            </div>
          </div>
        </Link>

        <Link href="/admin/contact-us" className="group">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-pink-200 hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
                <p className="text-sm text-gray-500">Edit content</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Edit the Contact Us page content including contact info and why choose us</p>
            <div className="mt-3 text-sm font-semibold text-pink-600">
              Edit content
            </div>
          </div>
        </Link>
      </div>

      {/* Firm Settings Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
            <Settings className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Firm Settings</h2>
            <p className="text-sm text-gray-500">Update your firm's information</p>
          </div>
        </div>
        
        <div className="max-w-lg space-y-4">
          <div>
            <label htmlFor="firmName" className="block text-sm font-semibold text-gray-700 mb-2">
              Firm Name
            </label>
            <input
              id="firmName"
              type="text"
              value={localFirmName}
              onChange={e => setLocalFirmName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
              placeholder="Enter firm name..."
              disabled={saving}
            />
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleSave} 
              disabled={saving}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save Changes
                </>
              )}
            </button>
            
            {success && (
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <CheckCircle className="h-5 w-5" />
                Firm name updated!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Link href="/admin/lawyers/new">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]">
              <Plus className="h-4 w-4" />
              Add New Lawyer
            </button>
          </Link>
          
          <Link href="/admin/settlements/new">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] border border-gray-200 hover:border-gray-300">
              <Plus className="h-4 w-4" />
              Add New Settlement
            </button>
          </Link>
          
          <Link href="/" target="_blank">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] border border-gray-200 hover:border-gray-300">
              <ExternalLink className="h-4 w-4" />
              View Website
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Lawyers</p>
              <p className="text-2xl font-bold text-gray-900">
                {loading ? '...' : counts.lawyers}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Settlements</p>
              <p className="text-2xl font-bold text-gray-900">
                {loading ? '...' : counts.settlements}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <Award className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">News Articles</p>
              <p className="text-2xl font-bold text-gray-900">
                {loading ? '...' : counts.news}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 