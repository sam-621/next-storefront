import { type FC } from 'react';

import { TagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { Button } from '@/components/ui';
import { formatPrice } from '@/lib/shared/utils';
import { type CartFragment } from '@/lib/vendyx/types';

export const CartFooter: FC<Props> = ({ cart }) => {
  return (
    <div className="border-t px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium">
        <p>Total</p>
        <p>{formatPrice(cart?.total ?? 0)}</p>
      </div>
      {cart?.discounts?.map(d => (
        <div key={d.handle} className="flex items-center gap-1">
          <TagIcon className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-500">
            {d.handle} ({formatPrice(d.discountedAmount)})
          </span>
        </div>
      ))}
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
