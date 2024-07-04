import { eblocFetcher, GET_COLLECTIONS_SLUG } from '@/lib/ebloc';

export const getCollectionsSlugs = async () => {
  const { collections } = await eblocFetcher(GET_COLLECTIONS_SLUG);

  return collections.items;
};
