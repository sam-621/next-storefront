import { type FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { removeFromCart } from '../actions';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="font-medium text-indigo-600 hover:text-indigo-500 flex gap-1 items-center"
    >
      {pending && <ArrowPathIcon width={20} height={20} className="animate-spin" />}
      {pending ? 'Removing...' : 'Remove'}
    </button>
  );
};

export const CartRemoveButton: FC<Props> = ({ lineId }) => {
  const state = useFormState(removeFromCart, null);
  const action = state[1];

  const actionWithLineId = action.bind(null, lineId);

  return (
    <form action={actionWithLineId}>
      <SubmitButton />
    </form>
  );
};

interface Props {
  lineId: string;
}
