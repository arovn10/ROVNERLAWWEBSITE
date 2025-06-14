import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import LawyersManagementClient from './LawyersManagementClient';

interface Lawyer {
  id: string;
  name: string;
  title?: string;
  bio?: string;
  education?: string;
  experience?: string;
  specialties?: string;
  email?: string;
  phone?: string;
  image?: string;
  active?: boolean;
}

export default async function LawyersManagement() {
  const session = await getServerSession();
  if (!session) {
    redirect('/admin/login');
  }
  const lawyers = await prisma.lawyer.findMany({ orderBy: { order: 'asc' } });
  return <LawyersManagementClient lawyers={lawyers as Lawyer[]} />;
} 