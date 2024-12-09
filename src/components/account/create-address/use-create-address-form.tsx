import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useDialog } from '@/components/ui';
import { createAddress } from '@/lib/addresss/actions';
import { FormMessages } from '@/lib/shared/forms';
import { type GetCountriesQuery } from '@/lib/vendyx/types';

export const useCreateAddressForm = (countries: GetCountriesQuery['countries']) => {
  const { setIsOpen } = useDialog();
  const [isLoading, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  const country = countries[0].name;
  const states = countries.find(c => c.name === country)?.states ?? [];

  const form = useForm<FormInput>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      fullName: '',
      country,
      city: '',
      postalCode: '',
      province: states[0].name,
      streetLine1: '',
      streetLine2: '',
      references: ''
    },
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    if (!isLoading && isSuccess) {
      console.log('somooo');

      setIsOpen(false);
    }
  }, [isSuccess, isLoading]);

  const onSubmit = (input: FormInput) => {
    startTransition(async () => {
      await createAddress(input);
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
  references: z.string().min(1, FormMessages.required)
});

type FormInput = z.infer<typeof schema>;
