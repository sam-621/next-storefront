'use client';

import { type FC } from 'react';

import Link from 'next/link';

import { type CollectionProductFragment } from '@/lib/ebloc';
import { formatPrice } from '@/lib/utils';

import { Button } from '../common';
import { ProductImage } from './product-image';

export const ProductCard: FC<Props> = ({ product }) => {
  const { name, variants, assets } = product;

  const defaultAsset = assets.items[0]?.source ?? 'DEFAULT_PRODUCT_IMAGE';
  const defaultVariant = variants.items[0];

  return (
    <Link href={`/products/${product.slug}`} className="fade-in">
      <article className="group flex flex-col gap-4 border rounded-md">
        <ProductImage src={defaultAsset} alt={name} className="rounded-t-md lg:h-80 group" />
        <div className="flex justify-between px-4">
          <h3 className="text-sm text-gray-700">{name}</h3>
          <p className="text-sm font-medium text-gray-900">{formatPrice(defaultVariant.price)}</p>
        </div>
        <div className="px-4 pb-4">
          {/* <AddToCart
          variantId={defaultVariant.id}
          quantity={1}
          className="lg:opacity-0 lg:group-hover:opacity-100"
        /> */}
          <Button
            type="submit"
            variant="secondary"
            className="w-full font-medium"
            onClick={(e: React.FormEvent<HTMLButtonElement>) => {
              e.stopPropagation();
            }}
          >
            Add to cart
          </Button>
        </div>
      </article>
    </Link>
  );
};

type Props = {
  product: CollectionProductFragment;
};
