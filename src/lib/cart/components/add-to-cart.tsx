'use client';

import { type FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { getOrderError, type OrderErrorCode, useNotification } from '@/lib/shared';

import { addToCart } from '../actions';

const SubmitButton: FC<SubmitButtonProps> = ({
  text,
  soldOutText,
  availableForSale,
  onClick,
  error,
  className
}) => {
  const { pending } = useFormStatus();

  useNotification(getOrderError(error), 'error', pending);

  if (!availableForSale) {
    return (
      <button disabled className={className}>
        {soldOutText}
      </button>
    );
  }

  return (
    <div>
      {/* {Boolean(error) && (
        <div className="flex items-center gap-1 mb-1">
          <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
          <p className={cn('text-red-500 text-sm')}>{getOrderError(error)}</p>
        </div>
      )} */}
      <button
        type="submit"
        onClick={(e: React.FormEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          onClick && onClick();
        }}
        disabled={pending}
        className={className}
      >
        {pending && <ArrowPathIcon className="animate-spin" width={16} height={16} />}
        {pending ? 'Adding...' : text}
      </button>
    </div>
  );
};

export const AddToCart: FC<Props> = ({
  availableForSale,
  variantId,
  quantity = 1,
  text = 'Add to cart',
  soldOutText = 'Sold out',
  className
}) => {
  const [error, action] = useFormState(addToCart, null);

  const actionWithVariant = action.bind(null, { quantity, variantId });

  return (
    <form action={actionWithVariant}>
      <SubmitButton
        error={error}
        availableForSale={availableForSale}
        text={text}
        soldOutText={soldOutText}
        className={className}
      />
    </form>
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

type SubmitButtonProps = {
  text: string;
  soldOutText: string;
  availableForSale: boolean;
  error: OrderErrorCode | null | undefined;
  className?: string;
  onClick?: () => void;
};
