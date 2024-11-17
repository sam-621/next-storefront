import { vendyxFetcher, GET_AVAILABLE_PAYMENT_METHODS_QUERY } from '@/lib/shared';

export const getAvailablePaymentMethods = async () => {
  const { availablePaymentMethods } = await vendyxFetcher(GET_AVAILABLE_PAYMENT_METHODS_QUERY);

  return availablePaymentMethods;
};
