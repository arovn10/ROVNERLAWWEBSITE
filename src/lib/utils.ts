import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: string): string {
  // Remove any non-numeric characters except decimal points
  const numericAmount = amount.replace(/[^\d.]/g, '')
  const number = parseFloat(numericAmount)
  
  if (isNaN(number)) return amount
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number)
} 