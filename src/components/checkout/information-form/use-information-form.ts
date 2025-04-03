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

  const defaultCustomerAddress = account?.addresses.items.find(address => address.isDefault);
  const shippingAddress = cart.shippingAddress ?? (defaultCustomerAddress as any); // TODO: in defaultCustomerAddress, ass countryId
  const customer = account ?? cart.customer;

  const form = useForm<InformationFormInput>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      email: customer?.email,
      firstName: customer?.firstName ?? undefined,
      lastName: customer?.lastName,
      phoneNumber: shippingAddress?.phoneNumber ?? undefined,
      fullName: shippingAddress?.fullName ?? undefined,
      country: shippingAddress?.countryId,
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
    if (input.isEditing) return;

    // if is buying as logged in, has to have at least one address
    if (account && !account.addresses.items.length) return;

    startTransition(async () => {
      const result = await addCustomerInfoToCart({
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
        fullName: input.fullName ?? `${input.firstName} ${input.lastName}`,
        phoneNumber: input.phoneNumber,
        countryId: input.country,
        streetLine1: input.streetLine1,
        streetLine2: input.streetLine2,
        city: input.city,
        province: input.province,
        postalCode: input.postalCode,
        references: input.references
      });

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
  fullName: z.string().optional(),
  phoneNumber: z.string().min(1, FormMessages.required),
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
  fullName?: string;
  phoneNumber: string;
  country: string;
  streetLine1: string;
  streetLine2: string;
  city: string;
  province: string;
  postalCode: string;
  references: string;
  isEditing: boolean;
};
