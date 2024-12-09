import { graphql } from '../codegen';

export const CREATE_CUSTOMER_ADDRESS_MUTATION = graphql(`
  mutation CreateCustomerAddress($input: CreateAddressInput!) {
    createCustomerAddress(input: $input) {
      id
    }
  }
`);

export const UPDATE_CUSTOMER_ADDRESS_MUTATION = graphql(`
  mutation UpdateCustomerAddress($id: ID!, $input: UpdateAddressInput!) {
    updateCustomerAddress(addressId: $id, input: $input) {
      id
    }
  }
`);

export const REMOVE_CUSTOMER_ADDRESS_MUTATION = graphql(`
  mutation RemoveCustomerAddress($id: ID!) {
    removeCustomerAddress(addressId: $id) {
      id
    }
  }
`);
