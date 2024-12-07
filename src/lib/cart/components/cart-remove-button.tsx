'use client';

import { type FC, useTransition } from 'react';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { notification } from '@/lib/shared/notification';

import { removeFromCart } from '../actions';

export const CartRemoveButton: FC<Props> = ({ lineId, className }) => {
  const [isLoading, startTransition] = useTransition();

  const exec = () => {
    startTransition(async () => {
      const result = await removeFromCart(lineId);

      if (result?.error) {
        notification.error(result.error);
      }
    });
  };

  return (
    <button type="button" disabled={isLoading} onClick={exec} className={className}>
      {isLoading && <ArrowPathIcon width={20} height={20} className="animate-spin" />}
      {isLoading ? 'Removing...' : 'Remove'}
    </button>
  );
};

type Props = {
  lineId: string;
  className?: string;
};
