import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { updateCustomer } from '@/lib/customer/actions';
import { FormMessages } from '@/lib/shared/forms';
import { notification } from '@/lib/shared/notification';
import { type CustomerDetailsFragment, CustomerErrorCode } from '@/lib/vendyx/types';

export const useAccountDetailsForm = (customer: CustomerDetailsFragment) => {
  const [isLoading, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormInput>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      firstName: customer.firstName ?? '',
      lastName: customer.lastName,
      email: customer.email,
      phoneNumber: customer.phoneNumber ?? ''
    },
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    if (!isLoading && isSuccess) {
      notification.success('Your account has been updated');
      setIsSuccess(false);
      form.reset({
        firstName: customer.firstName ?? '',
        lastName: customer.lastName,
        email: customer.email,
        phoneNumber: customer.phoneNumber ?? ''
      });
    }
  }, [isLoading, isSuccess]);

  const onSubmit = (input: FormInput) => {
    startTransition(async () => {
      const result = await updateCustomer(input);

      if (result?.error) {
        if (result.errorCode === CustomerErrorCode.EmailAlreadyExists) {
          form.setError('email', { message: result.error });
          form.setFocus('email');

          return;
        }

        notification.error(result.error);
        return;
      }

      setIsSuccess(true);
    });
  };

  return {
    onSubmit: form.handleSubmit(onSubmit),
    isLoading,
    ...form
  };
};

const schema = z.object({
  firstName: z.string().min(1, FormMessages.required),
  lastName: z.string().min(1, FormMessages.required),
  email: z.string().email(FormMessages.invalidEmail),
  phoneNumber: z.string().min(1, FormMessages.required)
});

type FormInput = z.infer<typeof schema>;
