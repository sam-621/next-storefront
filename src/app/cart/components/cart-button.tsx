import { type FC } from 'react';

import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export const CartButton: FC<Props> = ({ onClick, quantity }) => {
  return (
    <button onClick={onClick} className="flex gap-2 items-center group">
      <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 cursor-pointer" />
      <span className="text-gray-700 group-hover:text-gray-800">{quantity}</span>
    </button>
  );
};

interface Props {
  onClick?: () => void;
  quantity?: number;
}
