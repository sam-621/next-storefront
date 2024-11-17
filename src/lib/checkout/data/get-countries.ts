import { vendyxFetcher, GET_COUNTRIES_QUERY } from '@/lib/shared';

export const getCountries = async () => {
  const { countries } = await vendyxFetcher(GET_COUNTRIES_QUERY);

  return countries;
};
