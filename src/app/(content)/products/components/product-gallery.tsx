'use client';

import { type FC, useState } from 'react';

import { ProductImage } from '@/lib/components';
import { type ProductDetailsFragment } from '@/lib/ebloc';
import { cn } from '@/lib/utils';

export const ProductGallery: FC<Props> = ({ assets }) => {
  const [selectedImage, setSelectedImage] = useState(assets[0]);

  return (
    <div className="flex flex-col gap-4">
      <ProductImage
        src={selectedImage.source}
        alt={selectedImage.name}
        className="rounded-lg h-fit"
      />
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
            <img src={asset.source} alt="SOME" className="object-cover w-full h-full rounded-md" />
          </button>
        ))}
      </div>
    </div>
  );
};

type Props = {
  assets: ProductDetailsFragment['assets']['items'];
};
