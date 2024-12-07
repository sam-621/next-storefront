import { graphql } from '../codegen';

export const CART_FRAGMENT = graphql(`
  fragment Cart on Order {
    id
    code
    subtotal
    total
    totalQuantity
    lines {
      items {
        id
        linePrice
        quantity
        unitPrice
        productVariant {
          id
          stock
          optionValues {
            id
            name
          }
          asset {
            id
            source
          }
          product {
            name
            slug
            assets(input: { take: 1 }) {
              items {
                id
                source
              }
            }
          }
        }
      }
    }
    customer {
      id
      firstName
      lastName
      email
      phoneNumber
    }
    shippingAddress {
      streetLine1
      streetLine2
      postalCode
      city
      province
      country
      references
    }
    shipment {
      id
      amount
      method
    }
    payment {
      id
      amount
      transactionId
      method
    }
  }
`);

export const GET_CART_QUERY = graphql(`
  query GetCart($id: ID) {
    order(id: $id) {
      ...Cart
    }
  }
`);

export const GET_AVAILABLE_PAYMENT_METHODS_QUERY = graphql(`
  query GetAvailablePaymentMethods {
    availablePaymentMethods {
      id
      name
    }
  }
`);

export const GET_AVAILABLE_SHIPPING_METHODS_QUERY = graphql(`
  query GetAvailableShippingMethods($cartId: ID!) {
    availableShippingMethods(orderId: $cartId) {
      id
      name
      pricePreview
      description
    }
  }
`);

export const GET_COUNTRIES_QUERY = graphql(`
  query GetCountries {
    countries {
      id
      name
      states {
        id
        name
      }
    }
  }
`);

export const CREATE_CART_MUTATION = graphql(`
  mutation CreateCart($input: CreateOrderInput!) {
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

export const ADD_CUSTOMER_TO_CART_MUTATION = graphql(`
  mutation AddCustomerToCart($cartId: ID!, $input: AddCustomerToOrderInput!) {
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

export const ADD_SHIPPING_ADDRESS_TO_CART_MUTATION = graphql(`
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
        code
      }
    }
  }
`);
