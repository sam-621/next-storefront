import { type FC } from 'react';

import { getFormattedPhoneNumber, getFormattedPrice } from '@/lib/utils';
import { type CommonOrderFragment } from '@/lib/vendyx';
import { cn } from '@/ui/utils';

import { OrderSummaryItem } from './order-summary-item';

export const OrderSummary: FC<Props> = ({ order }) => {
  const lines = order.lines.items;
  const { shipment, shippingAddress, payment } = order;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

      <div className="flex flex-col gap-6">
        {lines.map(l => (
          <>
            <OrderSummaryItem line={l} />
            <hr />
          </>
        ))}
      </div>
      <div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-gray-600 text-sm font-normal">Subtotal</p>
            <p className="ml-4 text-sm font-medium">{getFormattedPrice(order.subtotal)}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-gray-600 text-sm font-normal">Shipment</p>
            <p className={cn('ml-4 text-sm font-medium', !shipment && 'text-gray-600 font-normal')}>
              {shipment ? getFormattedPrice(shipment.amount) : 'To calculate'}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <p className="text-gray-900 font-medium">Total</p>
        <p className="text-gray-900 font-medium">{getFormattedPrice(order.total)}</p>
      </div>
      {shippingAddress && (
        <>
          <hr />
          <div className="flex justify-between">
            <div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-gray-900">Address</p>
                <div className="text-gray-600 text-sm">
                  <p>{shippingAddress.streetLine1}</p>
                  {shippingAddress.streetLine2 && <p>{shippingAddress.streetLine2}</p>}
                  <p>
                    {shippingAddress.postalCode} {shippingAddress.city}, {shippingAddress.province}
                  </p>
                  <p>{shippingAddress.country}</p>
                  {shippingAddress.phoneCountryCode && shippingAddress.phoneNumber && (
                    <p>
                      +{shippingAddress.phoneCountryCode}{' '}
                      {getFormattedPhoneNumber(shippingAddress.phoneNumber)}
                    </p>
                  )}
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

interface Props {
  order: CommonOrderFragment;
}
