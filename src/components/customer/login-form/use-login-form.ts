import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { login } from '@/lib/customer/actions';
import { FormMessages } from '@/lib/shared/forms';
import { notification } from '@/lib/shared/notification';

export const useLoginForm = () => {
  const [isLoading, startTransition] = useTransition();

  const form = useForm<FormInput>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(schema)
  });

  const onSubmit = async (input: FormInput) => {
    startTransition(async () => {
      const result = await login(input.email, input.password);

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
  password: z.string().min(8, FormMessages.minChars(8))
});

type FormInput = z.infer<typeof schema>;
