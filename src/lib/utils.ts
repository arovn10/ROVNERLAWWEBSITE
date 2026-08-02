import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: string | number): string {
  const number = typeof amount === 'number' ? amount : parseFloat(amount.replace(/[^\d.]/g, ''))

  if (isNaN(number)) return String(amount)

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number)
}

/**
 * Settlement amounts as a scannable headline figure — "$1.5 Million" rather
 * than "$1,500,000". This is how firms typically present recoveries, and it
 * reads faster in a card grid than a long run of digits.
 */
export function formatSettlementAmount(amount: number): string {
  if (amount >= 1_000_000) {
    const millions = amount / 1_000_000
    const rounded = Math.round(millions * 10) / 10
    return `$${rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1)} Million`
  }
  return formatCurrency(amount)
} 