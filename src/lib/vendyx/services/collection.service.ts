import { getFragmentData } from '../codegen';
import { fetcher } from '../fetcher';
import {
  COLLECTION_PRODUCT_FRAGMENT,
  GET_COLLECTION_DETAILS_QUERY,
  GET_COLLECTION_PRODUCTS_QUERY,
  GET_COLLECTIONS_SLUG_QUERY
} from '../operations';

export const CollectionService = {
  Tags: {
    collection: (slug: string) => `collection:${slug}`,
    products: (slug: string) => `collection:${slug}:products`,
    slugs: 'collections:slugs'
  },

  async getBySlug(slug: string) {
    const { collection } = await fetcher(GET_COLLECTION_DETAILS_QUERY, { slug });

    return collection;
  },

  async getProducts(slug: string) {
    const { collection } = await fetcher(GET_COLLECTION_PRODUCTS_QUERY, { slug });

    const data = getFragmentData(COLLECTION_PRODUCT_FRAGMENT, collection?.products.items);

    return data;
  },

  async getSlugs() {
    const { collections } = await fetcher(GET_COLLECTIONS_SLUG_QUERY);

    return collections.items;
  }
};
