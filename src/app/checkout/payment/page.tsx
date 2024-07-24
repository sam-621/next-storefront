import { redirect } from 'next/navigation';

import { getCart } from '@/lib/cart';
import {
  CartSummary,
  CheckoutContentLayout,
  getAvailablePaymentMethods,
  PaymentForm
} from '@/lib/checkout';
import { Scroll } from '@/lib/shared';

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
