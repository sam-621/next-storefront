'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { parseOrderCode } from '@/lib/orders/utils';
import { CookiesNames } from '@/lib/shared/constants';
import { CartService } from '@/lib/vendyx/services';

/**
 * Add payment to cart by methodId, remove cart id from cookies (order has been places and cant be modified)
 * and redirect to success page.
 */
export const addPaymentToCart = async (methodId: string) => {
  const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

  const result = await CartService.addPayment(cartId, { methodId });

  if (!result.success) {
    return { error: result.error, errorCode: result.errorCode };
  }

  cookies().delete(CookiesNames.cartId);
  revalidateTag(CartService.Tags.cart(result.cartId));
  redirect(`/checkout/success?code=${parseOrderCode(result.orderCode)}`);
};
