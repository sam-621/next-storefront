'use client';

import { type FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { type CommonOrderFragment } from '@/lib/vendyx';
import { cn } from '@/ui/utils';

import { addInfoToOrder } from '../../actions/add-info-to-order.action';
import { ShippingMethods } from '../shipping-methods/shipping-methods';
import { CheckoutContactForm } from './checkout-contact-form';
import { CheckoutShippingForm } from './checkout-shipping-form';

export const CheckoutForm: FC<Props> = ({ order }) => {
  const [result, action] = useFormState(addInfoToOrder, { error: false, message: '' });
  const fieldErrors = result?.fieldErrors;

  const { customer, shippingAddress } = order;

  return (
    <form action={action} className="flex flex-col gap-10">
      <CheckoutContactForm fieldErrors={fieldErrors} customer={customer} />
      <hr />
      <CheckoutShippingForm fieldErrors={fieldErrors} address={shippingAddress} />
      <hr />
      <ShippingMethods />
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
