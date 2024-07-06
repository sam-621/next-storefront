import { type FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { cn, getOrderError, useNotification } from '@/lib/common';

import { removeFromCart } from '../actions';

const SubmitButton = ({ error }: { error: string }) => {
  const { pending } = useFormStatus();

  useNotification(error, 'error', pending);

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        'font-medium text-indigo-600 hover:text-indigo-500 flex gap-2 items-center',
        pending && 'text-opacity-50 hover:text-opacity-50 hover:text-indigo-600 cursor-not-allowed'
      )}
    >
      {pending && <ArrowPathIcon width={20} height={20} className="animate-spin" />}
      {pending ? 'Removing...' : 'Remove'}
    </button>
  );
};

export const CartRemoveButton: FC<Props> = ({ lineId }) => {
  const [error, action] = useFormState(removeFromCart, null);

  const actionWithLineId = action.bind(null, lineId);

  return (
    <form action={actionWithLineId}>
      <SubmitButton error={getOrderError(error)} />
    </form>
  );
};

type Props = {
  lineId: string;
};
