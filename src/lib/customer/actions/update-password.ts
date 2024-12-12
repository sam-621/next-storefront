'use server';

import { revalidateTag } from 'next/cache';

import { CustomerService } from '@/lib/vendyx/services';

export const updatePassword = async (newPassword: string, confirmPassword: string) => {
  const result = await CustomerService.updatePassword({ newPassword, confirmPassword });

  if (!result.success) {
    return { error: result.error, errorCode: result.errorCode };
  }

  revalidateTag(CustomerService.Tags.customer);
};
