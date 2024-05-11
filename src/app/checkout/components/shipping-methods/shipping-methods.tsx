'use client';

import { useState } from 'react';

import { CheckCircleIcon } from '@heroicons/react/24/solid';

import { cn } from '@/ui/utils';

import { CheckoutFormCard } from '../checkout-form-card';

export const ShippingMethods = () => {
  const [selected, setSelected] = useState(0);
  return (
    <CheckoutFormCard title="Método de envío">
      <div className="flex gap-4">
        <div
          onClick={() => setSelected(0)}
          className={cn(
            'pointer-events-auto cursor-pointer w-full rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-1 ring-slate-700/10',
            {
              'ring-2 ring-indigo-600': selected === 0
            }
          )}
        >
          <div className="flex justify-between">
            <div className="font-medium text-slate-900">Newsletter</div>
            {selected === 0 && <CheckCircleIcon className="h-5 w-5 flex-none text-indigo-600" />}
          </div>
          <div className="mt-1 text-slate-700">Last message sent an hour ago</div>
          <div className="mt-6 font-medium text-slate-900">621 users</div>
        </div>
        <div
          onClick={() => setSelected(1)}
          className={cn(
            'pointer-events-auto cursor-pointer w-full rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-1 ring-slate-700/10',
            {
              'ring-2 ring-indigo-600': selected === 1
            }
          )}
        >
          <div className="flex justify-between">
            <div className="font-medium text-slate-900">Existing customers</div>
            {selected === 1 && <CheckCircleIcon className="h-5 w-5 flex-none text-indigo-600" />}
          </div>
          <div className="mt-1 text-slate-700">Last message sent an hour ago</div>
          <div className="mt-6 font-medium text-slate-900">1200 users</div>
        </div>
      </div>
    </CheckoutFormCard>
  );
};
