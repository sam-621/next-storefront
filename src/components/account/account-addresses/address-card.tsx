import { type FC } from 'react';

import { formatPhoneNumber } from '@/lib/shared/utils';
import { type CustomerDetailsFragment, type GetCountriesQuery } from '@/lib/vendyx/types';

import { RemoveAddressButton } from '../remove-address';
import { UpsertAddressButton } from '../upsert-address';

export const AddressCard: FC<Props> = ({ title, address, countries }) => {
  return (
    <article className="flex flex-col gap-6 bg-gray-50 border rounded-lg p-6">
      <header className="flex items-start justify-between">
        <div className="flex flex-col gap-1 font-medium">
          <div>
            <span className="text-sm">{title}</span>
            {address.isDefault && (
              <span className="text-xs text-gray-700 border border-dashed rounded-full px-2 py-1 ml-2 ">
                Default
              </span>
            )}
          </div>
          <p>{address.fullName}</p>
        </div>
        <div className="flex gap-2">
          <RemoveAddressButton address={address} />
          <UpsertAddressButton countries={countries} address={address} />
        </div>
      </header>
      <hr />
      <div className="text-gray-500 font-light flex flex-col gap-2">
        <p>{address.fullName}</p>
        <p>{address.streetLine1}</p>
        <p>{address.streetLine2}</p>
        <p>
          {address.postalCode} {address.city}, {address.province}
        </p>
        <p>{address.country}</p>
        <p>{formatPhoneNumber(address.phoneNumber)}</p>
      </div>
    </article>
  );
};

type Props = {
  title: string;
  address: CustomerDetailsFragment['addresses']['items'][0];
  countries: GetCountriesQuery['countries'];
};
