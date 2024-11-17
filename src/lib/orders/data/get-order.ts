import { GET_ORDER_QUERY, getFragmentData, ORDER_FRAGMENT, vendyxFetcher } from '@/lib/shared';

export const getOrder = async (code: string) => {
  const result = await vendyxFetcher(GET_ORDER_QUERY, { code });
  const order = getFragmentData(ORDER_FRAGMENT, result.order);

  return order;
};
