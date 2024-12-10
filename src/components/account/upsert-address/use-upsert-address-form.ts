import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useDialog } from '@/components/ui';
import { createAddress, updateAddress } from '@/lib/address/actions';
import { FormMessages } from '@/lib/shared/forms';
import { type CustomerDetailsFragment, type GetCountriesQuery } from '@/lib/vendyx/types';

export const useUpsertAddressForm = (
  countries: GetCountriesQuery['countries'],
  address?: CustomerDetailsFragment['addresses']['items'][0]
) => {
  const { setIsOpen } = useDialog();
  const [isLoading, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  const country = address?.country ?? countries[0].name;
  const defaultState = address?.province ?? countries.find(c => c.name === country)?.states[0].name;

  const form = useForm<FormInput>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      fullName: address?.fullName ?? '',
      country,
      city: address?.city ?? '',
      postalCode: address?.postalCode ?? '',
      phoneNumber: address?.phoneNumber ?? '',
      province: defaultState,
      streetLine1: address?.streetLine1 ?? '',
      streetLine2: address?.streetLine2 ?? '',
      references: address?.references ?? '',
      isDefault: address?.isDefault ?? false
    },
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setIsOpen(false);
    }
  }, [isSuccess, isLoading]);

  const onSubmit = (input: FormInput) => {
    startTransition(async () => {
      if (address) {
        await updateAddress(address.id, input);
      } else {
        await createAddress(input);
      }
      setIsSuccess(true);
    });
  };

  return {
    isLoading,
    onSubmit: form.handleSubmit(onSubmit),
    ...form
  };
};

const schema = z.object({
  fullName: z.string().min(1, FormMessages.required),
  country: z.string().min(1, FormMessages.required),
  streetLine1: z.string().min(1, FormMessages.required),
  streetLine2: z.string().optional(),
  city: z.string().min(1, FormMessages.required),
  province: z.string().min(1, FormMessages.required),
  postalCode: z.string().min(1, FormMessages.required),
  phoneNumber: z.string().min(1, FormMessages.required),
  references: z.string().optional(),
  isDefault: z.boolean().optional()
});

type FormInput = z.infer<typeof schema>;
