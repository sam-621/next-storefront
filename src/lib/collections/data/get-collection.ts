import { eblocFetcher, GET_COLLECTION_DETAILS_QUERY } from '@/lib/shared';

export const getCollection = async (slug: string) => {
  const { collection } = await eblocFetcher(GET_COLLECTION_DETAILS_QUERY, { slug });

  return collection;
};
