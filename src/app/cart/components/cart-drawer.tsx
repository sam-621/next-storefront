'use client';

import { useState } from 'react';

import { ShoppingBagIcon } from '@heroicons/react/24/outline';

import { Drawer } from '@/ui/theme';

import { CartFooter } from './cart-footer';
import { CartItem } from './cart-item';

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="flex gap-2 items-center group">
        <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 cursor-pointer" />
        <span className="text-gray-700 group-hover:text-gray-800">0</span>
      </button>
      <Drawer
        title="Carrito de compras"
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        footer={<CartFooter />}
      >
        <div className="divide-y divide-gray-200 h-full flex flex-col gap-6">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </Drawer>
    </div>
  );
};
