import { graphql } from '../codegen';

export const CREATE_CART_MUTATION = graphql(`
  mutation CreateCart($input: CreateOrderInput) {
    createOrder(input: $input) {
      apiErrors {
        code
        message
      }
      order {
        id
      }
    }
  }
`);

export const ADD_TO_CART_MUTATION = graphql(`
  mutation AddToCart($cartId: ID!, $input: CreateOrderLineInput!) {
    addLineToOrder(orderId: $cartId, input: $input) {
      apiErrors {
        code
        message
      }
      order {
        id
      }
    }
  }
`);

export const UPDATE_CART_LINE_MUTATION = graphql(`
  mutation UpdateCartLine($lineId: ID!, $input: UpdateOrderLineInput!) {
    updateOrderLine(lineId: $lineId, input: $input) {
      apiErrors {
        code
        message
      }
      order {
        id
      }
    }
  }
`);

export const REMOVE_CART_LINE_MUTATION = graphql(`
  mutation RemoveCartLine($lineId: ID!) {
    removeOrderLine(lineId: $lineId) {
      apiErrors {
        code
        message
      }
      order {
        id
      }
    }
  }
`);

export const SET_CUSTOMER_TO_CART_MUTATION = graphql(`
  mutation SetCustomerToCart($cartId: ID!, $input: AddCustomerToOrderInput!) {
    addCustomerToOrder(orderId: $cartId, input: $input) {
      apiErrors {
        code
        message
      }
      order {
        id
      }
    }
  }
`);

export const SET_SHIPPING_ADDRESS_TO_CART_MUTATION = graphql(`
  mutation addShippingAddressToCart($cartId: ID!, $input: CreateAddressInput!) {
    addShippingAddressToOrder(orderId: $cartId, input: $input) {
      apiErrors {
        code
        message
      }
      order {
        id
      }
    }
  }
`);

export const ADD_SHIPMENT_TO_CART_MUTATION = graphql(`
  mutation AddShipmentToOrderMutation($cartId: ID!, $input: AddShipmentToOrderInput!) {
    addShipmentToOrder(orderId: $cartId, input: $input) {
      apiErrors {
        code
        message
      }
      order {
        id
      }
    }
  }
`);

export const ADD_PAYMENT_TO_CART_MUTATION = graphql(`
  mutation AddPaymentToCartMutation($cartId: ID!, $input: AddPaymentToOrderInput!) {
    addPaymentToOrder(orderId: $cartId, input: $input) {
      apiErrors {
        code
        message
      }
      order {
        id
      }
    }
  }
`);
