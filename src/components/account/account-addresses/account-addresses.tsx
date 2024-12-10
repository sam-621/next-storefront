'use server';

import { type FC } from 'react';

import { DocumentPlusIcon } from '@heroicons/react/24/outline';

import { getCountries } from '@/lib/cart/data';
import { type CustomerDetailsFragment } from '@/lib/vendyx/types';

import { UpsertAddressButton } from '../upsert-address';
import { AddressCard } from './address-card';

export const AccountAddresses: FC<Props> = async ({ addresses }) => {
  const countries = await getCountries();

  return (
    <div className="flex flex-col gap-6">
      {addresses.map((address, index) => (
        <AddressCard
          key={index}
          title={`Address ${index + 1}`}
          address={address}
          countries={countries}
        />
      ))}
      <UpsertAddressButton
        title="Create new address"
        countries={countries}
        trigger={
          <div className="w-full h-28 border-2 border-dashed rounded-lg hover:border-gray-300 hover:bg-gray-50 flex flex-col items-center justify-center">
            <DocumentPlusIcon className="w-6 h-6 mx-auto text-gray-500" />
            <p className="text-sm text-gray-500">Create new address</p>
          </div>
        }
      />
    </div>
  );
};

type Props = {
  addresses: CustomerDetailsFragment['addresses']['items'];
};
