import { OrderErrorCode, type OrderErrorResult } from '../codegen/graphql';

export const getOrderErrorMessage = (error?: OrderErrorResult) => {
  if (!error) {
    return '';
  }

  if (error.code === OrderErrorCode.CustomerInvalidEmail) {
    return 'Invalid email';
  }

  if (error.code === OrderErrorCode.NotEnoughStock) {
    return 'Not enough stock';
  }

  if (error.code === OrderErrorCode.PaymentDeclined) {
    return 'Payment declined';
  }

  return 'Error creating order';
};
