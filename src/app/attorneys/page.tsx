import { prisma } from '@/lib/prisma';
import AttorneysClient from './AttorneysClient';

export default async function AttorneysPage() {
  const attorneys = await prisma.lawyer.findMany({
    where: { active: true },
    orderBy: { order: 'asc' },
  });
  
  console.log('Attorneys fetched with order:', attorneys.map(a => ({ name: a.name, order: a.order })));
  
  return <AttorneysClient attorneys={attorneys} />;
} 