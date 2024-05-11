import { CacheTags } from '@/lib/constants';

import { getFragmentData, graphql } from '../codegen';
import { type GetOrderQueryQueryVariables } from '../codegen/graphql';
import { vendyxFetcher } from '../fetcher.vendyx';
import { CommonOrder } from '../fragments';

const GetOrderQuery = graphql(`
  query GetOrderQuery($orderId: ID, $code: String) {
    order(id: $orderId, code: $code) {
      ...CommonOrder
    }
  }
`);

export const getOrder = async (input: GetOrderQueryQueryVariables) => {
  const { order } = await vendyxFetcher(GetOrderQuery, input, CacheTags.cart);
  const data = getFragmentData(CommonOrder, order);

  return data;
};
