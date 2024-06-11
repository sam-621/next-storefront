import { graphql } from '../codegen';
import { type AddPaymentToOrderInput } from '../codegen/graphql';
import { eblocFetcher } from '../fetcher.ebloc';

const AddPaymentToOrderMutation = graphql(`
  mutation AddPaymentToOrderMutation($orderId: ID!, $input: AddPaymentToOrderInput!) {
    addPaymentToOrder(orderId: $orderId, input: $input) {
      apiErrors {
        code
        message
      }
      order {
        ...CommonOrder
      }
    }
  }
`);

export const addPaymentToOrder = async (orderId: string, input: AddPaymentToOrderInput) => {
  const { addPaymentToOrder } = await eblocFetcher(AddPaymentToOrderMutation, { orderId, input });

  return addPaymentToOrder;
};
