'use server';

import { redirect } from 'next/navigation';

import { CustomerService } from '@/lib/vendyx/services';

export const login = async (email: string, password: string) => {
  const result = await CustomerService.generateAccessToken(email, password);

  if (!result.success) {
    return { error: result.error, errorCode: result.errorCode };
  }

  redirect('/');
};
