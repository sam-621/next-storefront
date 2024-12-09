import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format phone number to 1234 567 890
 */
export const formatPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) return '';

  const formattedNumber = phoneNumber?.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');

  return formattedNumber;
};
