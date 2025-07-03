import { prisma } from '@/lib/prisma';
import AttorneysClient from './AttorneysClient';

export default async function AttorneysPage() {
  const attorneys = await prisma.lawyer.findMany({
    where: { active: true },
    orderBy: { order: 'asc' },
  });
  return <AttorneysClient attorneys={attorneys} />;
} 