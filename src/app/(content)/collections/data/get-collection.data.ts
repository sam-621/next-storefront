import { eblocFetcher, GET_COLLECTION_DETAILS } from '@/lib/ebloc';

export const getCollection = async (slug: string) => {
  const { collection } = await eblocFetcher(GET_COLLECTION_DETAILS, { slug });

  return collection;
};
