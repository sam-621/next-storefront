'use client';

import { type FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { addToCart } from '../actions';

const SubmitButton: FC<SubmitButtonProps> = ({ text }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        e.stopPropagation();
      }}
      disabled={pending}
      className="flex gap-2 justify-center items-center opacity-0 bg-gray-100 px-8 py-2 w-full rounded text-gray-900 text-sm font-medium group-hover:opacity-100 hover:bg-gray-200"
    >
      {pending && <ArrowPathIcon className="animate-spin" width={16} height={16} />}
      {pending ? 'Agregando...' : text}
    </button>
  );
};

export const AddToCart: FC<Props> = ({ variantId, quantity = 1, text = 'Agregar al carrito' }) => {
  const [, action] = useFormState(addToCart, null);

  const actionWithVariant = action.bind(null, { quantity, productVariantId: variantId });

  // useNotification(message ?? '', 'error');

  return (
    <form action={actionWithVariant}>
      <SubmitButton text={text} />
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
}

interface SubmitButtonProps {
  text: string;
}
