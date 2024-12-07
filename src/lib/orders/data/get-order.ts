import { OrderService } from '@/lib/vendyx/services';

export const getOrder = async (code: string) => {
  return await OrderService.getByCode(code);
};
