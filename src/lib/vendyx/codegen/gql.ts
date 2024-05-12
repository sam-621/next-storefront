/* eslint-disable */
import * as types from './graphql';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  fragment CommonOrder on Order {\n    id\n    code\n    subtotal\n    total\n    totalQuantity\n    lines {\n      items {\n        id\n        linePrice\n        quantity\n        unitPrice\n        productVariant {\n          id\n          stock\n          product {\n            name\n            slug\n            assets {\n              items {\n                id\n                source\n              }\n            }\n          }\n        }\n      }\n    }\n    customer {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n      phoneCountryCode\n    }\n    shippingAddress {\n      id\n      streetLine1\n      streetLine2\n      postalCode\n      city\n      province\n      country\n      phoneCountryCode\n      phoneNumber\n      references\n    }\n    shipment {\n      id\n      amount\n      trackingCode\n      method {\n        id\n        name\n      }\n    }\n    payment {\n      id\n      amount\n      transactionId\n      method {\n        id\n        name\n        description\n        enabled\n      }\n    }\n  }\n':
    types.CommonOrderFragmentDoc,
  '\n  fragment CommonProduct on Product {\n    id\n    name\n    slug\n    description\n    onlineOnly\n    variants(input: { take: 1 }) {\n      items {\n        id\n        stock\n        price\n      }\n    }\n    assets {\n      items {\n        id\n        name\n        source\n      }\n    }\n  }\n':
    types.CommonProductFragmentDoc,
  '\n  mutation CreateOrderMutation($input: CreateOrderInput) {\n    createOrder(input: $input) {\n      ...CommonOrder\n    }\n  }\n':
    types.CreateOrderMutationDocument,
  '\n  mutation AddLineToOrderMutation($orderId: ID!, $input: CreateOrderLineInput!) {\n    addLineToOrder(orderId: $orderId, input: $input) {\n      ...CommonOrder\n    }\n  }\n':
    types.AddLineToOrderMutationDocument,
  '\n  mutation UpdateOrderLineMutation($lineId: ID!, $input: UpdateOrderLineInput!) {\n    updateOrderLine(lineId: $lineId, input: $input) {\n      ...CommonOrder\n    }\n  }\n':
    types.UpdateOrderLineMutationDocument,
  '\n  mutation RemoveOrderLineMutation($lineId: ID!) {\n    removeOrderLine(lineId: $lineId) {\n      ...CommonOrder\n    }\n  }\n':
    types.RemoveOrderLineMutationDocument,
  '\n  mutation AddCustomerToOrder($orderId: ID!, $input: CreateCustomerInput!) {\n    addCustomerToOrder(orderId: $orderId, input: $input) {\n      ...CommonOrder\n    }\n  }\n':
    types.AddCustomerToOrderDocument,
  '\n  mutation addShippingAddressToOrder($orderId: ID!, $input: CreateAddressInput!) {\n    addShippingAddressToOrder(orderId: $orderId, input: $input) {\n      ...CommonOrder\n    }\n  }\n':
    types.AddShippingAddressToOrderDocument,
  '\n  mutation AddShipmentToOrderMutation($orderId: ID!, $input: AddShipmentToOrderInput!) {\n    addShipmentToOrder(orderId: $orderId, input: $input) {\n      ...CommonOrder\n    }\n  }\n':
    types.AddShipmentToOrderMutationDocument,
  '\n  mutation AddPaymentToOrderMutation($orderId: ID!, $input: AddPaymentToOrderInput!) {\n    addPaymentToOrder(orderId: $orderId, input: $input) {\n      ...CommonOrder\n    }\n  }\n':
    types.AddPaymentToOrderMutationDocument,
  '\n  query GetOrderQuery($orderId: ID, $code: String) {\n    order(id: $orderId, code: $code) {\n      ...CommonOrder\n    }\n  }\n':
    types.GetOrderQueryDocument,
  '\n  query GetAvailablePaymentMethods {\n    availablePaymentMethods {\n      id\n      name\n      description\n    }\n  }\n':
    types.GetAvailablePaymentMethodsDocument,
  '\n  query GetProducts($input: ListInput) {\n    products(input: $input) {\n      count\n      items {\n        ...CommonProduct\n      }\n    }\n  }\n':
    types.GetProductsDocument,
  '\n  query GetAvailableShippingMethods {\n    availableShippingMethods {\n      id\n    }\n  }\n':
    types.GetAvailableShippingMethodsDocument
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CommonOrder on Order {\n    id\n    code\n    subtotal\n    total\n    totalQuantity\n    lines {\n      items {\n        id\n        linePrice\n        quantity\n        unitPrice\n        productVariant {\n          id\n          stock\n          product {\n            name\n            slug\n            assets {\n              items {\n                id\n                source\n              }\n            }\n          }\n        }\n      }\n    }\n    customer {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n      phoneCountryCode\n    }\n    shippingAddress {\n      id\n      streetLine1\n      streetLine2\n      postalCode\n      city\n      province\n      country\n      phoneCountryCode\n      phoneNumber\n      references\n    }\n    shipment {\n      id\n      amount\n      trackingCode\n      method {\n        id\n        name\n      }\n    }\n    payment {\n      id\n      amount\n      transactionId\n      method {\n        id\n        name\n        description\n        enabled\n      }\n    }\n  }\n'
): typeof import('./graphql').CommonOrderFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CommonProduct on Product {\n    id\n    name\n    slug\n    description\n    onlineOnly\n    variants(input: { take: 1 }) {\n      items {\n        id\n        stock\n        price\n      }\n    }\n    assets {\n      items {\n        id\n        name\n        source\n      }\n    }\n  }\n'
): typeof import('./graphql').CommonProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateOrderMutation($input: CreateOrderInput) {\n    createOrder(input: $input) {\n      ...CommonOrder\n    }\n  }\n'
): typeof import('./graphql').CreateOrderMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddLineToOrderMutation($orderId: ID!, $input: CreateOrderLineInput!) {\n    addLineToOrder(orderId: $orderId, input: $input) {\n      ...CommonOrder\n    }\n  }\n'
): typeof import('./graphql').AddLineToOrderMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateOrderLineMutation($lineId: ID!, $input: UpdateOrderLineInput!) {\n    updateOrderLine(lineId: $lineId, input: $input) {\n      ...CommonOrder\n    }\n  }\n'
): typeof import('./graphql').UpdateOrderLineMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RemoveOrderLineMutation($lineId: ID!) {\n    removeOrderLine(lineId: $lineId) {\n      ...CommonOrder\n    }\n  }\n'
): typeof import('./graphql').RemoveOrderLineMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddCustomerToOrder($orderId: ID!, $input: CreateCustomerInput!) {\n    addCustomerToOrder(orderId: $orderId, input: $input) {\n      ...CommonOrder\n    }\n  }\n'
): typeof import('./graphql').AddCustomerToOrderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation addShippingAddressToOrder($orderId: ID!, $input: CreateAddressInput!) {\n    addShippingAddressToOrder(orderId: $orderId, input: $input) {\n      ...CommonOrder\n    }\n  }\n'
): typeof import('./graphql').AddShippingAddressToOrderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddShipmentToOrderMutation($orderId: ID!, $input: AddShipmentToOrderInput!) {\n    addShipmentToOrder(orderId: $orderId, input: $input) {\n      ...CommonOrder\n    }\n  }\n'
): typeof import('./graphql').AddShipmentToOrderMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddPaymentToOrderMutation($orderId: ID!, $input: AddPaymentToOrderInput!) {\n    addPaymentToOrder(orderId: $orderId, input: $input) {\n      ...CommonOrder\n    }\n  }\n'
): typeof import('./graphql').AddPaymentToOrderMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetOrderQuery($orderId: ID, $code: String) {\n    order(id: $orderId, code: $code) {\n      ...CommonOrder\n    }\n  }\n'
): typeof import('./graphql').GetOrderQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetAvailablePaymentMethods {\n    availablePaymentMethods {\n      id\n      name\n      description\n    }\n  }\n'
): typeof import('./graphql').GetAvailablePaymentMethodsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetProducts($input: ListInput) {\n    products(input: $input) {\n      count\n      items {\n        ...CommonProduct\n      }\n    }\n  }\n'
): typeof import('./graphql').GetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetAvailableShippingMethods {\n    availableShippingMethods {\n      id\n    }\n  }\n'
): typeof import('./graphql').GetAvailableShippingMethodsDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
