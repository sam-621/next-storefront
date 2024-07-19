import { redirect } from 'next/navigation';

import { getCart } from '@/lib/cart';
import { CheckoutContentLayout } from '@/lib/checkout';

import { CartSummary } from '../components/cart-summary/cart-summary';
import { InformationForm } from '../components/information-form/information-form';

export default async function CheckoutPage() {
  const cart = await getCart();

  if (!cart) {
    redirect('/');
  }

  return (
    <CheckoutContentLayout>
      <CheckoutContentLayout.Section>
        <InformationForm cart={cart} />
      </CheckoutContentLayout.Section>

      <CheckoutContentLayout.Section className="bg-gray-50">
        <CartSummary cart={cart} />
      </CheckoutContentLayout.Section>
    </CheckoutContentLayout>
  );
}
