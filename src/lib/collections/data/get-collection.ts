import { GET_COLLECTION_DETAILS_QUERY, vendyxFetcher } from '@/lib/shared';

export const getCollection = async (slug: string) => {
  const { collection } = await vendyxFetcher(GET_COLLECTION_DETAILS_QUERY, { slug });

  return collection;
};
