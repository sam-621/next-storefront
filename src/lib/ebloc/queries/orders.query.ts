import { CacheTags } from '@/lib/constants';

import { getFragmentData, graphql } from '../codegen';
import { type GetOrderQueryQueryVariables } from '../codegen/graphql';
import { eblocFetcher } from '../fetcher.ebloc';
import { CommonOrder } from '../fragments';

const GetOrderQuery = graphql(`
  query GetOrderQuery($orderId: ID, $code: String) {
    order(id: $orderId, code: $code) {
      ...CommonOrder
    }
  }
`);

export const getOrder = async (input: GetOrderQueryQueryVariables) => {
  const { order } = await eblocFetcher(GetOrderQuery, input, CacheTags.cart);
  const data = getFragmentData(CommonOrder, order);

  return data;
};
