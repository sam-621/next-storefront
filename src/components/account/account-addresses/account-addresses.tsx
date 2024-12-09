import { type FC } from 'react';

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
      <UpsertAddressButton countries={countries} />
    </div>
  );
};

type Props = {
  addresses: CustomerDetailsFragment['addresses']['items'];
};
