import { type FC } from 'react';

import Link from 'next/link';

import { CheckoutStepsField, CheckoutStepsValues } from '@/lib/constants';
import { type CommonOrderFragment } from '@/lib/ebloc';
import { getFormattedPrice } from '@/lib/utils';

export const CartFooter: FC<Props> = ({ cart }) => {
  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Total</p>
        <p>{getFormattedPrice(cart?.total ?? 0)}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipment and taxes will be calculated at checkout step.
      </p>
      <div className="mt-6">
        {cart?.lines?.items?.length ? (
          <Link
            className="flex justify-center items-center px-6 py-3 w-full text-white font-medium bg-indigo-600 hover:bg-indigo-700 rounded-md"
            href={`/checkout?${CheckoutStepsField}=${CheckoutStepsValues.information}`}
          >
            Proceed to checkout
          </Link>
        ) : (
          <button
            className="flex justify-center items-center px-6 py-3 w-full text-white cursor-not-allowed bg-indigo-600 opacity-50 hover:bg-indigo-600 font-medium rounded-md"
            disabled
          >
            Proceed to checkout
          </button>
        )}
      </div>
    </div>
  );
};

interface Props {
  cart: CommonOrderFragment | null | undefined;
}
