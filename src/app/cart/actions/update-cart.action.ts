'use server';

import { revalidateTag } from 'next/cache';

import { CacheTags } from '@/lib/constants';
import { getOrderErrorMessage, updateOrderLine } from '@/lib/ebloc';

export const updateCartItem = async (_: any, line: { id: string; quantity: number }) => {
  const { apiErrors } = await updateOrderLine(line.id, { quantity: line.quantity });

  const errorMessage = getOrderErrorMessage(apiErrors[0]);

  if (errorMessage) {
    return errorMessage;
  }

  revalidateTag(CacheTags.cart[0]);
};
