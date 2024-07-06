'use server';

import { cookies } from 'next/headers';

import { CookiesNames, eblocFetcher } from '@/lib/common';
import { ADD_TO_CART_MUTATION, CREATE_CART_MUTATION } from '@/lib/common/ebloc/mutations';

export const addToCart = async (_: any, input: { variantId: string; quantity: number }) => {
  const cartId = cookies().get(CookiesNames.cartId)?.value;

  const { variantId, quantity } = input;

  if (!cartId) {
    const {
      createOrder: { order }
    } = await eblocFetcher(CREATE_CART_MUTATION, {
      input: { line: { quantity, productVariantId: variantId } }
    });

    cookies().set(CookiesNames.cartId, order?.id ?? '');

    return;
  }

  await eblocFetcher(ADD_TO_CART_MUTATION, {
    cartId,
    input: { productVariantId: variantId, quantity }
  });
};
