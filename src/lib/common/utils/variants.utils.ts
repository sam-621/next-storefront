import { type ProductDetailsFragment } from '@/lib/common/ebloc';

/**
 * Get the current variant based on the selected options
 */
export const getVariantByOptions = (
  variants: ProductDetailsFragment['variants']['items'],
  selectedOptions: Record<string, string>
) => {
  return variants.find(v =>
    Object.entries(selectedOptions).every(([_, value]) =>
      v.optionValues?.find(ov => ov.value === value)
    )
  );
};
