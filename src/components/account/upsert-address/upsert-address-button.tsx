'use client';

import { type FC, type ReactElement } from 'react';

import { Dialog } from '@/components/ui';
import {
  type Address,
  type CustomerDetailsFragment,
  type GetCountriesQuery
} from '@/lib/vendyx/types';

import { UpsertAddressForm } from './upsert-address-form';

export const UpsertAddressButton: FC<Props> = ({
  title,
  countries,
  address,
  trigger,
  onFinish
}) => {
  return (
    <Dialog>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>
      <Dialog.Content>
        <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col gap-4">
          <Dialog.Title>{title}</Dialog.Title>
          <UpsertAddressForm address={address} countries={countries} onFinish={onFinish} />
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

type Props = {
  title: string;
  trigger: ReactElement;
  onFinish?: (address: Address) => void;
  countries: GetCountriesQuery['countries'];
  address?: CustomerDetailsFragment['addresses']['items'][0];
};
