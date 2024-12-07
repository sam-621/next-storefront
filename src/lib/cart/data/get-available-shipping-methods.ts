import { CartService } from '@/lib/vendyx/services';

export const getAvailableShippingMethods = async (cartId: string) => {
  return await CartService.getAvailableShippingMethods(cartId);
};
