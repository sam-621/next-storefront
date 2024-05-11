import { type FC } from 'react';

import { getFieldError } from '@/lib/forms';
import { type CommonOrderFragment } from '@/lib/vendyx';
import { Input, Select } from '@/ui/theme';

import { getProvinces } from '../../data';
import { CheckoutFormCard } from '../checkout-form-card';

export const CheckoutShippingForm: FC<Props> = ({ fieldErrors, address }) => {
  return (
    <CheckoutFormCard title="Información de envío">
      <Input
        name="phoneNumber"
        label="Telefono"
        placeholder="667 1624 203"
        error={getFieldError(fieldErrors?.phoneNumber)}
        defaultValue={address?.phoneNumber ?? ''}
      />
      <Input
        name="streetLine1"
        label="Dirección"
        placeholder="Romulo Díaz de la Vega #117 Col. Lazaro cárdenas"
        error={getFieldError(fieldErrors?.streetLine1)}
        defaultValue={address?.streetLine1 ?? ''}
      />
      <Input
        name="streetLine2"
        label="Apartamento, suite, etc."
        placeholder="Apartamento 45"
        error={getFieldError(fieldErrors?.streetLine2)}
        defaultValue={address?.streetLine2 ?? ''}
      />

      <div className="grid grid-cols-2 gap-4">
        <Select
          name="country"
          label="País"
          items={['México']}
          error={getFieldError(fieldErrors?.country)}
          defaultValue={address?.country ?? ''}
        />
        <Select
          name="province"
          label="Estado"
          items={getProvinces()}
          error={getFieldError(fieldErrors?.province)}
          defaultValue={address?.province ?? ''}
        />
        <Input
          name="city"
          label="Ciudad"
          placeholder="Culiacán"
          error={getFieldError(fieldErrors?.city)}
          defaultValue={address?.city ?? ''}
        />
        <Input
          name="postalCode"
          label="Código postal"
          placeholder="80290"
          error={getFieldError(fieldErrors?.postalCode)}
          defaultValue={address?.postalCode ?? ''}
        />
      </div>
      <Input
        name="references"
        label="Referencias"
        placeholder="Hay dos pinos"
        error={getFieldError(fieldErrors?.references)}
        defaultValue={address?.references ?? ''}
      />
    </CheckoutFormCard>
  );
};

interface Props {
  fieldErrors?: {
    phoneNumber?: string[] | undefined;
    streetLine1?: string[] | undefined;
    streetLine2?: string[] | undefined;
    country?: string[] | undefined;
    province?: string[] | undefined;
    city?: string[] | undefined;
    postalCode?: string[] | undefined;
    references?: string[] | undefined;
  };
  address?: CommonOrderFragment['shippingAddress'];
}
