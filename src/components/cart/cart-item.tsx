import { type FC } from 'react';

import { TagIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { CartQuantityButton, CartRemoveButton } from '@/lib/cart/components';
import { formatPrice } from '@/lib/shared/utils';
import { type CartFragment } from '@/lib/vendyx/types';

export const CartItem: FC<Props> = ({ line }) => {
  const { quantity, lineTotal } = line;
  const variantImage = line.productVariant.asset?.source;
  const { name, assets } = line.productVariant.product;
  const image = variantImage ?? assets.items[0]?.source;
  const availableStock = line.productVariant.stock;

  return (
    <li className="flex py-6">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image fill src={image} alt={name} className="h-full w-full object-cover object-center" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <div>
              <h3>{line.productVariant.product.name}</h3>
              <span className="text-gray-500 text-sm font-normal">
                {line.productVariant.optionValues?.map(v => v.name).join(' / ')}
              </span>
              {line.discounts.map(d => (
                <div key={d.handle} className="flex items-center gap-1">
                  <TagIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {d.handle} ({formatPrice(d.discountedAmount)})
                  </span>
                </div>
              ))}
            </div>
            <p className="ml-4">{formatPrice(lineTotal)}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex w-full items-center justify-between">
            <div className="flex border border-border h-8 w-24 rounded-lg">
              <div className="border-gray-200 w-full flex justify-center items-center border-r">
                <CartQuantityButton
                  className="border-gray-200 w-full flex justify-center items-center disabled:cursor-not-allowed text-gray-400"
                  line={line}
                  type="minus"
                />
              </div>
              <span className="text-center flex items-center justify-center w-full">
                {quantity}
              </span>
              <div className="border-gray-200 w-full flex justify-center items-center border-l">
                <CartQuantityButton
                  className="border-gray-200 w-full flex justify-center items-center disabled:cursor-not-allowed text-gray-400"
                  line={line}
                  type="plus"
                  disabled={availableStock === line.quantity}
                />
              </div>
            </div>

            <div className="flex">
              <CartRemoveButton
                lineId={line.id}
                className="font-medium text-indigo-600 hover:text-indigo-500 flex gap-2 items-center disabled:text-opacity-50 disabled:hover:text-opacity-50 disabled:hover:text-indigo-600 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

type Props = {
  line: CartFragment['lines']['items'][0];
};
