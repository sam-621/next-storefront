import { getFragmentData } from '../codegen';
import { fetcher } from '../fetcher';
import { GET_ORDER_QUERY, ORDER_FRAGMENT } from '../operations';

export const OrderService = {
  Tags: {
    order: (id: string) => `order:${id}`
  },

  async getByCode(code: string) {
    const result = await fetcher(GET_ORDER_QUERY, { code }, { tags: [this.Tags.order(code)] });
    const order = getFragmentData(ORDER_FRAGMENT, result.order);

    return order;
  }
};
