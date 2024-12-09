'use server';

import { revalidateTag } from 'next/cache';

import { AddressService, CustomerService } from '@/lib/vendyx/services';
import { type UpdateAddressInput } from '@/lib/vendyx/types';

export const updateAddress = async (id: string, input: UpdateAddressInput) => {
  await AddressService.update(id, input);
  revalidateTag(CustomerService.Tags.customer);
};
