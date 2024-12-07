import { OrderErrorCode, type OrderErrorResult } from '../types';
import { GenericError } from './common.errors';

export const getOrderError = (error?: OrderErrorResult | null) => {
  if (!error) {
    return '';
  }

  if (error.code === OrderErrorCode.NotEnoughStock) {
    return `Product out of stock.`;
  }

  if (error.code === OrderErrorCode.CustomerInvalidEmail) {
    return 'Invalid email.';
  }

  if (error.code === OrderErrorCode.CustomerDisabled) {
    return 'Customer not found.';
  }

  if (error.code === OrderErrorCode.PaymentDeclined) {
    return 'The payment was declined. try again or contact support.';
  }

  if (error.code === OrderErrorCode.PaymentFailed) {
    return 'Payment failed. Please try again.';
  }

  if (error.code === OrderErrorCode.PaymentMethodNotFound) {
    return 'Payment method not found. Please refresh the page and try again.';
  }

  if (error.code === OrderErrorCode.ShippingMethodNotFound) {
    return 'Shipping method not found. Please refresh the page and try again.';
  }

  return GenericError;
};
