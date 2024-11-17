import { redirect } from 'next/navigation';

import { getCart } from '@/lib/cart';
import {
  CartSummary,
  CheckoutContentLayout,
  getAvailableShippingMethods,
  ShippingForm
} from '@/lib/checkout';
import { Scroll } from '@/lib/shared';

export default async function ShippingPage() {
  const cart = await getCart();

  if (!cart) {
    redirect('/');
  }

  const methods = await getAvailableShippingMethods(cart.id);

  return (
    <>
      <CheckoutContentLayout>
        <CheckoutContentLayout.Section sticky>
          <ShippingForm methods={methods} shipment={cart.shipment} />
        </CheckoutContentLayout.Section>
        <CheckoutContentLayout.Section className="bg-gray-50">
          <CartSummary cart={cart} />
        </CheckoutContentLayout.Section>
      </CheckoutContentLayout>
      <Scroll />
    </>
  );
}
