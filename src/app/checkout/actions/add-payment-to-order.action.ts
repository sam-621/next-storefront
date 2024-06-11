'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { CookiesNames } from '@/lib/constants';
import { addPaymentToOrder, getOrderErrorMessage } from '@/lib/ebloc';

export const addPayment = async (_: any, paymentMethodId: string) => {
  const cartId = cookies().get(CookiesNames.cartId)?.value;

  if (!cartId) {
    return 'Error adding payment to order.';
  }

  const { apiErrors } = await addPaymentToOrder(cartId, { methodId: paymentMethodId });

  const errorMessage = getOrderErrorMessage(apiErrors[0]);
  if (errorMessage) return errorMessage;

  cookies().delete(CookiesNames.cartId);

  redirect(`/checkout/success?code=${cartId}`);
};
