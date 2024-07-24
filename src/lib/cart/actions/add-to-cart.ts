'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import {
  ADD_TO_CART_MUTATION,
  CacheTags,
  CookiesDurations,
  CookiesNames,
  CREATE_CART_MUTATION,
  eblocFetcher,
  OrderErrorCode
} from '@/lib/shared';

export const addToCart = async (_: any, input: { variantId: string; quantity: number }) => {
  const cartId = cookies().get(CookiesNames.cartId)?.value;

  const { variantId, quantity } = input;

  if (!cartId) {
    const {
      createOrder: { order, apiErrors }
    } = await eblocFetcher(CREATE_CART_MUTATION, {
      input: { line: { quantity, productVariantId: variantId } }
    });

    if (apiErrors.length) {
      return apiErrors[0]?.code;
    }

    cookies().set(CookiesNames.cartId, order?.id ?? '', { maxAge: CookiesDurations.month });
    revalidateTag(CacheTags.cart[0]);

    return;
  }

  const {
    addLineToOrder: { apiErrors }
  } = await eblocFetcher(ADD_TO_CART_MUTATION, {
    cartId,
    input: { productVariantId: variantId, quantity }
  });

  if (apiErrors.length) {
    // cart id cookie has a non-existing cart id
    if (apiErrors[0].code === OrderErrorCode.OrderNotFound) {
      cookies().delete(CookiesNames.cartId);
      await addToCart(_, input);
      return;
    }

    return apiErrors[0]?.code;
  }

  revalidateTag(CacheTags.cart[0]);
};
