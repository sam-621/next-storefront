import { eblocFetcher, GET_AVAILABLE_PAYMENT_METHODS_QUERY } from '@/lib/common';

export const getAvailablePaymentMethods = async () => {
  const { availablePaymentMethods } = await eblocFetcher(GET_AVAILABLE_PAYMENT_METHODS_QUERY);

  return availablePaymentMethods;
};
