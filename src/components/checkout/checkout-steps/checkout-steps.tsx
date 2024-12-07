'use client';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/shared/utils';

export const CheckoutSteps = () => {
  const pathname = usePathname();

  const isInInformationStep = pathname === '/checkout/information';
  const isInShippingStep = pathname === '/checkout/shipping';
  const isInPaymentStep = pathname === '/checkout/payment';

  return (
    <div className="flex gap-4 items-center justify-center w-full">
      <p className={cn('text-sm', isInInformationStep ? 'text-indigo-600' : 'text-gray-700')}>
        Information
      </p>
      <ChevronRightIcon className="size-3 text-gray-300" />
      <p className={cn('text-sm', isInShippingStep ? 'text-indigo-600' : 'text-gray-700')}>
        Shipping
      </p>
      <ChevronRightIcon className="size-3 text-gray-300" />
      <p className={cn('text-sm', isInPaymentStep ? 'text-indigo-600' : 'text-gray-700')}>
        Payment
      </p>
    </div>
  );
};
