import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 font-sans">
      <header className="bg-blue-900 text-white shadow-md py-4 px-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Rovner Law Admin</h1>
        <a href="/" className="text-blue-200 hover:text-white transition-colors">View Site</a>
      </header>
      <main className="max-w-4xl mx-auto py-8 px-4">
        {children}
      </main>
    </div>
  );
} 