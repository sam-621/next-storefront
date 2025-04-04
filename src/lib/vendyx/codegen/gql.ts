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
  '\n  mutation CreateCustomerAddress($input: CreateAddressInput!) {\n    createCustomerAddress(input: $input) {\n      id\n    }\n  }\n':
    types.CreateCustomerAddressDocument,
  '\n  mutation UpdateCustomerAddress($id: ID!, $input: UpdateAddressInput!) {\n    updateCustomerAddress(addressId: $id, input: $input) {\n      id\n    }\n  }\n':
    types.UpdateCustomerAddressDocument,
  '\n  mutation RemoveCustomerAddress($id: ID!) {\n    removeCustomerAddress(addressId: $id) {\n      id\n    }\n  }\n':
    types.RemoveCustomerAddressDocument,
  '\n  fragment Cart on Order {\n    id\n    code\n    subtotal\n    total\n    totalQuantity\n    discounts {\n      handle\n      applicationMode\n      discountedAmount\n    }\n    lines {\n      items {\n        id\n        lineTotal\n        quantity\n        unitPrice\n        discounts {\n          handle\n          applicationMode\n          discountedAmount\n        }\n        productVariant {\n          id\n          stock\n          optionValues {\n            id\n            name\n          }\n          asset {\n            id\n            source\n          }\n          product {\n            name\n            slug\n            assets(input: { take: 1 }) {\n              items {\n                id\n                source\n              }\n            }\n          }\n        }\n      }\n    }\n    customer {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n    shippingAddress {\n      fullName\n      phoneNumber\n      streetLine1\n      streetLine2\n      postalCode\n      city\n      province\n      country\n      countryId\n      references\n    }\n    shipment {\n      id\n      amount\n      method\n      discounts {\n        handle\n        applicationMode\n      }\n    }\n    payment {\n      id\n      amount\n      transactionId\n      method\n    }\n  }\n':
    types.CartFragmentDoc,
  '\n  query GetCart($id: ID) {\n    order(id: $id) {\n      ...Cart\n    }\n  }\n':
    types.GetCartDocument,
  '\n  query GetAvailablePaymentMethods {\n    availablePaymentMethods {\n      id\n      name\n    }\n  }\n':
    types.GetAvailablePaymentMethodsDocument,
  '\n  query GetAvailableShippingMethods($cartId: ID!) {\n    availableShippingMethods(orderId: $cartId) {\n      id\n      name\n      pricePreview\n      description\n    }\n  }\n':
    types.GetAvailableShippingMethodsDocument,
  '\n  query GetCountries {\n    countries {\n      id\n      name\n      states {\n        id\n        name\n      }\n    }\n  }\n':
    types.GetCountriesDocument,
  '\n  mutation CreateCart($input: CreateOrderInput!) {\n    createOrder(input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n':
    types.CreateCartDocument,
  '\n  mutation AddToCart($cartId: ID!, $input: CreateOrderLineInput!) {\n    addLineToOrder(orderId: $cartId, input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n':
    types.AddToCartDocument,
  '\n  mutation UpdateCartLine($lineId: ID!, $input: UpdateOrderLineInput!) {\n    updateOrderLine(lineId: $lineId, input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n':
    types.UpdateCartLineDocument,
  '\n  mutation RemoveCartLine($lineId: ID!) {\n    removeOrderLine(lineId: $lineId) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n':
    types.RemoveCartLineDocument,
  '\n  mutation AddCustomerToCart($cartId: ID!, $input: AddCustomerToOrderInput!) {\n    addCustomerToOrder(orderId: $cartId, input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n':
    types.AddCustomerToCartDocument,
  '\n  mutation addShippingAddressToCart($cartId: ID!, $input: CreateOrderAddressInput!) {\n    addShippingAddressToOrder(orderId: $cartId, input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n':
    types.AddShippingAddressToCartDocument,
  '\n  mutation AddShipmentToOrderMutation($cartId: ID!, $input: AddShipmentToOrderInput!) {\n    addShipmentToOrder(orderId: $cartId, input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n':
    types.AddShipmentToOrderMutationDocument,
  '\n  mutation AddPaymentToCartMutation($cartId: ID!, $input: AddPaymentToOrderInput!) {\n    addPaymentToOrder(orderId: $cartId, input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n        code\n      }\n    }\n  }\n':
    types.AddPaymentToCartMutationDocument,
  '\n  fragment CollectionProduct on Product {\n    id\n    name\n    slug\n    variants(input: { take: 1 }) {\n      items {\n        id\n        salePrice\n        stock\n      }\n    }\n    assets(input: { take: 1 }) {\n      items {\n        id\n        source\n        order\n      }\n    }\n  }\n':
    types.CollectionProductFragmentDoc,
  '\n  query GetCollectionsSlug {\n    collections(input: { take: 3 }) {\n      items {\n        id\n        name\n        slug\n      }\n    }\n  }\n':
    types.GetCollectionsSlugDocument,
  '\n  query GetCollectionProducts($slug: String) {\n    collection(slug: $slug) {\n      products {\n        items {\n          ...CollectionProduct\n        }\n      }\n    }\n  }\n':
    types.GetCollectionProductsDocument,
  '\n  query GetCollectionDetails($slug: String) {\n    collection(slug: $slug) {\n      id\n      name\n      slug\n      description\n    }\n  }\n':
    types.GetCollectionDetailsDocument,
  '\n  fragment CustomerDetails on Customer {\n    id\n    email\n    firstName\n    lastName\n    phoneNumber\n    addresses {\n      items {\n        id\n        fullName\n        streetLine1\n        streetLine2\n        postalCode\n        city\n        province\n        country\n        phoneNumber\n        isDefault\n        references\n      }\n    }\n  }\n':
    types.CustomerDetailsFragmentDoc,
  '\n  query Me {\n    me {\n      ...CustomerDetails\n    }\n  }\n': types.MeDocument,
  '\n  mutation CreateCustomerMutation($input: CreateCustomerInput!) {\n    createCustomer(input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      customer {\n        id\n      }\n    }\n  }\n':
    types.CreateCustomerMutationDocument,
  '\n  mutation GenerateAccessToken($email: String!, $password: String!) {\n    generateCustomerAccessToken(email: $email, password: $password) {\n      apiErrors {\n        code\n        message\n      }\n      accessToken\n    }\n  }\n':
    types.GenerateAccessTokenDocument,
  '\n  mutation UpdateCustomer($input: UpdateCustomerInput!) {\n    updateCustomer(input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      customer {\n        id\n      }\n    }\n  }\n':
    types.UpdateCustomerDocument,
  '\n  mutation UpdatePassword($input: UpdateCustomerPasswordInput!) {\n    updateCustomerPassword(input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      customer {\n        id\n      }\n    }\n  }\n':
    types.UpdatePasswordDocument,
  '\n  mutation DisableCustomer {\n    disableCustomer {\n      apiErrors {\n        code\n        message\n      }\n      customer {\n        id\n      }\n    }\n  }\n':
    types.DisableCustomerDocument,
  '\n  fragment Order on Order {\n    id\n    code\n    subtotal\n    total\n    totalQuantity\n    discounts {\n      handle\n      applicationMode\n      discountedAmount\n    }\n    lines {\n      items {\n        id\n        lineTotal\n        quantity\n        unitPrice\n        discounts {\n          handle\n          applicationMode\n          discountedAmount\n        }\n        productVariant {\n          id\n          stock\n          optionValues {\n            id\n            name\n          }\n          product {\n            name\n            slug\n            assets(input: { take: 1 }) {\n              items {\n                id\n                source\n              }\n            }\n          }\n        }\n      }\n    }\n    customer {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n    shippingAddress {\n      streetLine1\n      streetLine2\n      postalCode\n      city\n      province\n      country\n      references\n    }\n    shipment {\n      id\n      amount\n      method\n    }\n    payment {\n      id\n      amount\n      transactionId\n      method\n    }\n  }\n':
    types.OrderFragmentDoc,
  '\n  query GetOrder($code: String!) {\n    order(code: $code) {\n      ...Order\n    }\n  }\n':
    types.GetOrderDocument,
  '\n  fragment ProductDetails on Product {\n    id\n    name\n    slug\n    description\n    assets {\n      items {\n        id\n        name\n        order\n        source\n      }\n    }\n    options {\n      id\n      name\n      values {\n        id\n        name\n      }\n    }\n    variants {\n      items {\n        id\n        salePrice\n        stock\n        optionValues {\n          id\n          name\n        }\n        asset {\n          id\n          source\n        }\n      }\n    }\n  }\n':
    types.ProductDetailsFragmentDoc,
  '\n  query GetProductDetails($slug: String!) {\n    product(slug: $slug) {\n      ...ProductDetails\n    }\n  }\n':
    types.GetProductDetailsDocument
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateCustomerAddress($input: CreateAddressInput!) {\n    createCustomerAddress(input: $input) {\n      id\n    }\n  }\n'
): typeof import('./graphql').CreateCustomerAddressDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateCustomerAddress($id: ID!, $input: UpdateAddressInput!) {\n    updateCustomerAddress(addressId: $id, input: $input) {\n      id\n    }\n  }\n'
): typeof import('./graphql').UpdateCustomerAddressDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RemoveCustomerAddress($id: ID!) {\n    removeCustomerAddress(addressId: $id) {\n      id\n    }\n  }\n'
): typeof import('./graphql').RemoveCustomerAddressDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment Cart on Order {\n    id\n    code\n    subtotal\n    total\n    totalQuantity\n    discounts {\n      handle\n      applicationMode\n      discountedAmount\n    }\n    lines {\n      items {\n        id\n        lineTotal\n        quantity\n        unitPrice\n        discounts {\n          handle\n          applicationMode\n          discountedAmount\n        }\n        productVariant {\n          id\n          stock\n          optionValues {\n            id\n            name\n          }\n          asset {\n            id\n            source\n          }\n          product {\n            name\n            slug\n            assets(input: { take: 1 }) {\n              items {\n                id\n                source\n              }\n            }\n          }\n        }\n      }\n    }\n    customer {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n    shippingAddress {\n      fullName\n      phoneNumber\n      streetLine1\n      streetLine2\n      postalCode\n      city\n      province\n      country\n      countryId\n      references\n    }\n    shipment {\n      id\n      amount\n      method\n      discounts {\n        handle\n        applicationMode\n      }\n    }\n    payment {\n      id\n      amount\n      transactionId\n      method\n    }\n  }\n'
): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCart($id: ID) {\n    order(id: $id) {\n      ...Cart\n    }\n  }\n'
): typeof import('./graphql').GetCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetAvailablePaymentMethods {\n    availablePaymentMethods {\n      id\n      name\n    }\n  }\n'
): typeof import('./graphql').GetAvailablePaymentMethodsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetAvailableShippingMethods($cartId: ID!) {\n    availableShippingMethods(orderId: $cartId) {\n      id\n      name\n      pricePreview\n      description\n    }\n  }\n'
): typeof import('./graphql').GetAvailableShippingMethodsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCountries {\n    countries {\n      id\n      name\n      states {\n        id\n        name\n      }\n    }\n  }\n'
): typeof import('./graphql').GetCountriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateCart($input: CreateOrderInput!) {\n    createOrder(input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n'
): typeof import('./graphql').CreateCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddToCart($cartId: ID!, $input: CreateOrderLineInput!) {\n    addLineToOrder(orderId: $cartId, input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n'
): typeof import('./graphql').AddToCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateCartLine($lineId: ID!, $input: UpdateOrderLineInput!) {\n    updateOrderLine(lineId: $lineId, input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n'
): typeof import('./graphql').UpdateCartLineDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RemoveCartLine($lineId: ID!) {\n    removeOrderLine(lineId: $lineId) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n'
): typeof import('./graphql').RemoveCartLineDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddCustomerToCart($cartId: ID!, $input: AddCustomerToOrderInput!) {\n    addCustomerToOrder(orderId: $cartId, input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n'
): typeof import('./graphql').AddCustomerToCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation addShippingAddressToCart($cartId: ID!, $input: CreateOrderAddressInput!) {\n    addShippingAddressToOrder(orderId: $cartId, input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n'
): typeof import('./graphql').AddShippingAddressToCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddShipmentToOrderMutation($cartId: ID!, $input: AddShipmentToOrderInput!) {\n    addShipmentToOrder(orderId: $cartId, input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n      }\n    }\n  }\n'
): typeof import('./graphql').AddShipmentToOrderMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddPaymentToCartMutation($cartId: ID!, $input: AddPaymentToOrderInput!) {\n    addPaymentToOrder(orderId: $cartId, input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      order {\n        id\n        code\n      }\n    }\n  }\n'
): typeof import('./graphql').AddPaymentToCartMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CollectionProduct on Product {\n    id\n    name\n    slug\n    variants(input: { take: 1 }) {\n      items {\n        id\n        salePrice\n        stock\n      }\n    }\n    assets(input: { take: 1 }) {\n      items {\n        id\n        source\n        order\n      }\n    }\n  }\n'
): typeof import('./graphql').CollectionProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCollectionsSlug {\n    collections(input: { take: 3 }) {\n      items {\n        id\n        name\n        slug\n      }\n    }\n  }\n'
): typeof import('./graphql').GetCollectionsSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCollectionProducts($slug: String) {\n    collection(slug: $slug) {\n      products {\n        items {\n          ...CollectionProduct\n        }\n      }\n    }\n  }\n'
): typeof import('./graphql').GetCollectionProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCollectionDetails($slug: String) {\n    collection(slug: $slug) {\n      id\n      name\n      slug\n      description\n    }\n  }\n'
): typeof import('./graphql').GetCollectionDetailsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CustomerDetails on Customer {\n    id\n    email\n    firstName\n    lastName\n    phoneNumber\n    addresses {\n      items {\n        id\n        fullName\n        streetLine1\n        streetLine2\n        postalCode\n        city\n        province\n        country\n        phoneNumber\n        isDefault\n        references\n      }\n    }\n  }\n'
): typeof import('./graphql').CustomerDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Me {\n    me {\n      ...CustomerDetails\n    }\n  }\n'
): typeof import('./graphql').MeDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateCustomerMutation($input: CreateCustomerInput!) {\n    createCustomer(input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      customer {\n        id\n      }\n    }\n  }\n'
): typeof import('./graphql').CreateCustomerMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation GenerateAccessToken($email: String!, $password: String!) {\n    generateCustomerAccessToken(email: $email, password: $password) {\n      apiErrors {\n        code\n        message\n      }\n      accessToken\n    }\n  }\n'
): typeof import('./graphql').GenerateAccessTokenDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateCustomer($input: UpdateCustomerInput!) {\n    updateCustomer(input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      customer {\n        id\n      }\n    }\n  }\n'
): typeof import('./graphql').UpdateCustomerDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdatePassword($input: UpdateCustomerPasswordInput!) {\n    updateCustomerPassword(input: $input) {\n      apiErrors {\n        code\n        message\n      }\n      customer {\n        id\n      }\n    }\n  }\n'
): typeof import('./graphql').UpdatePasswordDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DisableCustomer {\n    disableCustomer {\n      apiErrors {\n        code\n        message\n      }\n      customer {\n        id\n      }\n    }\n  }\n'
): typeof import('./graphql').DisableCustomerDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment Order on Order {\n    id\n    code\n    subtotal\n    total\n    totalQuantity\n    discounts {\n      handle\n      applicationMode\n      discountedAmount\n    }\n    lines {\n      items {\n        id\n        lineTotal\n        quantity\n        unitPrice\n        discounts {\n          handle\n          applicationMode\n          discountedAmount\n        }\n        productVariant {\n          id\n          stock\n          optionValues {\n            id\n            name\n          }\n          product {\n            name\n            slug\n            assets(input: { take: 1 }) {\n              items {\n                id\n                source\n              }\n            }\n          }\n        }\n      }\n    }\n    customer {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n    shippingAddress {\n      streetLine1\n      streetLine2\n      postalCode\n      city\n      province\n      country\n      references\n    }\n    shipment {\n      id\n      amount\n      method\n    }\n    payment {\n      id\n      amount\n      transactionId\n      method\n    }\n  }\n'
): typeof import('./graphql').OrderFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetOrder($code: String!) {\n    order(code: $code) {\n      ...Order\n    }\n  }\n'
): typeof import('./graphql').GetOrderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProductDetails on Product {\n    id\n    name\n    slug\n    description\n    assets {\n      items {\n        id\n        name\n        order\n        source\n      }\n    }\n    options {\n      id\n      name\n      values {\n        id\n        name\n      }\n    }\n    variants {\n      items {\n        id\n        salePrice\n        stock\n        optionValues {\n          id\n          name\n        }\n        asset {\n          id\n          source\n        }\n      }\n    }\n  }\n'
): typeof import('./graphql').ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetProductDetails($slug: String!) {\n    product(slug: $slug) {\n      ...ProductDetails\n    }\n  }\n'
): typeof import('./graphql').GetProductDetailsDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
