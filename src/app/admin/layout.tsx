import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Settings, FileText, Briefcase, Users, Plus, Edit, Trash2, Eye, ExternalLink, Home, LogOut } from "lucide-react";
import clsx from "clsx";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  // TEMPORARILY DISABLED - Server-side session check and redirect
  // if (!session) {
  //   redirect("/admin/login");
  // }

  const navItems = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/lawyers", label: "Lawyers" },
    { href: "/admin/practice-areas", label: "Practice Areas" },
    { href: "/admin/news", label: "In the News" },
    { href: "/admin/settlements", label: "Settlements" },
    { href: "/admin/archives", label: "Archives" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 font-sans">
      {/* Top Navigation Bar */}
      <nav
        className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-200 flex items-center justify-between px-10 py-4"
        style={{ minHeight: 72 }}
      >
        {/* Logo/Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg">
            <Home className="h-5 w-5" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">Admin</span>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-base font-medium px-3 py-2 rounded-lg transition-all duration-150",
                "hover:bg-blue-50 hover:text-blue-700",
                "text-gray-700"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* User/Account Menu */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <div className="text-xs text-gray-500">Welcome back</div>
            <div className="font-semibold text-gray-900">
              {session?.user?.name || session?.user?.email || "Admin"}
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
            {session?.user?.name?.[0]?.toUpperCase() || "A"}
          </div>
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg font-medium border border-red-100 transition-colors shadow-sm hover:shadow-md"
          >
            <LogOut className="h-4 w-4" /> Logout
          </Link>
        </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 p-8 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
} 