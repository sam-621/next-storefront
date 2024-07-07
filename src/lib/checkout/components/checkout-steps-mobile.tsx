'use client';

import { usePathname } from 'next/navigation';

export const CheckoutStepsMobile = () => {
  const pathname = usePathname();

  const isInInformationStep = pathname === '/checkout/information';
  const isInShippingStep = pathname === '/checkout/shipping';
  const isInPaymentStep = pathname === '/checkout/payment';

  const text = isInInformationStep
    ? 'Step 1 of 3'
    : isInShippingStep
      ? 'Step 2 of 3'
      : isInPaymentStep
        ? 'Step 3 of 3'
        : 'Complete';

  return <span className="text-gray-700 font-medium">{text}</span>;
};
