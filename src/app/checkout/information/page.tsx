import { redirect } from 'next/navigation';

import { getCart } from '@/lib/cart';
import { CartSummary, CheckoutContentLayout, getCountries, InformationForm } from '@/lib/checkout';

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
