'use client';

import { type FC, useTransition } from 'react';

import { ArrowPathIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

import { notification } from '@/lib/shared/notification';
import { type CartFragment } from '@/lib/vendyx/types';

import { updateCartItem } from '../actions';

export const CartQuantityButton: FC<Props> = ({ line, type, disabled, className }) => {
  const [isLoading, startTransition] = useTransition();

  const exec = () => {
    startTransition(async () => {
      const result = await updateCartItem(line.id, {
        quantity: type === 'plus' ? line.quantity + 1 : line.quantity - 1
      });

      if (result?.error) {
        notification.error(result.error);
      }
    });
  };

  return (
    <button
      type="button"
      onClick={exec}
      disabled={isLoading || disabled}
      className={className}
      title={disabled ? 'Not enough stock' : ''}
    >
      {isLoading ? (
        <ArrowPathIcon className="animate-spin" width={16} height={16} />
      ) : type === 'plus' ? (
        <PlusIcon width={16} height={16} />
      ) : (
        <MinusIcon width={16} height={16} />
      )}
    </button>
  );
};

type Props = {
  type: QuantityCounterType;
  line: CartFragment['lines']['items'][0];
  disabled?: boolean;
  className?: string;
};

type QuantityCounterType = 'plus' | 'minus';
