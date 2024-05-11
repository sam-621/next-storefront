'use client';

import { CheckoutFormCard } from '@/app/checkout/components/checkout-form-card';
import { Scroll } from '@/ui/components/scroll';
import { OptionCardSkeleton } from '@/ui/components/skeletons';

export const PaymentMethodsSkeleton = () => {
  return (
    <>
      <CheckoutFormCard title="Métodos de pago">
        <div className="flex gap-4">
          <OptionCardSkeleton />
          <OptionCardSkeleton />
        </div>
      </CheckoutFormCard>
      {/*
       * This is used because we redirect from a server action and the redirect method does not have a way to scroll to the top of the page.
       * This is a workaround to scroll to the top of the page when the component is mounted.
       * We decided put it here because this is the skeleton component that is shown while the payment methods are being fetched.
       */}
      <Scroll />
    </>
  );
};
