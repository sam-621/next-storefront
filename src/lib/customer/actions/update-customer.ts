'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import { CookiesNames } from '@/lib/shared/constants';
import { CustomerService } from '@/lib/vendyx/services';
import { type UpdateCustomerInput } from '@/lib/vendyx/types';

export const updateCustomer = async (input: UpdateCustomerInput) => {
  const accessToken = cookies().get(CookiesNames.accessToken)?.value;

  if (!accessToken) return;

  const result = await CustomerService.update(input);

  if (!result.success) {
    return { error: result.error, errorCode: result.errorCode };
  }

  revalidateTag(CustomerService.Tags.customer);
};
