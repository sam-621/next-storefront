'use client';

import { type FC, useState } from 'react';

import { type CommonOrderFragment } from '@/lib/vendyx';
import { Drawer } from '@/ui/theme';

import { CartButton } from './cart-button';
import { CartFooter } from './cart-footer';
import { CartItem } from './cart-item';

export const CartDrawer: FC<Props> = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const lines = cart?.lines.items;

  return (
    <div>
      <CartButton onClick={() => setIsOpen(true)} quantity={cart?.totalQuantity} />
      <Drawer
        title="Cart"
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        footer={<CartFooter cart={cart} />}
      >
        {lines?.length ? (
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                <div className="divide-y divide-gray-200 h-full flex flex-col gap-6">
                  {lines.map(line => (
                    <CartItem key={line.id} line={line} />
                  ))}
                </div>
              </ul>
            </div>
          </div>
        ) : (
          <div className="grid items-center mt-8">
            <p className="text-center text-gray-500">Your cart is empty</p>
          </div>
        )}
      </Drawer>
    </div>
  );
};

interface Props {
  cart: CommonOrderFragment | null | undefined;
}
