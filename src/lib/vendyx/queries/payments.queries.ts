import { graphql } from '../codegen';
import { vendyxFetcher } from '../fetcher.vendyx';

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
  const { availablePaymentMethods } = await vendyxFetcher(GetAvailablePaymentMethodsQuery);

  return availablePaymentMethods;
};
