'use server';

import { revalidateTag } from 'next/cache';

import { AddressService, CustomerService } from '@/lib/vendyx/services';

export const removeAddress = async (id: string) => {
  await AddressService.remove(id);
  revalidateTag(CustomerService.Tags.customer);
};
