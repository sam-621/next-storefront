import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { register } from '@/lib/customer/actions';
import { FormMessages } from '@/lib/shared/forms';
import { notification } from '@/lib/shared/notification';
import { CustomerErrorCode } from '@/lib/vendyx/types';

export const useRegisterForm = () => {
  const [isLoading, startTransition] = useTransition();

  const form = useForm<FormInput>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    resolver: zodResolver(schema)
  });

  const onSubmit = async (input: FormInput) => {
    startTransition(async () => {
      const result = await register(input);

      if (result.error) {
        if (result.errorCode === CustomerErrorCode.EmailAlreadyExists) {
          form.setError('email', { message: result.error });
          form.setFocus('email');
          return;
        }

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
  firstName: z.string().min(1, FormMessages.required),
  lastName: z.string().min(1, FormMessages.required),
  email: z.string().email(FormMessages.invalidEmail),
  password: z.string().min(8, FormMessages.minChars(8))
});

type FormInput = z.infer<typeof schema>;
