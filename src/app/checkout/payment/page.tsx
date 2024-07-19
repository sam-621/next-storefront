import { redirect } from 'next/navigation';

import { getCart } from '@/lib/cart';
import { CheckoutContentLayout, getAvailablePaymentMethods } from '@/lib/checkout';
import { Scroll } from '@/lib/common';

import { CartSummary } from '../components/cart-summary/cart-summary';
import { PaymentForm } from '../components/payment-form/payment-form';

export default async function PaymentPage() {
  const cart = await getCart();
  const methods = await getAvailablePaymentMethods();

  if (!cart) {
    redirect('/');
  }

  return (
    <>
      <CheckoutContentLayout>
        <CheckoutContentLayout.Section sticky>
          <PaymentForm methods={methods} />
        </CheckoutContentLayout.Section>
        <CheckoutContentLayout.Section className="bg-gray-50">
          <CartSummary cart={cart} />
        </CheckoutContentLayout.Section>
      </CheckoutContentLayout>
      <Scroll />
    </>
  );
}
