import { CartService } from '@/lib/vendyx/services';

export const getCart = async () => {
  return await CartService.getCart();
};
