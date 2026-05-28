import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fixLawyerOrders() {
  console.log('Starting to fix lawyer orders...');
  
  try {
    // Get all lawyers ordered by their current order
    const lawyers = await prisma.lawyer.findMany({
      orderBy: { order: 'asc' }
    });
    
    console.log(`Found ${lawyers.length} lawyers`);
    
    // Find the highest order number
    const highestOrder = Math.max(...lawyers.map(l => l.order));
    console.log(`Highest current order: ${highestOrder}`);
    
    // Find lawyers with order 0 (these should be moved to the bottom)
    const lawyersWithZeroOrder = lawyers.filter(l => l.order === 0);
    
    if (lawyersWithZeroOrder.length === 0) {
      console.log('No lawyers with order 0 found. All orders are correct.');
      return;
    }
    
    console.log(`Found ${lawyersWithZeroOrder.length} lawyers with order 0 that need to be moved to the bottom`);
    
    // Update each lawyer with order 0 to have a new order at the bottom
    for (let i = 0; i < lawyersWithZeroOrder.length; i++) {
      const lawyer = lawyersWithZeroOrder[i];
      const newOrder = highestOrder + i + 1;
      
      await prisma.lawyer.update({
        where: { id: lawyer.id },
        data: { order: newOrder }
      });
      
      console.log(`Updated ${lawyer.name} from order 0 to order ${newOrder}`);
    }
    
    console.log('Successfully fixed all lawyer orders!');
    
    // Show the final order
    const finalLawyers = await prisma.lawyer.findMany({
      orderBy: { order: 'asc' }
    });
    
    console.log('\nFinal lawyer order:');
    finalLawyers.forEach((lawyer, index) => {
      console.log(`${index + 1}. ${lawyer.name} (order: ${lawyer.order})`);
    });
    
  } catch (error) {
    console.error('Error fixing lawyer orders:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fixLawyerOrders(); 