import { type FC } from 'react';

import Image from 'next/image';

import { DEFAULT_PRODUCT_IMAGE } from '@/lib/constants';
import { type CommonOrderFragment } from '@/lib/ebloc';
import { getFormattedPrice } from '@/lib/utils';

export const OrderSummaryItem: FC<Props> = ({ line }) => {
  const { assets, name } = line.productVariant.product;
  const image = assets.items[0]?.source ?? DEFAULT_PRODUCT_IMAGE;

  return (
    <article className="flex">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image fill src={image} alt={name} className="h-full w-full object-cover object-center" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p className="ml-4">{getFormattedPrice(line.linePrice)}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {line.quantity}</p>
        </div>
      </div>
    </article>
  );
};

interface Props {
  line: CommonOrderFragment['lines']['items'][0];
}
