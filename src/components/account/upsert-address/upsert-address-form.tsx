import { type FC } from 'react';

import { Button, Dialog, Input, Select } from '@/components/ui';
import { type CustomerDetailsFragment, type GetCountriesQuery } from '@/lib/vendyx/types';

import { useUpsertAddressForm } from './use-upsert-address-form';

export const UpsertAddressForm: FC<Props> = ({ countries, address }) => {
  const { register, formState, onSubmit, isLoading, watch } = useUpsertAddressForm(
    countries,
    address
  );
  const { errors } = formState;

  const country = watch('country') ?? countries[0].name;
  const states = countries.find(c => c.name === country)?.states ?? [];

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <Input {...register('fullName')} error={errors.fullName?.message} label="Full name" />

        <Select
          {...register('country')}
          error={errors.country?.message}
          label="Country"
          items={countries.map(c => c.name)}
          placeholder="Select a country"
        />
        <Input
          {...register('streetLine1')}
          error={errors.streetLine1?.message}
          label="Address"
          placeholder=""
        />
        <Input
          {...register('streetLine2')}
          error={errors.streetLine2?.message}
          label="Apartment, suite, etc."
          placeholder=""
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Input
            {...register('city')}
            error={errors.city?.message}
            label="City"
            placeholder="Culiacán"
          />
          <Select
            {...register('province')}
            error={errors.province?.message}
            label="Province"
            items={states.map(s => s.name)}
          />
          <Input
            {...register('postalCode')}
            error={errors.postalCode?.message}
            label="Postal code"
            placeholder="80290"
          />
        </div>
        <Input {...register('phoneNumber')} error={errors.city?.message} label="Phone number" />
        <Input
          {...register('references')}
          error={errors.references?.message}
          label="References"
          placeholder="In a corner"
        />
        <label className="flex items-center gap-2 text-sm font-medium leading-6 text-gray-700">
          <input
            {...register('isDefault')}
            type="checkbox"
            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
          />
          Default address
        </label>
      </div>
      <div className="flex items-center justify-end gap-3">
        <Dialog.Close className="w-fit rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
          Cancel
        </Dialog.Close>
        <Button type="submit" isLoading={isLoading}>
          Save
        </Button>
      </div>
    </form>
  );
};

type Props = {
  countries: GetCountriesQuery['countries'];
  address?: CustomerDetailsFragment['addresses']['items'][0];
};
