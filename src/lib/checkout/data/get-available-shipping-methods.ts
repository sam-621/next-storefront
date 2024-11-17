import { GET_AVAILABLE_SHIPPING_METHODS_QUERY, vendyxFetcher } from '@/lib/shared';

export const getAvailableShippingMethods = async (cartId: string) => {
  const { availableShippingMethods } = await vendyxFetcher(GET_AVAILABLE_SHIPPING_METHODS_QUERY, {
    cartId
  });

  return availableShippingMethods;
};
