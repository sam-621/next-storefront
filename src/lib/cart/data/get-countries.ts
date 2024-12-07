import { CartService } from '@/lib/vendyx/services';

export const getCountries = async () => {
  return await CartService.getCountries();
};
