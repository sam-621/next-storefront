'use server';

import { revalidateTag } from 'next/cache';

import { CacheTags, UPDATE_CART_LINE_MUTATION, vendyxFetcher } from '@/lib/shared';

export const updateCartItem = async (_: any, input: { id: string; quantity: number }) => {
  const { id, quantity } = input;

  await vendyxFetcher(UPDATE_CART_LINE_MUTATION, {
    lineId: id,
    input: { quantity }
  });

  revalidateTag(CacheTags.cart[0]);
};
