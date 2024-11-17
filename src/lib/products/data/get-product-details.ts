import {
  vendyxFetcher,
  GET_PRODUCT_DETAILS_QUERY,
  getFragmentData,
  PRODUCT_DETAILS_FRAGMENT
} from '@/lib/shared';

export const getProductDetails = async (slug: string) => {
  const result = await vendyxFetcher(GET_PRODUCT_DETAILS_QUERY, { slug });
  const product = getFragmentData(PRODUCT_DETAILS_FRAGMENT, result.product);

  return product;
};
