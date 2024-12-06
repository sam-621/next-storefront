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
