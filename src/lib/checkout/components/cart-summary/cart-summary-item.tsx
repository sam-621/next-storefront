import { type FC } from 'react';

import Image from 'next/image';

import { type CartFragment, formatPrice } from '@/lib/common';

export const CartSummaryItem: FC<Props> = ({ line }) => {
  const { assets, name } = line.productVariant.product;
  const image = assets.items[0]?.source ?? 'DEFAULT_PRODUCT_IMAGE';

  return (
    <article className="flex">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image fill src={image} alt={name} className="h-full w-full object-cover object-center" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <div>
              <h3>{name}</h3>
              <span className="text-gray-500 text-sm font-normal">
                {line.productVariant.optionValues?.map(v => v.value).join(' / ')}
              </span>
            </div>
            <p className="ml-4">{formatPrice(line.linePrice)}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {line.quantity}</p>
        </div>
      </div>
    </article>
  );
};

type Props = {
  line: CartFragment['lines']['items'][0];
};
