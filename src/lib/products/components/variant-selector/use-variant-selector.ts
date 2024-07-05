import { useState } from 'react';

import { type ProductDetailsFragment } from '@/lib/common/ebloc';
import { useUrlState } from '@/lib/common/hooks';
import { getVariantByOptions } from '@/lib/common/utils';

/**
 * Handle variant selector state and URL state
 */
export const useVariantSelector = (variants: ProductDetailsFragment['variants']['items']) => {
  const { set, searchParams } = useUrlState();
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(
    Object.fromEntries(searchParams.entries())
  );

  const selectedVariant = getVariantByOptions(variants, selectedOptions);

  const onVariantChange = (option: string, value: string) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [option]: value
    }));

    set(option, value);
  };

  return {
    onVariantChange,
    selectedVariant,
    selectedOptions
  };
};
