'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

import { CookiesDurations, CookiesNames } from '@/lib/shared/constants';
import { ApiError } from '@/lib/vendyx/fetcher';
import { CartService } from '@/lib/vendyx/services';

export const addToCart = async (input: Input) => {
  const cartId = cookies().get(CookiesNames.cartId)?.value;

  const { variantId, quantity } = input;

  // If there is no cart id cookie, it means the user doesn't have a cart yet, so we create one
  if (!cartId) {
    const result = await CartService.create({
      line: { productVariantId: variantId, quantity }
    });

    if (!result.success) {
      return { error: result.error, errorCode: result.errorCode };
    }

    cookies().set(CookiesNames.cartId, result.cartId ?? '', { maxAge: CookiesDurations.month });
    revalidateTag(CartService.Tags.cart(result.cartId));

    return;
  }

  // If there is a cart id cookie, we add the product to the cart
  try {
    const result = await CartService.addLine(cartId, { productVariantId: variantId, quantity });

    if (!result.success) {
      return { error: result.error, errorCode: result.errorCode };
    }

    revalidateTag(CartService.Tags.cart(result.cartId));
  } catch (error) {
    // cart id in cookie has a non-existing cart, so we remove the cookie and create a new cart
    if (error instanceof ApiError && error.code === 404) {
      cookies().delete(CookiesNames.cartId);
      await addToCart(input);
    }
  }
};

type Input = { variantId: string; quantity: number };
