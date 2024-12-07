import { CollectionService } from '@/lib/vendyx/services';

export const getCollectionProducts = async (slug: string) => {
  return await CollectionService.getProducts(slug);
};
