'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { CookiesNames } from '@/lib/shared/constants';
import { CartService } from '@/lib/vendyx/services';

/**
 * Set contact and shipping info to the cart and redirect to the shipping page.
 *
 * @warning this actions should be used in a form managed by react-hook-form, it does not validate the input
 */
export const addCustomerInfoToCart = async (input: Input) => {
  const { email, firstName, lastName, ...shippingAddress } = input;

  const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

  const customerResult = await CartService.addCustomer(cartId, { email, firstName, lastName });

  if (!customerResult.success) {
    return { error: customerResult.error, errorCode: customerResult.errorCode };
  }

  const shippingAddressResult = await CartService.addShippingAddress(cartId, shippingAddress);

  if (!shippingAddressResult.success) {
    return { error: shippingAddressResult.error, errorCode: shippingAddressResult.errorCode };
  }

  revalidateTag(CartService.Tags.cart(cartId));
  redirect('/checkout/shipping');
};

type Input = {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  streetLine1: string;
  streetLine2: string;
  city: string;
  province: string;
  postalCode: string;
  references: string;
};
