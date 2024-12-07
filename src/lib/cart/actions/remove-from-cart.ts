'use server';

import { revalidateTag } from 'next/cache';

import { CartService } from '@/lib/vendyx/services';

export const removeFromCart = async (lineId: string) => {
  const result = await CartService.removeLine(lineId);

  if (!result.success) {
    return { error: result.error, errorCode: result.errorCode };
  }

  revalidateTag(CartService.Tags.cart(result.cartId));
};
