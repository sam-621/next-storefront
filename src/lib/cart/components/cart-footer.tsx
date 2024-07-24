import { type FC } from 'react';

import Link from 'next/link';

import { Button, type CartFragment, formatPrice } from '@/lib/shared';

export const CartFooter: FC<Props> = ({ cart }) => {
  return (
    <div className="border-t px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium">
        <p>Total</p>
        <p>{formatPrice(cart?.total ?? 0)}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
      <div className="mt-6">
        {cart?.lines?.items?.length ? (
          <Link href="/checkout/information">
            <Button size="lg" className="w-full">
              Proceed to checkout
            </Button>
          </Link>
        ) : (
          <Button size="lg" className="w-full" disabled>
            Proceed to checkout
          </Button>
        )}
      </div>
    </div>
  );
};

type Props = {
  cart: CartFragment | null | undefined;
};
