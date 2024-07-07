import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { getCart } from '@/lib/cart';
import { CartSummary, CheckoutContentLayout } from '@/lib/checkout/components';

export default async function CheckoutSuccessPage({ searchParams }: Props) {
  const cart = await getCart();

  if (!cart) {
    redirect('/');
  }

  return (
    <CheckoutContentLayout>
      <CheckoutContentLayout.Section className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">Thanks for your purchase!</h1>
        <p className="mt-4 text-center">
          We will send you an email with the details of your order.
        </p>
        <Link
          href="/"
          className="flex items-center justify-center gap-2  mt-8 text-indigo-600 cursor-pointer text-center"
        >
          Keep buying
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </CheckoutContentLayout.Section>
      <CheckoutContentLayout.Section className="bg-gray-50">
        <CartSummary cart={cart} />
      </CheckoutContentLayout.Section>
    </CheckoutContentLayout>
  );
}

type Props = {
  searchParams: { code: string };
};
