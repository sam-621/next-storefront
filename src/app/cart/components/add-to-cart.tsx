'use client';

import { type FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { cn } from '@/ui/utils';

import { addToCart } from '../actions';

const SubmitButton: FC<SubmitButtonProps> = ({ text, className }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        e.stopPropagation();
      }}
      disabled={pending}
      className={cn(
        'flex gap-2 justify-center items-center bg-gray-100 px-8 py-2 w-full rounded text-gray-900 text-sm font-medium hover:bg-gray-200',
        className
      )}
    >
      {pending && <ArrowPathIcon className="animate-spin" width={16} height={16} />}
      {pending ? 'Agregando...' : text}
    </button>
  );
};

export const AddToCart: FC<Props> = ({
  variantId,
  quantity = 1,
  text = 'Agregar al carrito',
  className
}) => {
  const [error, action] = useFormState(addToCart, null);

  const actionWithVariant = action.bind(null, { quantity, productVariantId: variantId });

  // useNotification(message ?? '', 'error');

  return (
    <form action={actionWithVariant}>
      <SubmitButton text={text} className={className} />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </form>
  );
};

interface Props {
  variantId: string;
  /**
   * @default 1
   */
  quantity?: number;
  text?: string;
  className?: string;
}

interface SubmitButtonProps {
  text: string;
  className?: string;
}
