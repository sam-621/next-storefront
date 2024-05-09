'use client';

import { type FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { getFieldError } from '@/lib/forms';
import { type CommonOrderFragment } from '@/lib/vendyx';
import { Input, Select } from '@/ui/theme';
import { cn } from '@/ui/utils';

import { addInfoToOrder } from '../../actions/add-info-to-order.action';
import { getProvinces } from '../../data';
import { CheckoutFormCard } from '../checkout-form-card';

export const CheckoutForm: FC<Props> = ({ order }) => {
  const [result, action] = useFormState(addInfoToOrder, { error: false, message: '' });
  const fieldErrors = result?.fieldErrors;

  const { customer, shippingAddress } = order;
  console.log({
    customer
  });

  return (
    <form action={action} className="flex flex-col gap-10">
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
      <hr />
      <CheckoutFormCard title="Información de envío">
        <Input
          name="phoneNumber"
          label="Telefono"
          placeholder="667 1624 203"
          error={getFieldError(fieldErrors?.phoneNumber)}
          defaultValue={shippingAddress?.phoneNumber ?? ''}
        />
        <Input
          name="streetLine1"
          label="Dirección"
          placeholder="Romulo Díaz de la Vega #117 Col. Lazaro cárdenas"
          error={getFieldError(fieldErrors?.streetLine1)}
          defaultValue={shippingAddress?.streetLine1 ?? ''}
        />
        <Input
          name="streetLine2"
          label="Apartamento, suite, etc."
          placeholder="Apartamento 45"
          error={getFieldError(fieldErrors?.streetLine2)}
          defaultValue={shippingAddress?.streetLine2 ?? ''}
        />

        <div className="grid grid-cols-2 gap-4">
          <Select
            name="country"
            label="País"
            items={['México']}
            error={getFieldError(fieldErrors?.country)}
            defaultValue={shippingAddress?.country ?? ''}
          />
          <Select
            name="province"
            label="Estado"
            items={getProvinces()}
            error={getFieldError(fieldErrors?.province)}
            defaultValue={shippingAddress?.province ?? ''}
          />
          <Input
            name="city"
            label="Ciudad"
            placeholder="Culiacán"
            error={getFieldError(fieldErrors?.city)}
            defaultValue={shippingAddress?.city ?? ''}
          />
          <Input
            name="postalCode"
            label="Código postal"
            placeholder="80290"
            error={getFieldError(fieldErrors?.postalCode)}
            defaultValue={shippingAddress?.postalCode ?? ''}
          />
        </div>
        <Input
          name="references"
          label="Referencias"
          placeholder="Hay dos pinos"
          error={getFieldError(fieldErrors?.references)}
          defaultValue={shippingAddress?.references ?? ''}
        />
      </CheckoutFormCard>
      <hr />
      <SubmitButton />
    </form>
  );
};

interface Props {
  order: CommonOrderFragment;
}

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-500 text-sm">No se le cobrará hasta el siguiente paso</p>
      <button
        disabled={pending}
        type="submit"
        className={cn(
          'flex items-center gap-2 w-fit rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-normal text-white shadow-sm hover:bg-indigo-700',
          {
            'cursor-not-allowed opacity-50 hover:bg-indigo-600': pending
          }
        )}
      >
        {pending && <ArrowPathIcon width={16} height={16} className="animate-spin" />}
        {pending ? 'Guardando...' : 'Continuar'}
      </button>
    </div>
  );
};
