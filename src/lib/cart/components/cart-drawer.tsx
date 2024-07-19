'use client';

import { type FC, useEffect, useRef, useState } from 'react';

import { type CartFragment, Drawer } from '@/lib/common';

import { CartButton } from './cart-button';
import { CartFooter } from './cart-footer';
import { CartItem } from './cart-item';

export const CartDrawer: FC<Props> = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalQuantityRef = useRef(cart?.totalQuantity);
  const lines = cart?.lines.items ?? [];

  useEffect(() => {
    // If the total quantity has changed, open the drawer
    if (totalQuantityRef.current !== cart?.totalQuantity) {
      // Only open the drawer if it's not already open (quantity can change while the drawer is open)
      if (!isOpen) {
        setIsOpen(true);
      }

      totalQuantityRef.current = cart?.totalQuantity;
    }
  }, [totalQuantityRef, cart?.totalQuantity, isOpen]);

  return (
    <>
      <Drawer
        trigger={<CartButton quantity={cart?.totalQuantity} onClick={() => setIsOpen(true)} />}
        title="Shopping cart"
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        footer={<CartFooter cart={cart} />}
      >
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
