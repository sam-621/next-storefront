'use client';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams } from 'next/navigation';

import { CheckoutStepsField, CheckoutStepsValues } from '@/lib/constants';
import { cn } from '@/ui/utils';

export const CheckoutSteps = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentStep = searchParams.get(CheckoutStepsField);

  const isInInformationStep = currentStep === CheckoutStepsValues.information;
  const isInPaymentStep = currentStep === CheckoutStepsValues.payment;
  const isInCompleteStep = pathname === '/checkout/success';

  return (
    <div className="flex gap-4 items-center justify-center w-full">
      <p className={cn('text-sm', isInInformationStep ? 'text-indigo-600' : 'text-gray-700')}>
        Información de contácto
      </p>
      <ChevronRightIcon className="size-3 text-gray-300" />
      <p className={cn('text-sm', isInPaymentStep ? 'text-indigo-600' : 'text-gray-700')}>
        Método de pago
      </p>
      <ChevronRightIcon className="size-3 text-gray-300" />
      <p className={cn('text-sm', isInCompleteStep ? 'text-indigo-600' : 'text-gray-700')}>
        Compra completada
      </p>
    </div>
  );
};
