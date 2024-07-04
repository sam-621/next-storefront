import { graphql } from '../codegen';

export const CART = graphql(`
  fragment Cart on Order {
    id
    code
    subtotal
    total
    lines {
      items {
        id
        linePrice
        quantity
        unitPrice
        productVariant {
          id
          optionValues {
            id
            value
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
      phoneCountryCode
    }
    shippingAddress {
      streetLine1
      streetLine2
      postalCode
      city
      province
      country
      phoneCountryCode
      phoneNumber
    }
    shipment {
      id
      amount
      method {
        id
        name
      }
    }
    payment {
      id
      amount
      transactionId
      method {
        id
        name
      }
    }
  }
`);

export const GET_CART = graphql(`
  query GetCart($id: ID) {
    order(id: $id) {
      ...Cart
    }
  }
`);

export const GET_AVAILABLE_PAYMENT_METHODS = graphql(`
  query GetAvailablePaymentMethods {
    availablePaymentMethods {
      id
      name
      enabled
      description
    }
  }
`);

export const GET_AVAILABLE_SHIPPING_METHODS = graphql(`
  query GetAvailableShippingMethods {
    availableShippingMethods {
      id
      name
      enabled
      description
    }
  }
`);
