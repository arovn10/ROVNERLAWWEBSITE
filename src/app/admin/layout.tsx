import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Professional Header */}
      <header className="header border-b">
        <div className="header-content">
          <div className="firm-name-styled">
            <h1>Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h1>
            <h2>Admin Dashboard</h2>
          </div>
          <div className="header-contact">
            <Link href="/" className="cta-button">View Website</Link>
          </div>
        </div>
      </header>
      {/* Sticky Admin Navigation */}
      <nav className="navigation">
        <ul className="nav-list">
          <li><Link href="/admin" className="nav-link">Dashboard</Link></li>
          <li><Link href="/admin/lawyers" className="nav-link">Lawyers</Link></li>
          {/* Add more admin sections here if needed */}
        </ul>
      </nav>
      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-10 px-4">
        {children}
      </main>
    </div>
  );
} 