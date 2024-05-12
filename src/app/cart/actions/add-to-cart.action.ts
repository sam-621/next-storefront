'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import { CacheTags, CookiesNames } from '@/lib/constants';
import { ApiError } from '@/lib/errors';
import { addLineToOrder, createOrder } from '@/lib/vendyx';

export const addToCart = async (_: any, line: { productVariantId: string; quantity: number }) => {
  try {
    let cartId = cookies().get(CookiesNames.cartId)?.value;

    if (!cartId) {
      const createCartResult = await createOrder({
        line
      });

      if (!createCartResult) {
        return 'Error al agregar al carrito';
      }

      cartId = createCartResult.id;
      cookies().set(CookiesNames.cartId, cartId);

      revalidateTag(CacheTags.cart[0]);
      return;
    }

    const cart = await addLineToOrder(cartId, line);

    if (!cart) {
      return 'Error al agregar al carrito';
    }

    revalidateTag(CacheTags.cart[0]);
  } catch (error) {
    if (error instanceof ApiError && error.message === 'Not enough stock')
      return 'No hay suficiente stock';

    return 'Error al agregar al carrito';
  }
};
