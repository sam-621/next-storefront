import { OrderErrorCode } from '../codegen/graphql';

export const getOrderError = (code?: OrderErrorCode | null) => {
  console.log({ code });

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

  if (code === OrderErrorCode.MissingPaymentIntegration) {
    return 'A problem occurred with the payment method. try another one or contact support.';
  }

  if (code === OrderErrorCode.CountryNotFound) {
    return 'Country not found. Please refresh the page and try again.';
  }

  if (code === OrderErrorCode.MissingShippingPriceCalculator) {
    return 'A problem occurred with the shipping method. try another one or contact support.';
  }

  if (code === OrderErrorCode.OrderNotFound) {
    return 'A problem occurred with the order. try again or contact support.';
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

  if (code === OrderErrorCode.VariantNotFound) {
    return 'Variant not found. Please refresh the page and try again.';
  }

  return GenericError;
};

const GenericError = 'An error occurred. Please try again.';
