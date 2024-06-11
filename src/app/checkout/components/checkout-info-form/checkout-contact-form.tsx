import { type FC } from 'react';

import { type CommonOrderFragment } from '@/lib/ebloc';
import { getFieldError } from '@/lib/forms';
import { Input } from '@/ui/theme';

import { CheckoutFormCard } from '../checkout-form-card';

export const CheckoutContactForm: FC<Props> = ({ fieldErrors, customer }) => {
  return (
    <CheckoutFormCard title="Contact information">
      <Input
        name="email"
        label="Email"
        placeholder="samuel.corrales621@gmail.com"
        defaultValue={customer?.email ?? ''}
        error={getFieldError(fieldErrors?.email)}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="firstName"
          label="First name (optional)"
          placeholder="Rogelio Samuel"
          error={getFieldError(fieldErrors?.firstName)}
          defaultValue={customer?.firstName ?? ''}
        />
        <Input
          name="lastName"
          label="Last name"
          placeholder="Moreno Corrales"
          error={getFieldError(fieldErrors?.lastName)}
          defaultValue={customer?.lastName ?? ''}
        />
      </div>
    </CheckoutFormCard>
  );
};

interface Props {
  fieldErrors?: {
    email?: string[] | undefined;
    firstName?: string[] | undefined;
    lastName?: string[] | undefined;
  };
  customer?: CommonOrderFragment['customer'];
}
