'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import { CacheTags, CookiesNames } from '@/lib/constants';
import { removeOrderLine } from '@/lib/vendyx';

export const removeFromCart = async (_: any, lineId: string) => {
  try {
    const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

    if (!cartId) {
      return 'Failed to remove item from cart';
    }

    const cart = await removeOrderLine(lineId);

    if (!cart) {
      return 'Failed to remove item from cart';
    }

    revalidateTag(CacheTags.cart[0]);
  } catch (error) {
    return 'Failed to remove item from cart';
  }
};
