import { type FC } from 'react';

import { type CartFragment, cn, formatPrice } from '@/lib/common';

import { CartSummaryItem } from './cart-summary-item';

export const CartSummary: FC<Props> = ({ cart }) => {
  const lines = cart.lines.items;
  const { shipment, shippingAddress, payment } = cart;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-medium text-gray-900">Cart summary</h2>

      <div className="flex flex-col divide-y">
        {lines.map(l => (
          <div key={l.id} className="py-6">
            <CartSummaryItem line={l} />
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-gray-600 text-sm font-normal">Subtotal</p>
            <p className="ml-4 text-sm font-medium">{formatPrice(cart.subtotal)}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-gray-600 text-sm font-normal">Shipment</p>
            <p className={cn('ml-4 text-sm font-medium', !shipment && 'text-gray-600 font-normal')}>
              {shipment ? formatPrice(shipment.amount) : 'To calculate'}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <p className="text-gray-900 font-medium">Total</p>
        <p className="text-gray-900 font-medium">{formatPrice(cart.total)}</p>
      </div>
      {shippingAddress && (
        <>
          <hr />
          <div className="flex justify-between">
            <div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-gray-900">Dirección</p>
                <div className="text-gray-600 text-sm">
                  <p>{shippingAddress.streetLine1}</p>
                  {shippingAddress.streetLine2 && <p>{shippingAddress.streetLine2}</p>}
                  <p>
                    {shippingAddress.postalCode} {shippingAddress.city}, {shippingAddress.province}
                  </p>
                  <p>{shippingAddress.country}</p>
                </div>
              </div>
            </div>
            {payment && (
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-gray-900">Payment method</p>
                <p className="text-gray-600 text-sm">{payment.method.name}</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

type Props = {
  cart: CartFragment;
};
