'use client';

import { type FC } from 'react';

import { type CartFragment } from '@/lib/common';
import { Button, Input, Select } from '@/lib/common/components';

import { CheckoutFormCard } from '../checkout-card';
import { useInformationForm } from './use-information-form';

export const InformationForm: FC<Props> = ({ cart }) => {
  const { onSubmit, formState, register, isLoading } = useInformationForm(cart);
  const { errors } = formState;

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      <CheckoutFormCard title="Contact information">
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
      </CheckoutFormCard>

      <CheckoutFormCard title="Shipping address">
        <Select
          {...register('country')}
          error={errors.country?.message}
          label="Country"
          items={['México']}
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
            items={['Sinaloa']}
          />
          <Input
            {...register('postalCode')}
            error={errors.email?.message}
            label="Postal code"
            placeholder="80290"
          />
        </div>
        <Input
          {...register('references')}
          error={errors.email?.message}
          label="References"
          placeholder="In a corner"
        />
      </CheckoutFormCard>

      <hr />

      <div className="flex justify-end">
        <Button
          isLoading={isLoading}
          size="lg"
          type="submit"
          className="w-full font-light lg:w-fit"
        >
          Continue to shipping
        </Button>
      </div>
    </form>
  );
};

type Props = {
  cart: CartFragment;
};
