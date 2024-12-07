import { CartService } from '@/lib/vendyx/services';

export const getAvailablePaymentMethods = async () => {
  return await CartService.getAvailablePaymentMethods();
};
