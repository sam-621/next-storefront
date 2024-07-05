'use client';

import { type FC } from 'react';

import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export const CartButton: FC<Props> = ({ quantity = 0, onClick }) => {
  return (
    <div className="flex gap-2">
      <ShoppingBagIcon onClick={onClick} className="w-6 h-6 text-gray-400" />
      <span className="text-gray-700">{quantity}</span>
    </div>
  );
};

type Props = {
  onClick?: () => void;
  /**
   * @default 0
   */
  quantity?: number;
};
