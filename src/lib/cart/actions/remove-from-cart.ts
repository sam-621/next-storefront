'use server';

import { revalidateTag } from 'next/cache';

import { CacheTags, eblocFetcher } from '@/lib/common';
import { REMOVE_CART_LINE_MUTATION } from '@/lib/common/ebloc/mutations';

export const removeFromCart = async (_: any, lineId: string) => {
  const {
    removeOrderLine: { apiErrors }
  } = await eblocFetcher(REMOVE_CART_LINE_MUTATION, { lineId });

  if (apiErrors.length) {
    return apiErrors[0].code;
  }

  revalidateTag(CacheTags.cart[0]);
};
