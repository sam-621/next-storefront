import { cookies } from 'next/headers';

import { CookiesNames } from '@/lib/shared/constants';
import { CustomerService } from '@/lib/vendyx/services';

export const getCustomer = async () => {
  const accessToken = cookies().get(CookiesNames.accessToken)?.value;

  return accessToken ? (await CustomerService.getByAccessToken(accessToken)) ?? null : null;
};
