import {
  eblocFetcher,
  GET_PRODUCT_DETAILS,
  getFragmentData,
  PRODUCT_DETAILS_FRAGMENT
} from '@/lib/ebloc';

export const getProductDetails = async (slug: string) => {
  const result = await eblocFetcher(GET_PRODUCT_DETAILS, { slug });
  const product = getFragmentData(PRODUCT_DETAILS_FRAGMENT, result.product);

  return product;
};
