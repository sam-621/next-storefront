'use client';

import { type FC } from 'react';

import { DocumentPlusIcon } from '@heroicons/react/24/outline';

import { Dialog } from '@/components/ui';
import { type GetCountriesQuery } from '@/lib/vendyx/types';

import { CreateAddressForm } from './create-address-form';

export const CreateAddressButton: FC<Props> = ({ countries }) => {
  return (
    <Dialog>
      <Dialog.Trigger className="w-full h-28 border-2 border-dashed rounded-lg hover:border-gray-300 hover:bg-gray-50">
        <DocumentPlusIcon className="w-6 h-6 mx-auto text-gray-500" />
        <p className="text-sm text-gray-500">Add new address</p>
      </Dialog.Trigger>
      <Dialog.Content>
        <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col gap-4">
          <Dialog.Title>Add new address</Dialog.Title>
          <CreateAddressForm countries={countries} />
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

type Props = {
  countries: GetCountriesQuery['countries'];
};
