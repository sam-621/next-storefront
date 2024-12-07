'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { CookiesNames } from '@/lib/shared/constants';
import { CartService } from '@/lib/vendyx/services';

/**
 * Add shipment to cart by the provided shipping method id and redirect to the payment page.
 */
export const addShipmentToCart = async (methodId: string) => {
  const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

  const result = await CartService.addShipment(cartId, { methodId });

  if (!result.success) {
    return { error: result.error, errorCode: result.errorCode };
  }

  revalidateTag(CartService.Tags.cart(result.cartId));
  redirect('/checkout/payment');
};
