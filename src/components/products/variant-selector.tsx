'use client';

import { type FC } from 'react';

import { AddToCart } from '@/lib/cart/components';
import { useVariantContext } from '@/lib/products/contexts';
import { cn } from '@/lib/shared/utils';
import { type ProductDetailsFragment } from '@/lib/vendyx/types';

import { buttonVariants } from '../ui';

export const VariantSelector: FC<Props> = ({ options: optionsProps, variants }) => {
  const { changeVariant, variant, options } = useVariantContext();

  const allOptionsSelected = optionsProps.length === Object.keys(options).length;
  const variantIsInStock = Boolean(variant?.stock);

  return (
    <div className="flex flex-col gap-8">
      {optionsProps.map(option => (
        <div key={option.id} className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">{option.name}</h3>
          <div className="flex flex-wrap gap-3">
            {option.values?.map(value => {
              const isSelected = options[option.name] === value.name;

              // Get the selected option values that are not present the current option
              const filtered = Array.from(Object.entries(options))
                .filter(([key]) => key !== option.name)
                .map(([_, value]) => value);

              let isSoldOut = false;

              // If there are options selected that are not the current one, look for the current variant
              if (filtered.length) {
                // we are trying to find the current variant with 2 conditions
                // 1. has the selected variants (without the current one)
                // 2. has the current value
                const currentVariant = variants.find(v =>
                  [...filtered, value.name].every(value =>
                    v.optionValues?.find(ov => ov.name === value)
                  )
                );

                // After the current variant is found, check if it is sold out
                isSoldOut = currentVariant?.stock === 0;
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
                    onClick={() => changeVariant(option.name, value.name)}
                  >
                    {value.name}
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
          availableForSale={allOptionsSelected && variantIsInStock}
          variantId={variant?.id ?? ''}
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
