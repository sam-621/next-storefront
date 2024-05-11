'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { CacheTags, CheckoutStepsField, CheckoutStepsValues, CookiesNames } from '@/lib/constants';
import { FormMessages } from '@/lib/forms';
import { addPaymentToOrder } from '@/lib/vendyx';

export const addPayment = async (_: any, paymentMethodId: string) => {
  try {
    const cartId = cookies().get(CookiesNames.cartId)?.value;

    if (!cartId) {
      return 'Error al generar la orden';
    }

    await addPaymentToOrder(cartId, { methodId: paymentMethodId });

    revalidateTag(CacheTags.cart[0]);
  } catch (error) {
    return {
      message: FormMessages.unexpectedError,
      error: true
    };
  }

  redirect(`/checkout?${CheckoutStepsField}=${CheckoutStepsValues.complete}`);
};
