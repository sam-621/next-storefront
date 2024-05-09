import { redirect } from 'next/navigation';

import { getCart } from '../cart/data';
import { CheckoutForm } from './components/checkout-forms/checkout-info-form';
import { OrderSummary } from './components/order-summary/order-summary';

export default async function Checkout() {
  const cart = await getCart();

  if (!cart) {
    redirect('/');
  }

  return (
    <main className="grid grid-cols-2 min-h-screen mx-3 md:mx-8 lg:mx-12 xl:mx-auto max-w-7xl">
      <div className="pt-10 pl-8 pr-24 flex flex-col gap-10 pb-32">
        <CheckoutForm order={cart} />
      </div>
      <div className="bg-gray-50 pr-8 pl-24 pt-10 pb-32">
        <OrderSummary order={cart} />
      </div>
    </main>
  );
}
