'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { addCustomerInfoToCart } from '@/lib/cart/actions';
import { FormMessages } from '@/lib/shared/forms';
import { notification } from '@/lib/shared/notification';
import { type MakeAny } from '@/lib/shared/utils';
import { type CartFragment, type CustomerDetailsFragment } from '@/lib/vendyx/types';

export const useInformationForm = (cart: CartFragment, account: CustomerDetailsFragment | null) => {
  const [isLoading, startTransition] = useTransition();

  const { shippingAddress } = cart;
  const customer = cart.customer ?? account;

  const form = useForm<InformationFormInput>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      email: customer?.email,
      firstName: customer?.firstName ?? undefined,
      lastName: customer?.lastName,
      country: shippingAddress?.country,
      streetLine1: shippingAddress?.streetLine1,
      streetLine2: shippingAddress?.streetLine2 ?? undefined,
      city: shippingAddress?.city,
      province: shippingAddress?.province,
      postalCode: shippingAddress?.postalCode,
      references: shippingAddress?.references ?? undefined
    },
    resolver: zodResolver(schema)
  });

  const onSubmit = async (input: InformationFormInput) => {
    startTransition(async () => {
      const result = await addCustomerInfoToCart(input);

      if (result.error) {
        notification.error(result.error);
      }
    });
  };

  return {
    onSubmit: form.handleSubmit(onSubmit),
    isLoading,
    ...form
  };
};

const schema = z.object({
  email: z.string().email(FormMessages.invalidEmail),
  firstName: z.string().min(2, FormMessages.minChars(2)).optional(),
  lastName: z.string().min(2, FormMessages.minChars(2)),
  country: z.string({ message: FormMessages.required }),
  streetLine1: z.string().min(5, FormMessages.minChars(5)),
  streetLine2: z.string().optional(),
  city: z.string().min(1, FormMessages.required),
  province: z.string({ message: FormMessages.required }),
  postalCode: z.string().min(5, FormMessages.minChars(5)),
  references: z.string().optional(),
  isEditing: z.boolean().optional()
} satisfies MakeAny<InformationFormInput>);

export type InformationFormInput = {
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
  isEditing: boolean;
};
