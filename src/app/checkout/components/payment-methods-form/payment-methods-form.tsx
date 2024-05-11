'use client';

import { type FC, useState } from 'react';
import { useFormState } from 'react-dom';

import { CheckCircleIcon } from '@heroicons/react/24/solid';

import { type GetAvailablePaymentMethodsQuery } from '@/lib/vendyx';
import { cn } from '@/ui/utils';

import { addPayment } from '../../actions';
import { CheckoutFormCard } from '../checkout-form-card';

export const PaymentMethodsForm: FC<Props> = ({ methods }) => {
  const [, action] = useFormState(addPayment, null);
  const [selected, setSelected] = useState<string>(methods[0].id);

  const actionWithMethodId = action.bind(null, selected);

  return (
    <form action={actionWithMethodId} className="flex flex-col gap-6">
      <CheckoutFormCard title="Métodos de pago">
        <div className="flex gap-4">
          {methods.map(m => (
            <div
              key={m.id}
              onClick={() => setSelected(m.id)}
              className={cn(
                'pointer-events-auto cursor-pointer w-full rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-1 ring-slate-700/10',
                {
                  'ring-2 ring-indigo-600': selected === m.id
                }
              )}
            >
              <div className="flex justify-between">
                <div className="font-medium text-slate-900">{m.name}</div>
                {selected === m.id && (
                  <CheckCircleIcon className="h-5 w-5 flex-none text-indigo-600" />
                )}
              </div>
              <div className="mt-1 text-slate-700">{m.description}</div>
            </div>
          ))}
        </div>
      </CheckoutFormCard>
      <button className="flex justify-center items-center px-6 py-3 w-full text-white font-medium bg-indigo-600 hover:bg-indigo-700 rounded-md">
        Pagar
      </button>
    </form>
  );
};

interface Props {
  methods: GetAvailablePaymentMethodsQuery['availablePaymentMethods'];
}
