import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { CartSummary, CheckoutContentLayout } from '@/lib/checkout';
import { getOrder } from '@/lib/orders';
import { type CartFragment, Scroll } from '@/lib/shared';

export default async function CheckoutSuccessPage({ searchParams }: Props) {
  const code = searchParams.code ?? '';
  const order = await getOrder(code);

  if (!order) {
    redirect('/');
  }

  return (
    <>
      <CheckoutContentLayout>
        <CheckoutContentLayout.Section className="flex flex-col items-center relative">
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
          <CartSummary cart={order as CartFragment} />
        </CheckoutContentLayout.Section>
      </CheckoutContentLayout>
      <Scroll />
    </>
  );
}

type Props = {
  searchParams: { code: string };
};
