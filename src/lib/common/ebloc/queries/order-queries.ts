import { graphql } from '../codegen';

export const ORDER_FRAGMENT = graphql(`
  fragment Order on Order {
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

export const GET_ORDER_QUERY = graphql(`
  query GetOrder($code: String!) {
    order(code: $code) {
      ...Order
    }
  }
`);
