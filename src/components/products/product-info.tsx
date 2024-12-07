import { type FC } from 'react';

import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';

import { formatPrice } from '@/lib/shared/utils';
import { type ProductDetailsFragment } from '@/lib/vendyx/types';

import { VariantSelector } from './variant-selector';

export const ProductInfo: FC<Props> = ({ product }) => {
  const { options, variants } = product;

  return (
    <div className="flex flex-col gap-6 sticky top-6 h-fit">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold leading-9">{product.name}</h1>
        <span className="leading-9 text-3xl font-normal">
          {formatPrice(variants.items[0].salePrice)}
        </span>
      </div>

      <VariantSelector options={options} variants={variants.items} />

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Description</h3>
        <div>
          <p className="text-base text-gray-500 font-normal">{product.description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-1 py-6 bg-gray-50 border rounded-md w-full">
          <GlobeAmericasIcon className="w-6 h-6" />
          <h4 className="font-medium text-sm">International delivery</h4>
          <p className="font-normal text-sm text-gray-500">Get your order in 2 years</p>
        </div>
        <div className="flex flex-col items-center gap-1 py-6 bg-gray-50 border rounded-md w-full">
          <CurrencyDollarIcon className="w-6 h-6" />
          <h4 className="font-medium text-sm">Loyalty rewards</h4>
          <p className="font-normal text-sm text-gray-500">don&apos;t miss out on your rewards</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

type Props = {
  product: ProductDetailsFragment;
};
