'use client';

import { type FC, type KeyboardEvent } from 'react';
import { FormProvider } from 'react-hook-form';

import { Button, Input, Select } from '@/components/ui';
import { formatPhoneNumber } from '@/lib/shared/utils';
import {
  type CartFragment,
  type CustomerDetailsFragment,
  type GetCountriesQuery
} from '@/lib/vendyx/types';

import { CheckoutFormCard } from '../checkout-layouts/checkout-card';
import { DefaultCustomerInfoCard } from './default-customer-info-card';
import { ShippingAddressSelector } from './shipping-address-selector';
import { useInformationForm } from './use-information-form';

export const InformationForm: FC<Props> = ({ cart, countries, customer }) => {
  console.log({
    cart
  });
  const form = useInformationForm(cart, customer);
  const { onSubmit, formState, register, isLoading, watch } = form;
  const { errors } = formState;

  const isEditing = watch('isEditing');
  const country = watch('country') ?? cart.shippingAddress?.countryId ?? countries[0].id;
  const states = countries.find(c => c.id === country)?.states ?? [];

  const control = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter' && form.getValues('isEditing')) {
      e.preventDefault();
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="flex flex-col gap-10" onKeyDown={control}>
        <CheckoutFormCard title="Contact information">
          {customer ? (
            <DefaultCustomerInfoCard
              title={customer.email}
              details={[
                customer.firstName
                  ? `${customer.firstName} ${customer.lastName}`
                  : customer.lastName,
                customer.phoneNumber ? formatPhoneNumber(customer.phoneNumber) : ''
              ]}
            />
          ) : (
            <>
              <Input
                {...register('email')}
                error={errors.email?.message}
                label="Email"
                placeholder="samuel.corrales621@gmail.com"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  {...register('firstName')}
                  error={errors.firstName?.message}
                  label="First name (optional)"
                  placeholder="Rogelio Samuel"
                />
                <Input
                  {...register('lastName')}
                  error={errors.lastName?.message}
                  label="Last name"
                  placeholder="Moreno Corrales"
                />
              </div>
            </>
          )}
        </CheckoutFormCard>

        <CheckoutFormCard title="Shipping address">
          {customer ? (
            <ShippingAddressSelector customer={customer} countries={countries} cart={cart} />
          ) : (
            <>
              <Input
                {...register('phoneNumber')}
                error={errors.phoneNumber?.message}
                label="Phone number"
                placeholder=""
              />
              <Select
                {...register('country')}
                error={errors.country?.message}
                label="Country"
                items={countries.map(c => ({ label: c.name, value: c.id }))}
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
              <div className="grid grid-cols-3 gap-4">
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
                  items={states.map(s => ({ label: s.name, value: s.name }))}
                />
                <Input
                  {...register('postalCode')}
                  error={errors.postalCode?.message}
                  label="Postal code"
                  placeholder="80290"
                />
              </div>
              <Input
                {...register('references')}
                error={errors.references?.message}
                label="References"
                placeholder="In a corner"
              />
            </>
          )}
        </CheckoutFormCard>

        <hr />

        <div className="flex justify-end">
          <Button
            disabled={Boolean(customer) && (isEditing || !customer?.addresses.items.length)}
            isLoading={isLoading || undefined}
            size="lg"
            type="submit"
            className="w-full font-light lg:w-fit"
          >
            Continue to shipping
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

type Props = {
  customer: CustomerDetailsFragment | null;
  cart: CartFragment;
  countries: GetCountriesQuery['countries'];
};
