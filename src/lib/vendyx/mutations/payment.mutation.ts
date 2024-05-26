import { graphql } from '../codegen';
import { type AddPaymentToOrderInput } from '../codegen/graphql';
import { vendyxFetcher } from '../fetcher.vendyx';

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
  const { addPaymentToOrder } = await vendyxFetcher(AddPaymentToOrderMutation, { orderId, input });

  return addPaymentToOrder;
};
