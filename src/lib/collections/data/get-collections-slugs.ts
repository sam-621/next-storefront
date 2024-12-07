import { CollectionService } from '@/lib/vendyx/services';

export const getCollectionsSlugs = async () => {
  return await CollectionService.getSlugs();
};
