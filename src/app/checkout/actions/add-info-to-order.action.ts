'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { CacheTags, CheckoutStepsField, CheckoutStepsValues, CookiesNames } from '@/lib/constants';
import { FormMessages } from '@/lib/forms';
import { addCustomerToOrder, addShippingAddressToOrder } from '@/lib/vendyx';

const schema = z.object({
  email: z.string().email(FormMessages.invalidEmail),
  firstName: z.string().min(2, FormMessages.minChars(2)).optional(),
  lastName: z.string().min(2, FormMessages.minChars(2)),
  phoneNumber: z.string().min(10, FormMessages.invalidPhoneNumber),
  streetLine1: z.string().min(5, FormMessages.minChars(5)),
  streetLine2: z.string().optional(),
  country: z.string({ message: FormMessages.required }),
  province: z.string({ message: FormMessages.required }),
  city: z.string({ message: FormMessages.required }),
  postalCode: z.string().min(5, FormMessages.minChars(5)),
  references: z.string().optional()
});

// FormState<typeof schema>
export const addInfoToOrder = async (_: any, formData: FormData) => {
  const rawFormData = Object.fromEntries(formData.entries());

  const validatedFields = schema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: FormMessages.fieldErrors,
      error: true,
      fieldErrors: validatedFields.error.flatten().fieldErrors
    };
  }

  try {
    const data = validatedFields.data;
    const { email, firstName, lastName } = data;
    const {
      phoneNumber,
      streetLine1,
      streetLine2,
      country,
      province,
      city,
      postalCode,
      references
    } = data;

    const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

    await addCustomerToOrder(cartId, { email, firstName, lastName, enable: true });
    await addShippingAddressToOrder(cartId, {
      phoneCountryCode: '52',
      phoneNumber,
      streetLine1,
      streetLine2,
      country,
      province,
      city,
      postalCode,
      references
    });

    revalidateTag(CacheTags.cart[0]);
  } catch (error) {
    return {
      message: FormMessages.unexpectedError,
      error: true
    };
  }

  redirect(`/checkout?${CheckoutStepsField}=${CheckoutStepsValues.payment}`);
};
