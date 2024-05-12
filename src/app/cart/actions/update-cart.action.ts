'use server';

import { revalidateTag } from 'next/cache';

import { CacheTags } from '@/lib/constants';
import { ApiError } from '@/lib/errors';
import { updateOrderLine } from '@/lib/vendyx';

export const updateCartItem = async (_: any, line: { id: string; quantity: number }) => {
  try {
    const cart = await updateOrderLine(line.id, { quantity: line.quantity });

    if (!cart) {
      return 'Error al actualizar el carrito';
    }

    revalidateTag(CacheTags.cart[0]);
  } catch (error) {
    if (error instanceof ApiError && error.message === 'Not enough stock')
      return 'No hay suficiente stock';

    return 'Error al actualizar el carrito';
  }
};
