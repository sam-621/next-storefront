import { type FC } from 'react';

import Image from 'next/image';

import { getFormattedPrice } from '@/lib/utils';
import { type CommonOrderFragment } from '@/lib/vendyx';

import { CartQuantityButton } from './cart-quantity-button';
import { CartRemoveButton } from './cart-remove-button';

export const CartItem: FC<Props> = ({ line }) => {
  const { unitPrice, quantity } = line;
  const { name, assets } = line.productVariant.product;
  const image = assets.items[0]?.source;

  return (
    <li className="flex py-6">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          fill
          src={
            image ??
            'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg'
          }
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{line.productVariant.product.name}</h3>
            <p className="ml-4">{getFormattedPrice(unitPrice)}</p>
          </div>
          {/* <p className="mt-1 text-sm text-gray-500">Blue</p> */}
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          {/* <p className="text-gray-500">Qty {quantity}</p> */}
          <div className="flex border border-border h-8 w-24 rounded-lg">
            <CartQuantityButton line={line} type="minus" />
            <span className="text-center flex items-center justify-center w-full">{quantity}</span>
            <CartQuantityButton line={line} type="plus" />
          </div>

          <div className="flex">
            <CartRemoveButton lineId={line.id} />
          </div>
        </div>
      </div>
    </li>
  );
};

interface Props {
  line: CommonOrderFragment['lines']['items'][0];
}
