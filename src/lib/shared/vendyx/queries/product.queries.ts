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
        name
      }
    }
    variants {
      items {
        id
        salePrice
        stock
        optionValues {
          id
          name
        }
      }
    }
  }
`);

export const GET_PRODUCT_DETAILS_QUERY = graphql(`
  query GetProductDetails($slug: String!) {
    product(slug: $slug) {
      ...ProductDetails
    }
  }
`);
