'use client';

import { type FC, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import { addPaymentToCart } from '@/lib/cart';
import { CheckoutFormCard, MethodsEmptyState } from '@/lib/checkout';
import { Button, cn, type GetAvailablePaymentMethodsQuery, useNotification } from '@/lib/common';

export const PaymentForm: FC<Props> = ({ methods }) => {
  const [error, action] = useFormState(addPaymentToCart, null);
  const [selected, setSelected] = useState<string>(methods[0]?.id ?? '');

  useNotification(error ?? '', 'error');

  const actionWithMethod = action.bind(null, selected);
  const hasMethods = methods.length > 0;

  return (
    <form action={actionWithMethod} className="flex flex-col gap-6">
      <CheckoutFormCard title="Payment methods">
        {hasMethods ? (
          <div className="flex flex-col gap-4">
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
        <SubmitButton disabled={!hasMethods} />
      </div>
    </form>
  );
};

const SubmitButton = ({ disabled }: { disabled: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      isLoading={pending}
      disabled={disabled || pending}
      size="lg"
      type="submit"
      className="w-full font-light md:w-fit"
    >
      Continue to payment
    </Button>
  );
};

type Props = {
  methods: GetAvailablePaymentMethodsQuery['availablePaymentMethods'];
};
