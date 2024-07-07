'use server';

import { eblocFetcher, GET_ORDER_QUERY, getFragmentData, ORDER_FRAGMENT } from '@/lib/common';

export const getOrder = async (code: string) => {
  const result = await eblocFetcher(GET_ORDER_QUERY, { code });
  const order = getFragmentData(ORDER_FRAGMENT, result.order);

  return order;
};
