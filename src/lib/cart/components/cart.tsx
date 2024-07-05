'use server';

import { getCart } from '../data';
import { CartDrawer } from './cart-drawer';

export const Cart = async () => {
  const cart = await getCart();

  return <CartDrawer cart={cart} />;
};
