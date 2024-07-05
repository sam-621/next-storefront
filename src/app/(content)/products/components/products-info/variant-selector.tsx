'use client';

import { type FC, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { type ProductDetailsFragment } from '@/lib/ebloc';
import { cn } from '@/lib/utils';

export const VariantSelector: FC<Props> = ({ options, variants }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(
    Object.fromEntries(searchParams.entries())
  );
  const selectedVariant = variants.find(v =>
    Object.entries(selectedOptions).every(([key, value]) =>
      v.optionValues?.find(ov => ov.value === value)
    )
  );

  const onVariantChange = (option: string, value: string) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [option]: value
    }));

    const params = new URLSearchParams(searchParams);
    params.set(option, value);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // si estoy en la misma option, pasa
  // si estoy en una diferente
  // dame las variantes por cada opción, y verifica q tenga stock
  return (
    <div className="flex flex-col gap-8">
      {options.map(option => (
        <div key={option.id} className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">{option.name}</h3>
          <div className="flex flex-wrap gap-3">
            {option.values?.map(value => {
              const isSelected = selectedOptions[option.name] === value.value;

              // Get the selected options without the current one
              // ie. Im in color options, and selectedOptions is { size: 'M', color: 'Red'}
              // then get the size, this is because we only check on combinations,
              // and a variant does not have different values for the same option
              const filtered = Array.from(Object.entries(selectedOptions)).filter(
                ([key, value]) => key !== option.name
              );

              let isSoldOut = false;

              // If there are options selected that are not the current one, look for the current variant
              if (filtered.length) {
                const currentVariant = variants.find(v => {
                  // Get the option values of the current variant
                  const optionValues = v.optionValues
                    ?.map(ov => ov.value)
                    .sort()
                    .join(', ');
                  // Get the option values of the selected options
                  const _selectedOptions = [...filtered.map(([key, value]) => value), value.value];

                  // Check if the current variant has the same values as the selected options
                  // if so, then the current variant is the one we are looking for
                  return _selectedOptions.sort().join(', ') === optionValues;
                });

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
                      isSoldOut && 'text-gray-500 bg-slate-200'
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
        <button
          type="button"
          className="flex justify-center items-center px-6 py-3 w-full text-white font-normal bg-indigo-600 hover:bg-indigo-700 rounded-md"
          onClick={() => {
            console.log(selectedVariant);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

type Props = {
  options: ProductDetailsFragment['options'];
  variants: ProductDetailsFragment['variants']['items'];
};
