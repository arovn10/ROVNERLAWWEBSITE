import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Users, Newspaper, Award, Archive, LogOut, Home } from "lucide-react";
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
    { href: "/admin", label: "Dashboard", icon: Home },
    { href: "/admin/lawyers", label: "Lawyers", icon: Users },
    { href: "/admin/news", label: "In the News", icon: Newspaper },
    { href: "/admin/settlements", label: "Recent Settlements", icon: Award },
    { href: "/admin/archives", label: "Bob Rovner Archives", icon: Archive },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-gray-100 font-sans">
      {/* Modern Sidebar */}
      <aside className="w-80 h-screen fixed inset-y-0 left-0 z-30 flex flex-col justify-between"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRight: "1px solid rgba(200,200,200,0.3)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
        }}
      >
        <div>
          {/* Header */}
          <div className="px-8 py-8 border-b border-gray-200/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg">
                <Home className="h-5 w-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">Admin</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Law Firm Management</p>
          </div>
          
          {/* Navigation */}
          <nav className="mt-6 px-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "flex items-center px-4 py-3 rounded-xl text-base font-medium gap-3 transition-all duration-200 group",
                        "hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm border border-transparent hover:border-blue-100"
                      )}
                    >
                      <Icon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        
        {/* Footer */}
        <div className="px-4 py-6 border-t border-gray-200/60">
          <div className="mb-4 px-4 py-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                {session?.user?.name?.[0]?.toUpperCase() || "A"}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {session?.user?.name || session?.user?.email || "Admin"}
                </div>
                <div className="text-xs text-gray-500">Administrator</div>
              </div>
            </div>
          </div>
          
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-3 px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl font-medium border border-red-100 transition-colors w-full justify-center shadow-sm hover:shadow-md"
          >
            <LogOut className="h-4 w-4" /> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-80 min-h-screen flex flex-col">
        {/* Top Bar */}
        <header className="bg-white/80 shadow-sm border-b border-gray-200 px-8 py-6 flex items-center justify-between sticky top-0 z-20 backdrop-blur-xl">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Admin Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your law firm's digital presence</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-gray-500">Welcome back</div>
              <div className="font-semibold text-gray-900">
                {session?.user?.name || session?.user?.email || "Admin"}
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
              {session?.user?.name?.[0]?.toUpperCase() || "A"}
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 