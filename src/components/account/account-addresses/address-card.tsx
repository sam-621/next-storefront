import { type FC } from 'react';

import { PencilSquareIcon } from '@heroicons/react/24/outline';

import { formatPhoneNumber } from '@/lib/shared/utils';
import { type CustomerDetailsFragment } from '@/lib/vendyx/types';

export const AddressCard: FC<Props> = ({ title, address }) => {
  return (
    <article className="flex flex-col gap-6 bg-gray-50 border rounded-lg p-6">
      <header className="flex items-start justify-between">
        <div className="flex flex-col gap-1 font-medium">
          <span className="text-sm">{title}</span>
          <p>{address.fullName}</p>
        </div>
        <div>
          <button>
            <PencilSquareIcon className="h-6 w-6 text-indigo-600" />
          </button>
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
};
