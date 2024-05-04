import { getFragmentData, graphql } from '../codegen';
import { type ListInput } from '../codegen/graphql';
import { vendyxFetcher } from '../fetcher.vendyx';
import { CommonProduct } from '../fragments';

const GetProductQuery = graphql(`
  query GetProducts($input: ListInput) {
    products(input: $input) {
      count
      items {
        ...CommonProduct
      }
    }
  }
`);

export const getProducts = async (input?: ListInput) => {
  const { products } = await vendyxFetcher(GetProductQuery, { input });
  const data = getFragmentData(CommonProduct, products.items);

  return data;
};
