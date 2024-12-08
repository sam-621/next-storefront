'use client';

import { type FC } from 'react';

import { Button, Input } from '@/components/ui';
import { type CustomerDetailsFragment } from '@/lib/vendyx/types';

import { useAccountDetailsForm } from './use-account-details-form';

export const AccountDetailsForm: FC<Props> = ({ customer }) => {
  const { isLoading, onSubmit, ...form } = useAccountDetailsForm(customer);
  const { register, formState } = form;
  const { errors, isDirty } = formState;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
      <div className="flex items-center gap-6">
        <Input {...register('firstName')} error={errors.firstName?.message} label="First name" />
        <Input {...register('lastName')} error={errors.lastName?.message} label="Last name" />
      </div>
      <Input {...register('email')} error={errors.email?.message} label="Email" />
      <Input
        {...register('phoneNumber')}
        error={errors.phoneNumber?.message}
        label="Phone number"
      />
      <Button type="submit" disabled={!isDirty} isLoading={isLoading || undefined}>
        Save
      </Button>
    </form>
  );
};

type Props = {
  customer: CustomerDetailsFragment;
};
