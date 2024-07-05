import { graphql } from '../codegen';

export const COLLECTION_DETAILS_FRAGMENT = graphql(`
  fragment CollectionDetails on Collection {
    id
    name
    slug
    description
    products {
      items {
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
    }
  }
`);

export const GET_COLLECTIONS_SLUG = graphql(`
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

export const GET_COLLECTION_DETAILS = graphql(`
  query GetCollection($slug: String) {
    collection(slug: $slug) {
      ...CollectionDetails
    }
  }
`);
