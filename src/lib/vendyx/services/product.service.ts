import { getFragmentData } from '../codegen';
import { fetcher } from '../fetcher';
import { GET_PRODUCT_DETAILS_QUERY, PRODUCT_DETAILS_FRAGMENT } from '../operations';

export const ProductService = {
  Tags: {
    product: (id: string) => `product:${id}`
  },

  async getBySlug(slug: string) {
    const result = await fetcher(GET_PRODUCT_DETAILS_QUERY, { slug }, [this.Tags.product(slug)]);
    const product = getFragmentData(PRODUCT_DETAILS_FRAGMENT, result.product);

    return product;
  }
};
