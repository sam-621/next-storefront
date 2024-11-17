import { GET_COLLECTIONS_SLUG_QUERY, vendyxFetcher } from '@/lib/shared';

export const getCollectionsSlugs = async () => {
  const { collections } = await vendyxFetcher(GET_COLLECTIONS_SLUG_QUERY);

  return collections.items;
};
