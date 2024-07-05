import {
  COLLECTION_PRODUCT_FRAGMENT,
  eblocFetcher,
  GET_COLLECTION_PRODUCTS,
  getFragmentData
} from '@/lib/ebloc';

export const getCollectionProducts = async (slug: string) => {
  const { collection } = await eblocFetcher(GET_COLLECTION_PRODUCTS, { slug });

  const data = getFragmentData(COLLECTION_PRODUCT_FRAGMENT, collection?.products.items);

  return data;
};
