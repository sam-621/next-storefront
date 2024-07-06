'use client';

import { type FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { addToCart } from '../actions';

const SubmitButton: FC<SubmitButtonProps> = ({ text, availableForSale, className }) => {
  const { pending } = useFormStatus();

  if (!availableForSale) {
    return (
      <button disabled className={className}>
        Sold out
      </button>
    );
  }

  return (
    <button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        e.stopPropagation();
      }}
      disabled={pending}
      className={className}
    >
      {pending && <ArrowPathIcon className="animate-spin" width={16} height={16} />}
      {pending ? 'Adding...' : text}
    </button>
  );
};

export const AddToCart: FC<Props> = ({
  availableForSale,
  variantId,
  quantity = 1,
  text = 'Add to cart',
  className
}) => {
  const [error, action] = useFormState(addToCart, null);

  const actionWithVariant = action.bind(null, { quantity, variantId });

  return (
    <form action={actionWithVariant}>
      <SubmitButton availableForSale={availableForSale} text={text} className={className} />
      {Boolean(error) && <p className="text-red-500 text-xs">{String(error)}</p>}
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
  className?: string;
};

type SubmitButtonProps = {
  text: string;
  availableForSale: boolean;
  className?: string;
};
