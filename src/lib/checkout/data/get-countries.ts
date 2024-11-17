import { eblocFetcher, GET_COUNTRIES_QUERY } from '@/lib/shared';

export const getCountries = async () => {
  const { countries } = await eblocFetcher(GET_COUNTRIES_QUERY);

  return countries;
};
