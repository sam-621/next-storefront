import {
  COLLECTION_PRODUCT_FRAGMENT,
  vendyxFetcher,
  GET_COLLECTION_PRODUCTS_QUERY,
  getFragmentData
} from '@/lib/shared';

export const getCollectionProducts = async (slug: string) => {
  const { collection } = await vendyxFetcher(GET_COLLECTION_PRODUCTS_QUERY, { slug });

  const data = getFragmentData(COLLECTION_PRODUCT_FRAGMENT, collection?.products.items);

  return data;
};
