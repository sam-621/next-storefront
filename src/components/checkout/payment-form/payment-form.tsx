'use client';

import { type FC, useState, useTransition } from 'react';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import { Button } from '@/components/ui';
import { addPaymentToCart } from '@/lib/cart/actions';
import { notification } from '@/lib/shared/notification';
import { cn } from '@/lib/shared/utils';
import { type GetAvailablePaymentMethodsQuery } from '@/lib/vendyx/types';

import { MethodsEmptyState } from '../checkout-empty-states/methods-empty-state';
import { CheckoutFormCard } from '../checkout-layouts/checkout-card';

export const PaymentForm: FC<Props> = ({ methods }) => {
  const [isLoading, startTransition] = useTransition();
  const [selected, setSelected] = useState<string>(methods[0]?.id ?? '');

  const onSubmit = () => {
    startTransition(async () => {
      const result = await addPaymentToCart(selected);

      if (result.error) {
        notification.error(result.error);
      }
    });
  };

  const hasMethods = methods.length > 0;

  return (
    <div className="flex flex-col gap-6">
      <CheckoutFormCard title="Payment methods">
        {hasMethods ? (
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
                {/* <div className="mt-1 text-slate-700">{m.description}</div> */}
              </div>
            ))}
          </div>
        ) : (
          <MethodsEmptyState text="No payment methods available." />
        )}
      </CheckoutFormCard>
      <hr />
      <div className="flex flex-col-reverse gap-4 md:flex-row justify-between">
        <div className="flex justify-center">
          <Link
            href="/checkout/shipping"
            className="text-indigo-600 flex gap-2 items-center text-sm"
          >
            <ChevronLeftIcon className="h-4 w-4 flex-none" />
            Return to shipping
          </Link>
        </div>
        <Button
          type="button"
          onClick={onSubmit}
          isLoading={isLoading}
          disabled={!hasMethods || isLoading}
          size="lg"
          className="w-full font-light md:w-fit"
        >
          Pay now
        </Button>
      </div>
    </div>
  );
};

type Props = {
  methods: GetAvailablePaymentMethodsQuery['availablePaymentMethods'];
};
