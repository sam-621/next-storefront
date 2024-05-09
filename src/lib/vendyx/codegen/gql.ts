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
  '\n  fragment CommonOrder on Order {\n    id\n    code\n    subtotal\n    total\n    totalQuantity\n    lines {\n      items {\n        id\n        linePrice\n        quantity\n        unitPrice\n        productVariant {\n          id\n          product {\n            name\n            slug\n            assets {\n              items {\n                id\n                source\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n':
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
  '\n  query GetOrderQuery($orderId: ID) {\n    order(id: $orderId) {\n      ...CommonOrder\n    }\n  }\n':
    types.GetOrderQueryDocument,
  '\n  query GetProducts($input: ListInput) {\n    products(input: $input) {\n      count\n      items {\n        ...CommonProduct\n      }\n    }\n  }\n':
    types.GetProductsDocument
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CommonOrder on Order {\n    id\n    code\n    subtotal\n    total\n    totalQuantity\n    lines {\n      items {\n        id\n        linePrice\n        quantity\n        unitPrice\n        productVariant {\n          id\n          product {\n            name\n            slug\n            assets {\n              items {\n                id\n                source\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'
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
  source: '\n  query GetOrderQuery($orderId: ID) {\n    order(id: $orderId) {\n      ...CommonOrder\n    }\n  }\n'
): typeof import('./graphql').GetOrderQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetProducts($input: ListInput) {\n    products(input: $input) {\n      count\n      items {\n        ...CommonProduct\n      }\n    }\n  }\n'
): typeof import('./graphql').GetProductsDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
