import { vendyxFetcher, GET_AVAILABLE_SHIPPING_METHODS_QUERY } from '@/lib/shared';

export const getAvailableShippingMethods = async (cartId: string) => {
  const { availableShippingMethods } = await vendyxFetcher(GET_AVAILABLE_SHIPPING_METHODS_QUERY, {
    cartId
  });

  return availableShippingMethods;
};
