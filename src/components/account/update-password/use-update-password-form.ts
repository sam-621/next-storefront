import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useDialog } from '@/components/ui';
import { updatePassword } from '@/lib/customer/actions';
import { FormMessages } from '@/lib/shared/forms';
import { notification } from '@/lib/shared/notification';

export const useUpdatePasswordForm = () => {
  const { setIsOpen } = useDialog();
  const [isLoading, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormInput>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      newPassword: '',
      confirmPassword: ''
    },
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setIsOpen(false);
      setIsSuccess(false);
    }

    return () => {
      if (isSuccess && !isLoading) {
        notification.success('Password updated');
      }
    };
  }, [isSuccess, isLoading]);

  const onSubmit = (input: FormInput) => {
    if (input.newPassword !== input.confirmPassword) {
      form.setError('confirmPassword', { message: 'Passwords do not match' });
      return;
    }

    startTransition(async () => {
      const result = await updatePassword(input.newPassword, input.confirmPassword);

      if (result?.error) {
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
  newPassword: z.string().min(6, FormMessages.minChars(6)),
  confirmPassword: z.string().min(6, FormMessages.minChars(6))
});

type FormInput = z.infer<typeof schema>;
