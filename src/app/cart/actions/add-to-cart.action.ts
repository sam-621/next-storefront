'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import { CacheTags, CookiesNames } from '@/lib/constants';
import { addLineToOrder, createOrder } from '@/lib/vendyx';

export const addToCart = async (_: any, line: { productVariantId: string; quantity: number }) => {
  try {
    let cartId = cookies().get(CookiesNames.cartId)?.value;

    if (!cartId) {
      const createCartResult = await createOrder({
        line
      });

      if (!createCartResult) {
        return 'Failed to add item to cart';
      }

      cartId = createCartResult.id;
      cookies().set(CookiesNames.cartId, cartId);

      revalidateTag(CacheTags.cart[0]);
      return;
    }

    const cart = await addLineToOrder(cartId, line);

    if (!cart) {
      return 'Failed to add item to cart';
    }

    revalidateTag(CacheTags.cart[0]);
  } catch (error) {
    return 'Failed to add item to cart';
  }
};
