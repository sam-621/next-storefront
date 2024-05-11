import { type FC } from 'react';

import { getFieldError } from '@/lib/forms';
import { type CommonOrderFragment } from '@/lib/vendyx';
import { Input } from '@/ui/theme';

import { CheckoutFormCard } from '../checkout-form-card';

export const CheckoutContactForm: FC<Props> = ({ fieldErrors, customer }) => {
  return (
    <CheckoutFormCard title="Información de contacto">
      <Input
        name="email"
        label="Correo electrónico"
        placeholder="samuel.corrales621@gmail.com"
        defaultValue={customer?.email ?? ''}
        error={getFieldError(fieldErrors?.email)}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="firstName"
          label="Nombre (opcional)"
          placeholder="Rogelio Samuel"
          error={getFieldError(fieldErrors?.firstName)}
          defaultValue={customer?.firstName ?? ''}
        />
        <Input
          name="lastName"
          label="Apellidos"
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
