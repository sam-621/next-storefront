'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { CookiesNames } from '@/lib/shared/constants';
import { CustomerService } from '@/lib/vendyx/services';

export const disableCustomer = async () => {
  const result = await CustomerService.disable();

  if (!result.success) {
    return { error: result.error, errorCode: result.errorCode };
  }

  cookies().delete(CookiesNames.accessToken);
  revalidateTag(CustomerService.Tags.customer);
  redirect('/');
};
