'use client';

import { type FC, useEffect, useState } from 'react';

import { useVariantContext } from '@/lib/products/contexts';
import { cn } from '@/lib/shared/utils';
import { type ProductDetailsFragment } from '@/lib/vendyx/types';

import { ProductImage } from './product-image';

export const ProductGallery: FC<Props> = ({ product }) => {
  const {
    assets: { items: assets }
  } = product;
  const { variant } = useVariantContext();

  const [selectedImage, setSelectedImage] = useState(variant?.asset ?? assets[0]);

  useEffect(() => {
    const variantAsset = variant?.asset;

    if (variantAsset) {
      setSelectedImage(variantAsset);
    }
  }, [variant]);

  if (!selectedImage) {
    return <ProductImage alt="default" className="rounded-lg h-fit" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <ProductImage src={selectedImage.source} alt={product.name} className="rounded-lg h-fit" />
      {assets.length >= 2 && (
        <div className="hidden xl:flex gap-4">
          {assets.map(asset => (
            <button
              onClick={() => setSelectedImage(asset)}
              key={asset.id}
              className={cn(
                'w-full border-2 rounded-md border-transparent',
                selectedImage.id === asset.id && 'border-indigo-600'
              )}
            >
              <img
                src={asset.source}
                alt="SOME"
                className="object-cover w-full h-full rounded-md"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

type Props = {
  product: ProductDetailsFragment;
};
