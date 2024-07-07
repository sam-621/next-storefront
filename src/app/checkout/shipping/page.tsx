import { redirect } from 'next/navigation';

import { getCart } from '@/lib/cart';
import { CartSummary, CheckoutContentLayout, ShippingForm } from '@/lib/checkout/components';
import { getAvailableShippingMethods } from '@/lib/checkout/data';

export default async function ShippingPage() {
  const cart = await getCart();

  if (!cart) {
    redirect('/');
  }

  const methods = await getAvailableShippingMethods(cart.id);

  return (
    <CheckoutContentLayout>
      <CheckoutContentLayout.Section>
        <ShippingForm methods={methods} defaultSelected={cart.shipment?.method.id} />
      </CheckoutContentLayout.Section>
      <CheckoutContentLayout.Section className="bg-gray-50">
        <CartSummary cart={cart} />
      </CheckoutContentLayout.Section>
    </CheckoutContentLayout>
  );
}
