'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { CookiesNames } from '@/lib/constants';
import { FormMessages } from '@/lib/forms';
import { addPaymentToOrder } from '@/lib/vendyx';

export const addPayment = async (_: any, paymentMethodId: string) => {
  let cartId;

  try {
    cartId = cookies().get(CookiesNames.cartId)?.value;

    if (!cartId) {
      return 'Error al generar la orden';
    }

    await addPaymentToOrder(cartId, { methodId: paymentMethodId });

    cookies().delete(CookiesNames.cartId);
  } catch (error) {
    return {
      message: FormMessages.unexpectedError,
      error: true
    };
  }

  redirect(`/checkout/success?code=${cartId}`);
};
