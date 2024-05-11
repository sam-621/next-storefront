'use client';

import { type FC, useState } from 'react';

import { CheckCircleIcon } from '@heroicons/react/24/solid';

import { type GetAvailableShippingMethodsQuery } from '@/lib/vendyx';
import { cn } from '@/ui/utils';

import { CheckoutFormCard } from '../checkout-form-card';

export const ShippingMethods: FC<Props> = ({ methods }) => {
  const [selected, setSelected] = useState<string>(methods[0].id);

  return (
    <CheckoutFormCard title="Método de envío">
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
  );
};

interface Props {
  methods: GetAvailableShippingMethodsQuery['availableShippingMethods'];
}
