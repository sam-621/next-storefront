import { type FC } from 'react';

import { getFormattedPrice } from '@/lib/utils';
import { type CommonOrderFragment } from '@/lib/vendyx';
import { cn } from '@/ui/utils';

import { OrderSummaryItem } from './order-summary-item';

export const OrderSummary: FC<Props> = ({ order }) => {
  const lines = order.lines.items;
  const { shipment } = order;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-medium text-gray-900">Resumen de la orden</h2>

      <div className="flex flex-col gap-6">
        {lines.map(l => (
          <>
            <OrderSummaryItem line={l} />
            <hr />
          </>
        ))}
      </div>
      {/* <hr /> */}
      <div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-gray-600 text-sm font-normal">Subtotal</p>
            <p className="ml-4 text-sm font-medium">{getFormattedPrice(order.subtotal)}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-gray-600 text-sm font-normal">Envío</p>
            <p className={cn('ml-4 text-sm font-medium', !shipment && 'text-gray-600 font-normal')}>
              {shipment ? getFormattedPrice(shipment.amount) : 'Por calcular'}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <p className="text-gray-900 font-medium">Total</p>
        <p className="text-gray-900 font-medium">{getFormattedPrice(order.total)}</p>
      </div>
    </div>
  );
};

interface Props {
  order: CommonOrderFragment;
}
