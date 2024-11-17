'use server';

import { revalidateTag } from 'next/cache';

import { CacheTags, vendyxFetcher, REMOVE_CART_LINE_MUTATION } from '@/lib/shared';

export const removeFromCart = async (_: any, lineId: string) => {
  const {
    removeOrderLine: { apiErrors }
  } = await vendyxFetcher(REMOVE_CART_LINE_MUTATION, { lineId });

  if (apiErrors.length) {
    return apiErrors[0].code;
  }

  revalidateTag(CacheTags.cart[0]);
};
