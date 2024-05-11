import { graphql } from '../codegen';
import { vendyxFetcher } from '../fetcher.vendyx';

export const GetAvailableShippingMethodsQuery = graphql(`
  query GetAvailableShippingMethods {
    availableShippingMethods {
      id
    }
  }
`);

export const getAvailableShippingMethods = async () => {
  const { availableShippingMethods } = await vendyxFetcher(GetAvailableShippingMethodsQuery);

  return availableShippingMethods;
};
