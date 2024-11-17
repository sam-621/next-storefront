'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import {
  ADD_PAYMENT_TO_CART_MUTATION,
  CacheTags,
  CookiesNames,
  getOrderError,
  parseOrderCode,
  vendyxFetcher
} from '@/lib/shared';

/**
 * Add payment to cart by methodId, remove cart id from cookies (order has been places and cant be modified)
 * and redirect to success page.
 */
export const addPaymentToCart = async (_: any, methodId: string) => {
  const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

  const {
    addPaymentToOrder: { apiErrors, order }
  } = await vendyxFetcher(ADD_PAYMENT_TO_CART_MUTATION, { cartId, input: { methodId } });

  if (apiErrors.length || !order) {
    return getOrderError(apiErrors[0]?.code);
  }

  cookies().delete(CookiesNames.cartId);
  revalidateTag(CacheTags.cart[0]);
  redirect(`/checkout/success?code=${parseOrderCode(order.code)}`);
};
