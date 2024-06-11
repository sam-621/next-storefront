import { getFragmentData, graphql } from '../codegen';
import { type ListInput } from '../codegen/graphql';
import { eblocFetcher } from '../fetcher.ebloc';
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
  const { products } = await eblocFetcher(GetProductQuery, { input });
  const data = getFragmentData(CommonProduct, products.items);

  return data;
};
