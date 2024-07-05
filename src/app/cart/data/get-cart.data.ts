import { cookies } from 'next/headers';

import { CacheTags, CookiesNames } from '@/lib/constants';
import { CART_FRAGMENT, eblocFetcher, GET_CART, getFragmentData } from '@/lib/ebloc';

export const getCart = async () => {
  const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

  const result = await eblocFetcher(GET_CART, { id: cartId }, CacheTags.cart);
  const cart = getFragmentData(CART_FRAGMENT, result.order);

  return cart;
};
