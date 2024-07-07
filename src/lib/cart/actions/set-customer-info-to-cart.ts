'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import {
  type AddCustomerToOrderInput,
  CacheTags,
  CookiesNames,
  type CreateAddressInput,
  eblocFetcher,
  getOrderError,
  SET_CUSTOMER_TO_CART_MUTATION,
  SET_SHIPPING_ADDRESS_TO_CART_MUTATION
} from '@/lib/common';

/**
 * Set contact and shipping info to the cart
 *
 * @warning this actions should be used in a form managed by react-hook-form, it does not validate the input
 */
export const setCustomerInfoToCart = async (input: Input) => {
  const { email, firstName, lastName } = input;
  const { country, streetLine1, streetLine2, province, city, postalCode, references } = input;

  const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

  const {
    addCustomerToOrder: { apiErrors: customerErrors }
  } = await addCustomer(cartId, { email, firstName, lastName });

  if (customerErrors.length) {
    return getOrderError(customerErrors[0]?.code);
  }

  const {
    addShippingAddressToOrder: { apiErrors: shippingAddressErrors }
  } = await addShippingAddress(cartId, {
    country,
    streetLine1,
    streetLine2,
    city,
    province,
    postalCode,
    references
  });

  if (shippingAddressErrors.length) {
    return getOrderError(shippingAddressErrors[0]?.code);
  }

  revalidateTag(CacheTags.cart[0]);
  redirect('/checkout/shipping');
};

const addCustomer = async (cartId: string, customer: AddCustomerToOrderInput) => {
  const result = await eblocFetcher(SET_CUSTOMER_TO_CART_MUTATION, { cartId, input: customer });

  return result;
};

const addShippingAddress = async (cartId: string, address: CreateAddressInput) => {
  const result = await eblocFetcher(SET_SHIPPING_ADDRESS_TO_CART_MUTATION, {
    cartId,
    input: address
  });

  return result;
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
