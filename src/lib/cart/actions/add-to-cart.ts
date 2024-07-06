'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import { CacheTags, CookiesNames, eblocFetcher } from '@/lib/common';
import { ADD_TO_CART_MUTATION, CREATE_CART_MUTATION } from '@/lib/common/ebloc/mutations';

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

    cookies().set(CookiesNames.cartId, order?.id ?? '');
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
    return apiErrors[0]?.code;
  }

  revalidateTag(CacheTags.cart[0]);
};
