import { Suspense } from 'react';

import { redirect } from 'next/navigation';

import { CheckoutStepsValues } from '@/lib/constants';

import { getCart } from '../cart/data';
import { CheckoutForm } from './components/checkout-info-form/checkout-info-form';
import { OrderSummary } from './components/order-summary/order-summary';
import { PaymentMethods } from './components/payment-methods-form/payment-methods';
import { PaymentMethodsSkeleton } from './components/payment-methods-skeleton';

export default async function Checkout({ searchParams }: Props) {
  const cart = await getCart();

  const currentStep = searchParams.step;

  if (!cart || !cart?.lines?.items?.length) {
    redirect('/');
  }

  return (
    <main className="grid grid-cols-2 min-h-screen mx-3 md:mx-8 lg:mx-12 xl:mx-auto max-w-7xl">
      <div className="pt-10 pl-8 pr-24 flex flex-col gap-10 pb-32">
        {currentStep === CheckoutStepsValues.information && <CheckoutForm order={cart} />}
        {currentStep === CheckoutStepsValues.payment && (
          <Suspense fallback={<PaymentMethodsSkeleton />}>
            <PaymentMethods />
          </Suspense>
        )}
      </div>
      <div className="bg-gray-50 pr-8 pl-24 pt-10 pb-32">
        <OrderSummary order={cart} />
      </div>
    </main>
  );
}

interface Props {
  searchParams: { step: CheckoutStepsValues };
}
