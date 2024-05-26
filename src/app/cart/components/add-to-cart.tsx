'use client';

import { type FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { cn } from '@/ui/utils';

import { addToCart } from '../actions';

const SubmitButton: FC<SubmitButtonProps> = ({ text, availableForSale, className }) => {
  const { pending } = useFormStatus();
  const isDisabled = !availableForSale || pending;

  return (
    <button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        e.stopPropagation();
      }}
      disabled={isDisabled}
      className={cn(
        'flex gap-2 justify-center items-center bg-gray-100 px-8 py-2 w-full rounded text-gray-900 text-sm font-medium hover:bg-gray-200',
        isDisabled ? 'cursor-not-allowed text-gray-400 hover:bg-gray-100' : 'cursor-pointer',
        className
      )}
    >
      {pending && <ArrowPathIcon className="animate-spin" width={16} height={16} />}
      {isDisabled ? 'No stock' : pending ? 'Adding...' : text}
    </button>
  );
};

export const AddToCart: FC<Props> = ({
  variantId,
  availableForSale = true,
  quantity = 1,
  text = 'Add to cart',
  className
}) => {
  const [error, action] = useFormState(addToCart, null);

  const actionWithVariant = action.bind(null, { quantity, productVariantId: variantId });

  return (
    <form action={actionWithVariant}>
      <SubmitButton availableForSale={availableForSale} text={text} className={className} />
      {error && (
        <p aria-live="polite" role="status" className="text-red-500 text-xs">
          {error}
        </p>
      )}
    </form>
  );
};

interface Props {
  variantId: string;
  /**
   * If false, shows a no stock message and disables the button.
   */
  availableForSale: boolean;
  /**
   * @default 1
   */
  quantity?: number;
  text?: string;
  className?: string;
}

interface SubmitButtonProps {
  text: string;
  availableForSale: boolean;
  className?: string;
}
