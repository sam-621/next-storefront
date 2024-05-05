'use client';

import { type FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { ArrowPathIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

import { type CommonOrderFragment } from '@/lib/vendyx';
import { cn } from '@/ui/utils';

import { updateCartItem } from '../actions';

const SubmitButton = ({ type }: { type: QuantityCounterType }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn('border-gray-200 w-full flex justify-center items-center', {
        'cursor-not-allowed': pending
      })}
    >
      {pending ? (
        <ArrowPathIcon className="animate-spin" width={16} height={16} />
      ) : type === 'plus' ? (
        <PlusIcon width={16} height={16} />
      ) : (
        <MinusIcon width={16} height={16} />
      )}
    </button>
  );
};

export const CartQuantityButton: FC<Props> = ({ line, type }) => {
  const state = useFormState(updateCartItem, null);
  const action = state[1];

  const actionWithVariant = action.bind(null, {
    id: line.id,
    quantity: type === 'plus' ? line.quantity + 1 : line.quantity - 1
  });

  return (
    <form
      className={cn('border-gray-200 w-full flex justify-center items-center', {
        'border-r': type === 'minus',
        'border-l': type === 'plus'
      })}
      action={actionWithVariant}
    >
      <SubmitButton type={type} />
    </form>
  );
};

interface Props {
  type: QuantityCounterType;
  line: CommonOrderFragment['lines']['items'][0];
}

type QuantityCounterType = 'plus' | 'minus';
