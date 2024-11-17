import { OrderErrorCode } from '../codegen/graphql';

export const getOrderError = (code?: OrderErrorCode | null) => {
  if (!code) {
    return '';
  }

  if (code === OrderErrorCode.NotEnoughStock) {
    return `You can't add more of this product to the cart.`;
  }

  if (code === OrderErrorCode.CustomerInvalidEmail) {
    return 'Invalid email.';
  }

  if (code === OrderErrorCode.CustomerDisabled) {
    return 'Customer not found.';
  }

  if (code === OrderErrorCode.PaymentDeclined) {
    return 'The payment was declined. try again or contact support.';
  }

  if (code === OrderErrorCode.PaymentMethodNotFound) {
    return 'Payment method not found. Please refresh the page and try again.';
  }

  if (code === OrderErrorCode.ShippingMethodNotFound) {
    return 'Shipping method not found. Please refresh the page and try again.';
  }

  return GenericError;
};

const GenericError = 'An error occurred. Please try again.';
