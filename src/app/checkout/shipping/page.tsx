import { redirect } from 'next/navigation';

import { CartSummary, CheckoutContentLayout, ShippingForm } from '@/components/checkout';
import { getAvailableShippingMethods, getCart } from '@/lib/cart/data';
import { Scroll } from '@/lib/shared/components';

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
