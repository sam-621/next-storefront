import { graphql } from '../codegen';

export const PRODUCT_DETAILS_FRAGMENT = graphql(`
  fragment ProductDetails on Product {
    id
    name
    slug
    description
    assets {
      items {
        id
        name
        order
        source
      }
    }
    options {
      id
      name
      values {
        id
        value
      }
    }
    variants {
      items {
        id
        price
        stock
        optionValues {
          id
          value
        }
      }
    }
  }
`);

export const GET_PRODUCT_DETAILS = graphql(`
  query GetProductDetails($slug: String!) {
    product(slug: $slug) {
      ...ProductDetails
    }
  }
`);
