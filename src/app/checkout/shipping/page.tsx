import { redirect } from 'next/navigation';

import { getCart } from '@/lib/cart';
import { CheckoutContentLayout, getAvailableShippingMethods } from '@/lib/checkout';
import { Scroll } from '@/lib/common';

import { CartSummary } from '../components/cart-summary/cart-summary';
import { ShippingForm } from '../components/shipping-form/shipping-form';

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
          <ShippingForm methods={methods} defaultSelected={cart.shipment?.method} />
        </CheckoutContentLayout.Section>
        <CheckoutContentLayout.Section className="bg-gray-50">
          <CartSummary cart={cart} />
        </CheckoutContentLayout.Section>
      </CheckoutContentLayout>
      <Scroll />
    </>
  );
}
