import { Button, Input } from '@/components/ui';

import { useUpdatePasswordForm } from './use-update-password-form';

export const UpdatePasswordForm = () => {
  const { onSubmit, isLoading, register, formState } = useUpdatePasswordForm();
  const { errors } = formState;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Input
        {...register('newPassword')}
        error={errors.newPassword?.message}
        label="New password"
        type="password"
      />
      <Input
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
        label="Confirm password"
        type="password"
      />
      <Button type="submit" isLoading={isLoading} className="mt-2">
        Update
      </Button>
    </form>
  );
};
