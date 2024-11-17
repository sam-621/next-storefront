'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import {
  ADD_SHIPMENT_TO_CART_MUTATION,
  CacheTags,
  CookiesNames,
  vendyxFetcher,
  getOrderError
} from '@/lib/shared';

/**
 * Add shipment to cart by the provided shipping method id and redirect to the payment page.
 */
export const addShipmentToCart = async (_: any, methodId: string) => {
  const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

  const {
    addShipmentToOrder: { apiErrors }
  } = await vendyxFetcher(ADD_SHIPMENT_TO_CART_MUTATION, { cartId, input: { methodId } });

  if (apiErrors.length) {
    return getOrderError(apiErrors[0]?.code);
  }

  revalidateTag(CacheTags.cart[0]);
  redirect('/checkout/payment');
};
