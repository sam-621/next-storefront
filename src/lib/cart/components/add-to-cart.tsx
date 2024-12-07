'use client';

import { type FC, useTransition } from 'react';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { notification } from '@/lib/shared/notification';

import { addToCart } from '../actions';

export const AddToCart: FC<Props> = ({
  availableForSale,
  variantId,
  quantity = 1,
  text = 'Add to cart',
  soldOutText = 'Sold out',
  className
}) => {
  const [isLoading, startTransition] = useTransition();

  const exec = () => {
    startTransition(async () => {
      const result = await addToCart({ variantId, quantity });

      if (result?.error) {
        notification.error(result.error);
      }
    });
  };

  return availableForSale ? (
    <button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        exec();
      }}
      disabled={isLoading}
      className={className}
    >
      {isLoading && <ArrowPathIcon className="animate-spin" width={16} height={16} />}
      {isLoading ? 'Adding...' : text}
    </button>
  ) : (
    <button disabled className={className}>
      {soldOutText}
    </button>
  );
};

type Props = {
  availableForSale: boolean;
  variantId: string;
  /**
   * @default 1
   */
  quantity?: number;
  /**
   * @default "Add to cart"
   */
  text?: string;
  /**
   * @default "Sold out"
   */
  soldOutText?: string;
  className?: string;
};
