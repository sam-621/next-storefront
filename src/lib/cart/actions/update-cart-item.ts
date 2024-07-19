'use server';

import { revalidateTag } from 'next/cache';

import { CacheTags, eblocFetcher, UPDATE_CART_LINE_MUTATION } from '@/lib/common';

export const updateCartItem = async (_: any, input: { id: string; quantity: number }) => {
  const { id, quantity } = input;

  await eblocFetcher(UPDATE_CART_LINE_MUTATION, {
    lineId: id,
    input: { quantity }
  });

  revalidateTag(CacheTags.cart[0]);
};
