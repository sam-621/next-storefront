import { graphql } from '../codegen';
import { eblocFetcher } from '../fetcher.ebloc';

const GetAvailablePaymentMethodsQuery = graphql(`
  query GetAvailablePaymentMethods {
    availablePaymentMethods {
      id
      name
      description
    }
  }
`);

export const getAvailablePaymentMethods = async () => {
  const { availablePaymentMethods } = await eblocFetcher(GetAvailablePaymentMethodsQuery);

  return availablePaymentMethods;
};
