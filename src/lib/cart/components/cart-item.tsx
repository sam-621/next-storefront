import { type FC } from 'react';

import Image from 'next/image';

import { type CartFragment, DEFAULT_PRODUCT_IMAGE, formatPrice } from '@/lib/shared';

import { CartQuantityButton } from './cart-quantity-button';
import { CartRemoveButton } from './cart-remove-button';

export const CartItem: FC<Props> = ({ line }) => {
  const { unitPrice, quantity } = line;
  const variantImage = line.productVariant.asset?.source;
  const { name, assets } = line.productVariant.product;
  const image = variantImage ?? assets.items[0]?.source ?? DEFAULT_PRODUCT_IMAGE.sm;
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
            </div>
            <p className="ml-4">{formatPrice(unitPrice)}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex w-full items-center justify-between">
            <div className="flex border border-border h-8 w-24 rounded-lg">
              <CartQuantityButton line={line} type="minus" />
              <span className="text-center flex items-center justify-center w-full">
                {quantity}
              </span>
              <CartQuantityButton
                line={line}
                type="plus"
                disabled={availableStock === line.quantity}
              />
            </div>

            <div className="flex">
              <CartRemoveButton lineId={line.id} />
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
