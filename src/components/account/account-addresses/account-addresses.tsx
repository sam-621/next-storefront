import { type FC } from 'react';

import { type CustomerDetailsFragment } from '@/lib/vendyx/types';

import { CreateAddressButton } from '../create-address';
import { AddressCard } from './address-card';

export const AccountAddresses: FC<Props> = ({ addresses }) => {
  return (
    <div className="flex flex-col gap-6">
      {addresses.map((address, index) => (
        <AddressCard key={index} title={`Address ${index + 1}`} address={address} />
      ))}
      <CreateAddressButton />
    </div>
  );
};

type Props = {
  addresses: CustomerDetailsFragment['addresses']['items'];
};
