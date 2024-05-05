'use server';

import { revalidateTag } from 'next/cache';

import { CacheTags } from '@/lib/constants';
import { updateOrderLine } from '@/lib/vendyx';

export const updateCartItem = async (_: any, line: { id: string; quantity: number }) => {
  try {
    const cart = await updateOrderLine(line.id, { quantity: line.quantity });

    if (!cart) {
      return "Can't update item in cart";
    }

    revalidateTag(CacheTags.cart[0]);
  } catch (error) {
    return "Can't update item in cart";
  }
};
