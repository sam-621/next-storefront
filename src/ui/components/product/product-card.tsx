import { type FC } from 'react';

import Image from 'next/image';

import { AddToCart } from '@/app/cart/components';
import { DEFAULT_PRODUCT_IMAGE } from '@/lib/constants';
import { type CommonProductFragment } from '@/lib/ebloc';
import { getFormattedPrice } from '@/lib/utils';

export const ProductCard: FC<Props> = ({ product }) => {
  const { name, variants, assets } = product;

  const defaultAsset = assets.items[0]?.source ?? DEFAULT_PRODUCT_IMAGE;
  const defaultVariant = variants.items[0];
  console.log(defaultVariant.stock);

  return (
    <article className="group flex flex-col gap-4">
      <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
        <Image
          fill
          src={defaultAsset}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex justify-between">
        <h3 className="text-sm text-gray-700">{name}</h3>
        <p className="text-sm font-medium text-gray-900">
          {getFormattedPrice(defaultVariant.price)}
        </p>
      </div>
      <div>
        <AddToCart
          variantId={defaultVariant.id}
          availableForSale={defaultVariant.stock > 0}
          className="lg:opacity-0 lg:group-hover:opacity-100"
        />
      </div>
    </article>
  );
};

interface Props {
  product: CommonProductFragment;
}
