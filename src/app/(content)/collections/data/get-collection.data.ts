import {
  COLLECTION_DETAILS_FRAGMENT,
  eblocFetcher,
  GET_COLLECTION_DETAILS,
  getFragmentData
} from '@/lib/ebloc';

export const getCollection = async (slug: string) => {
  const { collection } = await eblocFetcher(GET_COLLECTION_DETAILS, { slug });
  const data = getFragmentData(COLLECTION_DETAILS_FRAGMENT, collection);

  return data;
};
