'use client';

import { type FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { DocumentPlusIcon, PlusIcon } from '@heroicons/react/24/outline';

import { UpsertAddressButton } from '@/components/account';
import { Button } from '@/components/ui';
import { formatPhoneNumber } from '@/lib/shared/utils';
import {
  type Address,
  type CartFragment,
  type CustomerDetailsFragment,
  type GetCountriesQuery
} from '@/lib/vendyx/types';

import { DefaultCustomerInfoCard } from './default-customer-info-card';
import { type InformationFormInput } from './use-information-form';

export const ShippingAddressSelector: FC<Props> = ({ customer, countries, cart }) => {
  const addresses = customer?.addresses.items ?? [];
  const {
    setValue,
    formState: { defaultValues }
  } = useFormContext<InformationFormInput>();

  const [isEdit, setIsEdit] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address>(defaultValues as Address);

  useEffect(() => {
    setValue('isEditing', isEdit);
  }, [isEdit, setValue]);

  useEffect(() => {
    setValue('city', selectedAddress.city);
    setValue('country', selectedAddress.country);
    setValue('postalCode', selectedAddress.postalCode);
    setValue('province', selectedAddress.province);
    setValue('streetLine1', selectedAddress.streetLine1);
    setValue('streetLine2', selectedAddress.streetLine2 ?? '');
    setValue('references', selectedAddress.references ?? '');
    setValue('fullName', selectedAddress.fullName);
    setValue('phoneNumber', selectedAddress.phoneNumber);
  }, [selectedAddress]);

  if (!addresses.length) {
    return (
      <UpsertAddressButton
        title="Create new address"
        onFinish={address => {
          setSelectedAddress(address);
        }}
        address={
          {
            ...cart.shippingAddress,
            fullName: customer.firstName
              ? `${customer.firstName} ${customer.lastName}`
              : customer.lastName
          } as unknown as Address
        }
        countries={countries}
        trigger={
          <div className="w-full h-28 border-2 border-dashed rounded-lg hover:border-gray-300 hover:bg-gray-50 flex flex-col items-center justify-center">
            <DocumentPlusIcon className="w-6 h-6 mx-auto text-gray-500" />
            <p className="text-sm text-gray-500">Create new address</p>
          </div>
        }
      />
    );
  }

  if (!isEdit) {
    return (
      <DefaultCustomerInfoCard
        title={selectedAddress.fullName ?? ''}
        details={[
          selectedAddress.streetLine1,
          selectedAddress.streetLine2 ?? '',
          `${selectedAddress.postalCode} ${selectedAddress.city}, ${selectedAddress.province}`,
          selectedAddress.country,
          formatPhoneNumber(selectedAddress.phoneNumber)
        ]}
        onClick={() => setIsEdit(true)}
      />
    );
  }

  if (isEdit) {
    return (
      <div className="flex flex-col gap-4">
        <fieldset className="flex flex-col rounded-lg border divide-y overflow-hidden">
          {addresses.map(a => {
            const { streetLine1, streetLine2, postalCode, city, province, country, phoneNumber } =
              a;

            return (
              <label key={a.id} className="flex items-center gap-4 p-4 hover:bg-gray-50">
                <input
                  checked={selectedAddress.id === a.id}
                  onChange={() => setSelectedAddress(a as Address)}
                  name="option"
                  type="radio"
                  className="mt-1 relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <DefaultCustomerInfoCard
                  className="bg-transparent"
                  title={a.fullName}
                  details={[
                    streetLine1,
                    streetLine2 ?? '',
                    `${postalCode} ${city}, ${province}`,
                    country,
                    formatPhoneNumber(phoneNumber)
                  ]}
                />
              </label>
            );
          })}
          <UpsertAddressButton
            title="Create new address"
            countries={countries}
            trigger={
              <p className="text-indigo-600 flex items-center gap-2 p-4 hover:bg-gray-50">
                <PlusIcon className="h-4 w-4" /> Add new Address
              </p>
            }
          />
        </fieldset>
        <div className="w-full">
          <Button className="w-full" onClick={() => setIsEdit(false)}>
            Save
          </Button>
        </div>
      </div>
    );
  }
};

type Props = {
  cart: CartFragment;
  customer: CustomerDetailsFragment;
  countries: GetCountriesQuery['countries'];
};
