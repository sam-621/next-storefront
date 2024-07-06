'use client';

import { type FC } from 'react';

import { AddToCart } from '@/lib/cart';
import { buttonVariants, cn, type ProductDetailsFragment } from '@/lib/common/';

import { useVariantSelector } from './use-variant-selector';

export const VariantSelector: FC<Props> = ({ options, variants }) => {
  const { onVariantChange, selectedVariant, selectedOptions } = useVariantSelector(variants);

  return (
    <div className="flex flex-col gap-8">
      {options.map(option => (
        <div key={option.id} className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">{option.name}</h3>
          <div className="flex flex-wrap gap-3">
            {option.values?.map(value => {
              const isSelected = selectedOptions[option.name] === value.value;

              // Get the selected option values that are not present the current option
              const filtered = Array.from(Object.entries(selectedOptions))
                .filter(([key]) => key !== option.name)
                .map(([_, value]) => value);

              let isSoldOut = false;

              // If there are options selected that are not the current one, look for the current variant
              if (filtered.length) {
                // we are trying to find the current variant with 2 conditions
                // 1. has the selected variants (without the current one)
                // 2. has the current value
                const currentVariant = variants.find(v =>
                  [...filtered, value.value].every(value =>
                    v.optionValues?.find(ov => ov.value === value)
                  )
                );

                // After the current variant is found, check if it is sold out
                isSoldOut = currentVariant?.stock === 0 ?? false;
              }

              return (
                <div
                  key={value.id}
                  className={cn(
                    'border rounded-lg',
                    isSelected ? 'border-indigo-600' : 'border-transparent'
                  )}
                >
                  <button
                    disabled={isSoldOut}
                    className={cn(
                      'py-3 px-5 text-sm border rounded-md',
                      isSelected && 'border-indigo-600',
                      isSoldOut && 'opacity-25 cursor-not-allowed'
                    )}
                    onClick={() => onVariantChange(option.name, value.value)}
                  >
                    {value.value}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <div>
        <AddToCart
          soldOutText="Add to cart"
          availableForSale={Boolean(selectedVariant?.stock)}
          variantId={selectedVariant?.id ?? ''}
          className={buttonVariants({ size: 'lg', className: 'w-full' })}
        />
      </div>
    </div>
  );
};

type Props = {
  options: ProductDetailsFragment['options'];
  variants: ProductDetailsFragment['variants']['items'];
};
