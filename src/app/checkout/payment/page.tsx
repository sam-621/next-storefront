import { redirect } from 'next/navigation';

import { CartSummary, CheckoutContentLayout, PaymentForm } from '@/components/checkout';
import { getAvailablePaymentMethods, getCart } from '@/lib/cart/data';
import { Scroll } from '@/lib/shared/components';

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
