import { OrderSummaryItem } from './order-summary-item';

export const OrderSummary = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-medium text-gray-900">Resumen de la orden</h2>

      <div className="flex flex-col gap-6">
        <OrderSummaryItem />
        <hr />
        <OrderSummaryItem />
        <hr />
        <OrderSummaryItem />
      </div>
      <hr />
      <div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-gray-600 text-sm font-normal">Subtotal</p>
            <p className="ml-4 text-sm font-medium">$67000</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-gray-600 text-sm font-normal">Shipping</p>
            <p className="ml-4 text-sm font-medium">$67000</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-gray-600 text-sm font-normal">Taxes</p>
            <p className="ml-4 text-sm font-medium">$67000</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <p className="text-gray-900 font-medium">Total</p>
        <p className="text-gray-900">$361.80</p>
      </div>
    </div>
  );
};
