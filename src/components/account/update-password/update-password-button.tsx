'use client';

import { Dialog } from '@/components/ui';

import { UpdatePasswordForm } from './update-password-form';

export const UpdatePasswordButton = () => {
  return (
    <Dialog>
      <Dialog.Trigger className="text-indigo-600 font-semibold text-sm">Update</Dialog.Trigger>
      <Dialog.Content>
        <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col gap-4">
          <Dialog.Title>Update password</Dialog.Title>
          <UpdatePasswordForm />
        </div>
      </Dialog.Content>
    </Dialog>
  );
};
