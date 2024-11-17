import { type FC } from 'react';

import Link from 'next/link';

import { AddToCart } from '@/lib/cart';
import {
  buttonVariants,
  type CollectionProductFragment,
  DEFAULT_PRODUCT_IMAGE,
  formatPrice
} from '@/lib/shared';

import { ProductImage } from '../product-gallery/product-image';

export const ProductCard: FC<Props> = ({ product }) => {
  const { name, variants, assets } = product;

  const defaultAsset = assets.items[0]?.source ?? DEFAULT_PRODUCT_IMAGE.lg;
  const defaultVariant = variants.items[0];

  return (
    <article className="group flex flex-col gap-4 border rounded-md fade-in h-fit">
      <Link href={`/products/${product.slug}`}>
        <ProductImage src={defaultAsset} alt={name} className="rounded-t-md lg:h-80 group" />
      </Link>
      <div className="flex justify-between px-4">
        <h3 className="text-sm text-gray-700">{name}</h3>
        <p className="text-sm font-medium text-gray-900">{formatPrice(defaultVariant.salePrice)}</p>
      </div>
      <div className="px-4 pb-4">
        <AddToCart
          availableForSale
          variantId={defaultVariant.id}
          className={buttonVariants({ variant: 'secondary', className: 'w-full font-medium' })}
        />
      </div>
    </article>
  );
};

type Props = {
  product: CollectionProductFragment;
};
