import { graphql } from '../codegen';

export const CommonOrder = graphql(`
  fragment CommonOrder on Order {
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
          product {
            name
            slug
            assets {
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
      id
      streetLine1
      streetLine2
      postalCode
      city
      province
      country
      phoneCountryCode
      phoneNumber
      references
    }
  }
`);
