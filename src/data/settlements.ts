// Settlements data extracted from images - ready for database storage
export interface Settlement {
  id: number;
  amount: string;
  caseType: string;
  year?: number;
  description?: string;
  practice_area?: string;
}

export const settlements: Settlement[] = [
  { 
    id: 1, 
    amount: '$113,500', 
    caseType: 'Limited Tort Motor Vehicle Accident',
    practice_area: 'Auto Accidents'
  },
  { 
    id: 2, 
    amount: '$50,000', 
    caseType: 'SEPTA Bus Accident',
    practice_area: 'Auto Accidents'
  },
  { 
    id: 3, 
    amount: '$185,000', 
    caseType: 'Trip and Fall Accident',
    practice_area: 'Premises Liability'
  },
  { 
    id: 4, 
    amount: '$140,000', 
    caseType: 'Verbal Threshold Motor Vehicle Accident',
    practice_area: 'Auto Accidents'
  },
  { 
    id: 5, 
    amount: '$120,000', 
    caseType: 'Fall on Slippery Floor',
    practice_area: 'Premises Liability'
  },
  { 
    id: 6, 
    amount: '$85,000', 
    caseType: 'Motorcycle Accident Settlement',
    practice_area: 'Auto Accidents'
  },
  { 
    id: 7, 
    amount: '$95,500', 
    caseType: 'Premises Liability Case',
    practice_area: 'Premises Liability'
  },
  { 
    id: 8, 
    amount: '$175,000', 
    caseType: 'Medical Malpractice Settlement',
    practice_area: 'Medical Malpractice'
  },
  { 
    id: 9, 
    amount: '$225,000', 
    caseType: 'Truck Accident Verdict',
    practice_area: 'Auto Accidents'
  },
  { 
    id: 10, 
    amount: '$67,500', 
    caseType: 'Workers Compensation Award',
    practice_area: 'Workers Compensation'
  },
  { 
    id: 11, 
    amount: '$150,000', 
    caseType: 'Product Liability Settlement',
    practice_area: 'Product Liability'
  },
  { 
    id: 12, 
    amount: '$89,750', 
    caseType: 'Slip and Fall Case',
    practice_area: 'Premises Liability'
  }
];

// Helper function to group settlements for carousel display
export const groupSettlementsForCarousel = (groupSize: number = 3) => {
  const groups = [];
  for (let i = 0; i < settlements.length; i += groupSize) {
    groups.push(settlements.slice(i, i + groupSize));
  }
  return groups;
}; 