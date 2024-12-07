import { getCart } from '@/lib/cart/data';

import { CartDrawer } from './cart-drawer';

export const Cart = async () => {
  const cart = await getCart();

  return <CartDrawer cart={cart} />;
};
