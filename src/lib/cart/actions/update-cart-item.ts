'use server';

import { revalidateTag } from 'next/cache';

import { CartService } from '@/lib/vendyx/services';

export const updateCartItem = async (lineId: string, input: { quantity: number }) => {
  const result = await CartService.updateLine(lineId, { quantity: input.quantity });

  if (!result.success) {
    return { error: result.error, errorCode: result.errorCode };
  }

  revalidateTag(CartService.Tags.cart(result.cartId));
};
