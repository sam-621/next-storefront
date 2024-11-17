'use server';

import { cookies } from 'next/headers';

import {
  CacheTags,
  CART_FRAGMENT,
  CookiesNames,
  GET_CART_QUERY,
  getFragmentData,
  vendyxFetcher
} from '@/lib/shared';

export const getCart = async () => {
  const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

  const result = await vendyxFetcher(GET_CART_QUERY, { id: cartId }, CacheTags.cart);
  const cart = getFragmentData(CART_FRAGMENT, result.order);

  return cart;
};
