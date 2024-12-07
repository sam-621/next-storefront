import { ProductService } from '@/lib/vendyx/services';

export const getProductDetails = async (slug: string) => {
  return await ProductService.getBySlug(slug);
};
