import { redirect } from 'next/navigation';

import { getCart } from '@/lib/cart';
import { CartSummary, CheckoutContentLayout, PaymentForm } from '@/lib/checkout/components';
import { getAvailablePaymentMethods } from '@/lib/checkout/data';

export default async function PaymentPage() {
  const cart = await getCart();
  const methods = await getAvailablePaymentMethods();

  if (!cart) {
    redirect('/');
  }

  return (
    <CheckoutContentLayout>
      <CheckoutContentLayout.Section>
        <PaymentForm methods={methods} />
      </CheckoutContentLayout.Section>
      <CheckoutContentLayout.Section className="bg-gray-50">
        <CartSummary cart={cart} />
      </CheckoutContentLayout.Section>
    </CheckoutContentLayout>
  );
}
