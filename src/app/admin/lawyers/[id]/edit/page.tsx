import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import LawyerForm from "@/app/admin/components/LawyerForm";

interface PageProps {
  params: { id: string };
}

export default async function EditLawyerPage({ params }: PageProps) {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/admin/login');
  }

  const { id } = params;
  
  const lawyer = await prisma.lawyer.findUnique({
    where: { id }
  });

  if (!lawyer) {
    redirect('/admin');
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Edit Lawyer</h1>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Edit {lawyer.name}</h2>
        </div>
        <div className="p-6">
          <LawyerForm lawyer={lawyer} />
        </div>
      </div>
    </div>
  );
} 