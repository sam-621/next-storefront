import { graphql } from '../codegen';

export const CommonProduct = graphql(`
  fragment CommonProduct on Product {
    id
    name
    slug
    description
    onlineOnly
    variants(input: { take: 1 }) {
      items {
        id
        stock
        price
      }
    }
    assets {
      items {
        id
        name
        source
      }
    }
  }
`);
