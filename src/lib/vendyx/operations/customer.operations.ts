import { graphql } from '../codegen';

export const CUSTOMER_DETAILS_FRAGMENT = graphql(`
  fragment CustomerDetails on Customer {
    id
    email
    firstName
    lastName
    phoneNumber
  }
`);

export const GET_CUSTOMER_BY_ACCESS_TOKEN_QUERY = graphql(`
  query GetCustomer($accessToken: String!) {
    customer(accessToken: $accessToken) {
      ...CustomerDetails
    }
  }
`);

export const CREATE_CUSTOMER_MUTATION = graphql(`
  mutation CreateCustomerMutation($input: CreateCustomerInput!) {
    createCustomer(input: $input) {
      apiErrors {
        code
        message
      }
      customer {
        id
      }
    }
  }
`);

export const GENERATE_ACCESS_TOKEN_MUTATION = graphql(`
  mutation GenerateAccessToken($email: String!, $password: String!) {
    generateCustomerAccessToken(email: $email, password: $password) {
      apiErrors {
        code
        message
      }
      accessToken
    }
  }
`);

export const UPDATE_CUSTOMER_MUTATION = graphql(`
  mutation UpdateCustomer($accessToken: String!, $input: UpdateCustomerInput!) {
    updateCustomer(accessToken: $accessToken, input: $input) {
      apiErrors {
        code
        message
      }
      customer {
        id
      }
    }
  }
`);
