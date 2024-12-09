'use server';

import { revalidateTag } from 'next/cache';

import { AddressService, CustomerService } from '@/lib/vendyx/services';
import { type CreateAddressInput } from '@/lib/vendyx/types';

export const createAddress = async (input: CreateAddressInput) => {
  await AddressService.create(input);
  revalidateTag(CustomerService.Tags.customer);
};
