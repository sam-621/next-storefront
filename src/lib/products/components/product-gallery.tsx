'use client';

import { type FC, useState } from 'react';

import { cn, DEFAULT_PRODUCT_IMAGE, type ProductDetailsFragment } from '@/lib/common';

import { ProductImage } from './product-image';

export const ProductGallery: FC<Props> = ({ assets }) => {
  const [selectedImage, setSelectedImage] = useState(assets[0]);

  if (!assets.length) {
    return (
      <ProductImage src={DEFAULT_PRODUCT_IMAGE.lg} alt="default" className="rounded-lg h-fit" />
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <ProductImage
        src={selectedImage.source}
        alt={selectedImage.name}
        className="rounded-lg h-fit"
      />
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
  assets: ProductDetailsFragment['assets']['items'];
};
