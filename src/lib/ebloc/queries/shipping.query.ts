import { graphql } from '../codegen';
import { eblocFetcher } from '../fetcher.ebloc';

const GetAvailableShippingMethodsQuery = graphql(`
  query GetAvailableShippingMethods {
    availableShippingMethods {
      id
    }
  }
`);

export const getAvailableShippingMethods = async () => {
  const { availableShippingMethods } = await eblocFetcher(GetAvailableShippingMethodsQuery);

  return availableShippingMethods;
};
