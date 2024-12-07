import { CollectionService } from '@/lib/vendyx/services';

export const getCollection = async (slug: string) => {
  return await CollectionService.getBySlug(slug);
};
