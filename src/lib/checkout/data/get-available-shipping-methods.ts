import { eblocFetcher, GET_AVAILABLE_SHIPPING_METHODS_QUERY } from '@/lib/common';

export const getAvailableShippingMethods = async () => {
  const { availableShippingMethods } = await eblocFetcher(GET_AVAILABLE_SHIPPING_METHODS_QUERY);

  return availableShippingMethods;
};
