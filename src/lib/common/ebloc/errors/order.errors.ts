import { OrderErrorCode } from '../codegen/graphql';

export const getOrderError = (code?: OrderErrorCode | null) => {
  if (!code) {
    return '';
  }

  if (code === OrderErrorCode.NotEnoughStock) {
    return `You can't add more of this product to the cart.`;
  }

  return GenericError;
};

const GenericError = 'An error occurred. Please try again.';
