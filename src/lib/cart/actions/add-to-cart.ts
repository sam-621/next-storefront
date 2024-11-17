'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import {
  ADD_TO_CART_MUTATION,
  ApiError,
  CacheTags,
  CookiesDurations,
  CookiesNames,
  CREATE_CART_MUTATION,
  vendyxFetcher
} from '@/lib/shared';

export const addToCart = async (_: any, input: { variantId: string; quantity: number }) => {
  const cartId = cookies().get(CookiesNames.cartId)?.value;

  const { variantId, quantity } = input;

  if (!cartId) {
    const {
      createOrder: { order, apiErrors }
    } = await vendyxFetcher(CREATE_CART_MUTATION, {
      input: { line: { quantity, productVariantId: variantId } }
    });

    if (apiErrors.length) {
      return apiErrors[0]?.code;
    }

    cookies().set(CookiesNames.cartId, order?.id ?? '', { maxAge: CookiesDurations.month });
    revalidateTag(CacheTags.cart[0]);

    return;
  }

  try {
    const {
      addLineToOrder: { apiErrors }
    } = await vendyxFetcher(ADD_TO_CART_MUTATION, {
      cartId,
      input: { productVariantId: variantId, quantity }
    });

    if (apiErrors.length) {
      return apiErrors[0]?.code;
    }
  } catch (error) {
    // cart id cookie has a non-existing cart id
    if (error instanceof ApiError && error.code === 404) {
      cookies().delete(CookiesNames.cartId);
      await addToCart(_, input);
      return;
    }
  }

  revalidateTag(CacheTags.cart[0]);
};
