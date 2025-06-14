import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Users, Newspaper, Award, Archive, LogOut } from "lucide-react";
import clsx from "clsx";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/admin/login");
  }

  const navItems = [
    { href: "/admin/lawyers", label: "Lawyers", icon: Users },
    { href: "/admin/news", label: "In the News", icon: Newspaper },
    { href: "/admin/settlements", label: "Recent Settlements", icon: Award },
    { href: "/admin/archives", label: "Bob Rovner Archives", icon: Archive },
  ];

  // Get current path for active nav (client-side would use usePathname, but here we just style all as non-active)

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-100 to-blue-50 font-sans">
      {/* Glassmorphism Sidebar */}
      <aside className="w-72 h-screen fixed inset-y-0 left-0 z-30 flex flex-col justify-between px-0 py-0"
        style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRight: "1.5px solid rgba(200,200,200,0.25)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.12)",
        }}
      >
        <div>
          <div className="px-8 py-8 flex items-center gap-3">
            <span className="text-3xl font-bold tracking-tight text-gray-900 drop-shadow-sm">Admin</span>
          </div>
          <nav className="mt-8">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "flex items-center px-8 py-4 rounded-xl text-lg font-semibold gap-4 transition-all group",
                        "hover:bg-blue-100/60 hover:text-blue-700 hover:shadow-md"
                      )}
                    >
                      <span className="w-2 h-8 mr-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                      <Icon className="h-7 w-7 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="px-8 py-6 border-t border-gray-200/60">
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-3 px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl font-semibold border border-red-100 transition-colors w-full justify-center shadow-sm"
          >
            <LogOut className="h-5 w-5" /> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-72 min-h-screen flex flex-col">
        {/* Top Bar */}
        <header className="bg-white/80 shadow-sm border-b border-gray-200 px-12 py-6 flex items-center justify-between sticky top-0 z-20 backdrop-blur-xl">
          <div className="text-2xl font-semibold text-gray-900 tracking-tight">Admin Dashboard</div>
          <div className="flex items-center gap-5">
            <div className="text-base text-gray-700 font-medium">
              {session?.user?.name || session?.user?.email || "Admin"}
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg shadow-inner border border-gray-300">
              {session?.user?.name?.[0]?.toUpperCase() || "A"}
            </div>
          </div>
        </header>
        <main className="flex-1 p-12 bg-gradient-to-br from-gray-100 to-blue-50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 