import { graphql } from '../codegen';
import { type ListInput } from '../codegen/graphql';
import { vendyxFetcher } from '../fetcher.vendyx';

export const GetProductQuery = graphql(`
  query GetProducts($input: ListInput) {
    products(input: $input) {
      count
      items {
        ...CommonProduct
        variants(input: { take: 0 }) {
          items {
            ...CommonVariant
          }
        }
        assets {
          items {
            ...CommonAsset
          }
        }
      }
    }
  }
`);

export const getProducts = async (input: ListInput) => {
  const { products } = await vendyxFetcher(GetProductQuery, { input });

  return products;
};
