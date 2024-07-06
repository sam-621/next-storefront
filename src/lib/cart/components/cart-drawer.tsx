'use client';

import { type FC, useState } from 'react';

import { type CartFragment } from '@/lib/common';
import { Drawer } from '@/lib/common/components';

import { CartButton } from './cart-button';
import { CartFooter } from './cart-footer';
import { CartItem } from './cart-item';

export const CartDrawer: FC<Props> = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const lines = cart?.lines.items ?? [];

  return (
    <>
      <Drawer
        trigger={<CartButton quantity={cart?.totalQuantity} onClick={() => setIsOpen(true)} />}
        title="Shopping cart"
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        footer={<CartFooter cart={cart} />}
      >
        <div className="mt-8"></div>
        {lines.map(line => (
          <CartItem key={line.id} line={line} />
        ))}
      </Drawer>
    </>
  );
};

type Props = {
  cart: CartFragment | null | undefined;
};
