import { cookies } from 'next/headers';

import { CookiesNames } from '@/lib/constants';
import { getOrder } from '@/lib/ebloc';

export const getCart = async () => {
  const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

  return cartId ? await getOrder({ orderId: cartId }) : null;
};
