'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { CookiesDurations, CookiesNames } from '@/lib/shared/constants';
import { CustomerService } from '@/lib/vendyx/services';

import { getCustomer } from '../data';

export const login = async (email: string, password: string) => {
  const result = await CustomerService.generateAccessToken(email, password);

  if (!result.success) {
    return { error: result.error, errorCode: result.errorCode };
  }

  const customer = await getCustomer(result.accessToken);

  cookies().set(CookiesNames.accessToken, result.accessToken, { maxAge: CookiesDurations.days_7 });
  revalidateTag(CustomerService.Tags.customer);
  redirect(`/?from=login&customer=${customer?.firstName ?? customer?.lastName}`);
};
