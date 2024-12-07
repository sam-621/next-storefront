import { redirect } from 'next/navigation';

import { CartSummary, CheckoutContentLayout, InformationForm } from '@/components/checkout';
import { getCart, getCountries } from '@/lib/cart/data';

export default async function CheckoutPage() {
  const cart = await getCart();
  const countries = await getCountries();

  if (!cart) {
    redirect('/');
  }

  return (
    <CheckoutContentLayout>
      <CheckoutContentLayout.Section>
        <InformationForm cart={cart} countries={countries} />
      </CheckoutContentLayout.Section>

      <CheckoutContentLayout.Section className="bg-gray-50">
        <CartSummary cart={cart} />
      </CheckoutContentLayout.Section>
    </CheckoutContentLayout>
  );
}
