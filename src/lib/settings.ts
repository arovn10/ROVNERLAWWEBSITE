import { prisma } from './prisma';

export async function getFirmName() {
  const settings = await prisma.settings.findFirst();
  return settings?.firmName || 'Law Firm';
}

export async function setFirmName(firmName: string) {
  const settings = await prisma.settings.findFirst();
  if (settings) {
    return prisma.settings.update({ where: { id: settings.id }, data: { firmName } });
  } else {
    return prisma.settings.create({ data: { firmName } });
  }
} 