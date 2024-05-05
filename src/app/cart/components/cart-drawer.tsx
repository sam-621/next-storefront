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
        title="Carrito de compras"
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        footer={<CartFooter cart={cart} />}
      >
        <div className="divide-y divide-gray-200 h-full flex flex-col gap-6">
          {lines?.length ? (
            <>
              {lines.map(line => (
                <CartItem key={line.id} line={line} />
              ))}
            </>
          ) : (
            <div className="grid items-center h-full">
              <p className="text-center text-gray-500">Tu carrito está vacío</p>
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
};

interface Props {
  cart: CommonOrderFragment | null | undefined;
}
