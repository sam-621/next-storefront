'use client';

import { type FC } from 'react';

import { DocumentPlusIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

import { Dialog } from '@/components/ui';
import { type CustomerDetailsFragment, type GetCountriesQuery } from '@/lib/vendyx/types';

import { UpsertAddressForm } from './upsert-address-form';

export const UpsertAddressButton: FC<Props> = ({ countries, address }) => {
  return (
    <Dialog>
      {address ? (
        <Dialog.Trigger>
          <PencilSquareIcon className="h-6 w-6 text-indigo-600" />
        </Dialog.Trigger>
      ) : (
        <Dialog.Trigger className="w-full h-28 border-2 border-dashed rounded-lg hover:border-gray-300 hover:bg-gray-50">
          <DocumentPlusIcon className="w-6 h-6 mx-auto text-gray-500" />
          <p className="text-sm text-gray-500">Create new address</p>
        </Dialog.Trigger>
      )}
      <Dialog.Content>
        <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col gap-4">
          <Dialog.Title>{address ? 'Update address' : 'Create new Address'}</Dialog.Title>
          <UpsertAddressForm address={address} countries={countries} />
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

type Props = {
  countries: GetCountriesQuery['countries'];
  address?: CustomerDetailsFragment['addresses']['items'][0];
};
