import { OrderSummaryItem } from './order-summary-item';

export const OrderSummary = () => {
  return (
    <>
      <h2 className="text-lg font-medium text-gray-900">Resumen de la orden</h2>

      <div className="flex flex-col gap-6">
        <OrderSummaryItem />
        <hr />
        <OrderSummaryItem />
        <hr />
        <OrderSummaryItem />
        <hr />
      </div>
      <hr />
      <div></div>
    </>
  );
};
