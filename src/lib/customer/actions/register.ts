'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { CookiesDurations, CookiesNames } from '@/lib/shared/constants';
import { CustomerService } from '@/lib/vendyx/services';

export const register = async (input: Input) => {
  const createResult = await CustomerService.create(input);

  if (!createResult.success) {
    return { error: createResult.error, errorCode: createResult.errorCode };
  }

  const tokenResult = await CustomerService.generateAccessToken(input.email, input.password);

  if (!tokenResult.success) {
    return {
      error: tokenResult.error,
      errorCode: tokenResult.errorCode
    };
  }

  const { accessToken } = tokenResult;

  cookies().set(CookiesNames.accessToken, accessToken, { maxAge: CookiesDurations.days_7 });
  revalidateTag(CustomerService.Tags.customer);
  redirect(`/?from=register&customer=${input?.firstName ?? input.lastName}`);
};

type Input = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
