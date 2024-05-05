import { type FC } from 'react';

import { getFormattedPrice } from '@/lib/utils';
import { type CommonOrderFragment } from '@/lib/vendyx';

export const CartFooter: FC<Props> = ({ cart }) => {
  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Total</p>
        <p>{getFormattedPrice(cart?.total ?? 0)}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">Envío e impuestos son calculados al pagar.</p>
      <div className="mt-6">
        <a
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Pagar
        </a>
      </div>
    </div>
  );
};

interface Props {
  cart: CommonOrderFragment | null | undefined;
}
