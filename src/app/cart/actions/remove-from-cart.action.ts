'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import { CacheTags, CookiesNames } from '@/lib/constants';
import { getOrderErrorMessage, removeOrderLine } from '@/lib/ebloc';

export const removeFromCart = async (_: any, lineId: string) => {
  try {
    const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

    if (!cartId) {
      return 'Failed to remove item from cart';
    }

    const { apiErrors } = await removeOrderLine(lineId);

    const errorMessage = getOrderErrorMessage(apiErrors[0]);

    if (errorMessage) {
      return errorMessage;
    }

    revalidateTag(CacheTags.cart[0]);
  } catch (error) {
    return 'Failed to remove item from cart';
  }
};
