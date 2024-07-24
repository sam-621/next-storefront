import { graphql } from '../codegen';

export const COLLECTION_PRODUCT_FRAGMENT = graphql(`
  fragment CollectionProduct on Product {
    id
    name
    slug
    variants(input: { take: 1 }) {
      items {
        id
        price
        stock
      }
    }
    assets(input: { take: 1 }) {
      items {
        id
        source
        order
      }
    }
  }
`);

export const GET_COLLECTIONS_SLUG_QUERY = graphql(`
  query GetCollectionsSlug {
    collections(input: { take: 3 }) {
      items {
        id
        name
        slug
      }
    }
  }
`);

export const GET_COLLECTION_PRODUCTS_QUERY = graphql(`
  query GetCollectionProducts($slug: String) {
    collection(slug: $slug) {
      products {
        items {
          ...CollectionProduct
        }
      }
    }
  }
`);

export const GET_COLLECTION_DETAILS_QUERY = graphql(`
  query GetCollectionDetails($slug: String) {
    collection(slug: $slug) {
      id
      name
      slug
      description
    }
  }
`);
