'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import { CacheTags, CookiesNames } from '@/lib/constants';
import { addLineToOrder, createOrder, getOrderErrorMessage } from '@/lib/vendyx';

export const addToCart = async (_: any, line: { productVariantId: string; quantity: number }) => {
  let cartId = cookies().get(CookiesNames.cartId)?.value;

  if (!cartId) {
    const { apiErrors, order } = await createOrder({
      line
    });

    const errorMessage = getOrderErrorMessage(apiErrors[0]);

    if (errorMessage) return errorMessage;
    if (!order) return 'Error adding to cart';

    cartId = order.id;
    cookies().set(CookiesNames.cartId, cartId);

    revalidateTag(CacheTags.cart[0]);
    return;
  }

  const { apiErrors } = await addLineToOrder(cartId, line);

  const errorMessage = getOrderErrorMessage(apiErrors[0]);

  if (errorMessage) return errorMessage;

  revalidateTag(CacheTags.cart[0]);
};
