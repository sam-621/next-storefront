import { CustomerService } from '@/lib/vendyx/services';

export const getCustomer = async (accessToken?: string) => {
  return await CustomerService.me();
};
