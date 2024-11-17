import { vendyxFetcher, GET_COLLECTIONS_SLUG_QUERY } from '@/lib/shared';

export const getCollectionsSlugs = async () => {
  const { collections } = await vendyxFetcher(GET_COLLECTIONS_SLUG_QUERY);

  return collections.items;
};
