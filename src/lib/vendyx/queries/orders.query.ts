import { getFragmentData, graphql } from '../codegen';
import { vendyxFetcher } from '../fetcher.vendyx';
import { CommonOrder } from '../fragments';

export const GetOrderQuery = graphql(`
  query GetOrderQuery($orderId: ID) {
    order(id: $orderId) {
      ...CommonOrder
    }
  }
`);

export const getOrder = async (id: string) => {
  const { order } = await vendyxFetcher(GetOrderQuery, { orderId: id });
  const data = getFragmentData(CommonOrder, order);

  return data;
};
