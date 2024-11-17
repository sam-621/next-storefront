import { GET_COUNTRIES_QUERY, vendyxFetcher } from '@/lib/shared';

export const getCountries = async () => {
  const { countries } = await vendyxFetcher(GET_COUNTRIES_QUERY);

  return countries;
};
