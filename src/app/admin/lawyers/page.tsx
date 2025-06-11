import Link from 'next/link';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Image from 'next/image';
import { Edit, Trash2, Plus, LogOut } from 'lucide-react';
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