import { cookies } from 'next/headers';

import { CookiesNames } from '@/lib/shared/constants';
import { CustomerService } from '@/lib/vendyx/services';

export const getCustomer = async (accessToken?: string) => {
  const _accessToken = accessToken ?? cookies().get(CookiesNames.accessToken)?.value;

  return _accessToken ? (await CustomerService.me()) ?? null : null;
};
