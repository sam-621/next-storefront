/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
};

export type AddPaymentToOrderInput = {
  methodId: Scalars['ID']['input'];
};

export type AddShipmentToOrderInput = {
  shippingMethodId: Scalars['ID']['input'];
};

export type Address = Node & {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  phoneCountryCode?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  /** State or region */
  province: Scalars['String']['output'];
  references?: Maybe<Scalars['String']['output']>;
  streetLine1: Scalars['String']['output'];
  streetLine2?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type AddressList = List & {
  __typename?: 'AddressList';
  count: Scalars['Int']['output'];
  items: Array<Address>;
};

export type Asset = Node & {
  __typename?: 'Asset';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  source: Scalars['String']['output'];
  type: AssetType;
  updatedAt: Scalars['Date']['output'];
};

export type AssetList = List & {
  __typename?: 'AssetList';
  count: Scalars['Int']['output'];
  items: Array<Asset>;
};

export enum AssetType {
  Image = 'IMAGE'
}

export type CreateAddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  phoneCountryCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode: Scalars['String']['input'];
  province: Scalars['String']['input'];
  references?: InputMaybe<Scalars['String']['input']>;
  streetLine1: Scalars['String']['input'];
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerInput = {
  email: Scalars['String']['input'];
  enable: Scalars['Boolean']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  phoneCountryCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderInput = {
  line?: InputMaybe<CreateOrderLineInput>;
};

export type CreateOrderLineInput = {
  productVariantId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type Customer = Node & {
  __typename?: 'Customer';
  addresses?: Maybe<Array<AddressList>>;
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  enable: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  orders?: Maybe<Array<OrderList>>;
  phoneCountryCode?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type CustomerList = List & {
  __typename?: 'CustomerList';
  count: Scalars['Int']['output'];
  items: Array<Customer>;
};

/** A list of items with count, each result that expose a array of items should implement this interface */
export type List = {
  count: Scalars['Int']['output'];
  items: Array<Node>;
};

export type ListInput = {
  /** Skip the first n results */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** takes n result from where the cursor is (skip position) */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCustomerToOrder: OrderResult;
  addLineToOrder: OrderResult;
  addPaymentToOrder: OrderResult;
  addShipmentToOrder: OrderResult;
  addShippingAddressToOrder: OrderResult;
  createOrder: OrderResult;
  removeOrderLine: OrderResult;
  updateOrderLine: OrderResult;
};

export type MutationAddCustomerToOrderArgs = {
  input: CreateCustomerInput;
  orderId: Scalars['ID']['input'];
};

export type MutationAddLineToOrderArgs = {
  input: CreateOrderLineInput;
  orderId: Scalars['ID']['input'];
};

export type MutationAddPaymentToOrderArgs = {
  input: AddPaymentToOrderInput;
  orderId: Scalars['ID']['input'];
};

export type MutationAddShipmentToOrderArgs = {
  input: AddShipmentToOrderInput;
  orderId: Scalars['ID']['input'];
};

export type MutationAddShippingAddressToOrderArgs = {
  input: CreateAddressInput;
  orderId: Scalars['ID']['input'];
};

export type MutationCreateOrderArgs = {
  input?: InputMaybe<CreateOrderInput>;
};

export type MutationRemoveOrderLineArgs = {
  lineId: Scalars['ID']['input'];
};

export type MutationUpdateOrderLineArgs = {
  input: UpdateOrderLineInput;
  lineId: Scalars['ID']['input'];
};

/** A node, each type that represents a entity should implement this interface */
export type Node = {
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Option = Node & {
  __typename?: 'Option';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  values?: Maybe<Array<OptionValue>>;
};

export type OptionList = List & {
  __typename?: 'OptionList';
  count: Scalars['Int']['output'];
  items: Array<Option>;
};

export type OptionValue = Node & {
  __typename?: 'OptionValue';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['Date']['output'];
  value: Scalars['String']['output'];
};

export type Order = Node & {
  __typename?: 'Order';
  code: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  customer?: Maybe<Customer>;
  id: Scalars['ID']['output'];
  lines: OrderLineList;
  payment?: Maybe<Payment>;
  /** The date and time when a payment has been added to the order */
  placedAt?: Maybe<Scalars['Date']['output']>;
  shipment?: Maybe<Shipment>;
  shippingAddress?: Maybe<Address>;
  state: OrderState;
  /** Order lines total less discounts */
  subtotal: Scalars['Int']['output'];
  /** The price that will be sent to the payment provider. subtotal plus shipping price */
  total: Scalars['Int']['output'];
  totalQuantity: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

/**  Utils  */
export enum OrderErrorCode {
  CustomerInvalidEmail = 'CUSTOMER_INVALID_EMAIL',
  LineNotFound = 'LINE_NOT_FOUND',
  NotEnoughStock = 'NOT_ENOUGH_STOCK',
  OrderNotFound = 'ORDER_NOT_FOUND',
  OrderTransitionError = 'ORDER_TRANSITION_ERROR',
  PaymentDeclined = 'PAYMENT_DECLINED',
  PaymentMethodNotFound = 'PAYMENT_METHOD_NOT_FOUND',
  ShippingMethodNotFound = 'SHIPPING_METHOD_NOT_FOUND'
}

export type OrderErrorResult = {
  __typename?: 'OrderErrorResult';
  code: OrderErrorCode;
  message: Scalars['String']['output'];
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  linePrice: Scalars['Int']['output'];
  productVariant: Variant;
  quantity: Scalars['Int']['output'];
  unitPrice: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type OrderLineList = List & {
  __typename?: 'OrderLineList';
  count: Scalars['Int']['output'];
  items: Array<OrderLine>;
};

export type OrderList = List & {
  __typename?: 'OrderList';
  count: Scalars['Int']['output'];
  items: Array<Order>;
};

/**  Results  */
export type OrderResult = {
  __typename?: 'OrderResult';
  apiErrors: Array<OrderErrorResult>;
  order?: Maybe<Order>;
};

export enum OrderState {
  Delivered = 'DELIVERED',
  Modifying = 'MODIFYING',
  PaymentAdded = 'PAYMENT_ADDED',
  PaymentAuthorized = 'PAYMENT_AUTHORIZED',
  Shipped = 'SHIPPED'
}

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  method: PaymentMethod;
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type PaymentList = List & {
  __typename?: 'PaymentList';
  count: Scalars['Int']['output'];
  items: Array<Payment>;
};

export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Product = Node & {
  __typename?: 'Product';
  assets: AssetList;
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  onlineOnly: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  variants: VariantList;
};

export type ProductAssetsArgs = {
  input?: InputMaybe<ListInput>;
};

export type ProductVariantsArgs = {
  input?: InputMaybe<ListInput>;
};

export type ProductList = List & {
  __typename?: 'ProductList';
  count: Scalars['Int']['output'];
  items: Array<Product>;
};

export type Query = {
  __typename?: 'Query';
  availablePaymentMethods: Array<PaymentMethod>;
  availableShippingMethods: Array<ShippingMethod>;
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  products: ProductList;
  variant?: Maybe<Variant>;
  variants: VariantList;
};

export type QueryOrderArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryProductsArgs = {
  input?: InputMaybe<ListInput>;
};

export type QueryVariantArgs = {
  id: Scalars['ID']['input'];
};

export type QueryVariantsArgs = {
  input?: InputMaybe<ListInput>;
};

export type Shipment = Node & {
  __typename?: 'Shipment';
  amount: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  method: ShippingMethod;
  order: Order;
  trackingCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type ShipmentList = List & {
  __typename?: 'ShipmentList';
  count: Scalars['Int']['output'];
  items: Array<Shipment>;
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type UpdateOrderLineInput = {
  quantity: Scalars['Int']['input'];
};

export type Variant = Node & {
  __typename?: 'Variant';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  optionValues?: Maybe<Array<OptionValue>>;
  price: Scalars['Float']['output'];
  product: Product;
  published: Scalars['Boolean']['output'];
  sku: Scalars['String']['output'];
  stock: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type VariantList = List & {
  __typename?: 'VariantList';
  count: Scalars['Int']['output'];
  items: Array<Variant>;
};

export type CommonOrderFragment = {
  __typename?: 'Order';
  id: string;
  code: string;
  subtotal: number;
  total: number;
  totalQuantity: number;
  lines: {
    __typename?: 'OrderLineList';
    items: Array<{
      __typename?: 'OrderLine';
      id: string;
      linePrice: number;
      quantity: number;
      unitPrice: number;
      productVariant: {
        __typename?: 'Variant';
        id: string;
        stock: number;
        product: {
          __typename?: 'Product';
          name: string;
          slug: string;
          assets: {
            __typename?: 'AssetList';
            items: Array<{ __typename?: 'Asset'; id: string; source: string }>;
          };
        };
      };
    }>;
  };
  customer?: {
    __typename?: 'Customer';
    id: string;
    firstName?: string | null;
    lastName: string;
    email: string;
    phoneNumber?: string | null;
    phoneCountryCode?: string | null;
  } | null;
  shippingAddress?: {
    __typename?: 'Address';
    id: string;
    streetLine1: string;
    streetLine2?: string | null;
    postalCode: string;
    city: string;
    province: string;
    country: string;
    phoneCountryCode?: string | null;
    phoneNumber?: string | null;
    references?: string | null;
  } | null;
  shipment?: {
    __typename?: 'Shipment';
    id: string;
    amount: number;
    trackingCode?: string | null;
    method: { __typename?: 'ShippingMethod'; id: string; name: string };
  } | null;
  payment?: {
    __typename?: 'Payment';
    id: string;
    amount: number;
    transactionId?: string | null;
    method: {
      __typename?: 'PaymentMethod';
      id: string;
      name: string;
      description?: string | null;
      enabled: boolean;
    };
  } | null;
} & { ' $fragmentName'?: 'CommonOrderFragment' };

export type CommonProductFragment = {
  __typename?: 'Product';
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  onlineOnly: boolean;
  variants: {
    __typename?: 'VariantList';
    items: Array<{ __typename?: 'Variant'; id: string; stock: number; price: number }>;
  };
  assets: {
    __typename?: 'AssetList';
    items: Array<{ __typename?: 'Asset'; id: string; name: string; source: string }>;
  };
} & { ' $fragmentName'?: 'CommonProductFragment' };

export type CreateOrderMutationMutationVariables = Exact<{
  input?: InputMaybe<CreateOrderInput>;
}>;

export type CreateOrderMutationMutation = {
  __typename?: 'Mutation';
  createOrder: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?:
      | ({ __typename?: 'Order' } & {
          ' $fragmentRefs'?: { CommonOrderFragment: CommonOrderFragment };
        })
      | null;
  };
};

export type AddLineToOrderMutationMutationVariables = Exact<{
  orderId: Scalars['ID']['input'];
  input: CreateOrderLineInput;
}>;

export type AddLineToOrderMutationMutation = {
  __typename?: 'Mutation';
  addLineToOrder: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?:
      | ({ __typename?: 'Order' } & {
          ' $fragmentRefs'?: { CommonOrderFragment: CommonOrderFragment };
        })
      | null;
  };
};

export type UpdateOrderLineMutationMutationVariables = Exact<{
  lineId: Scalars['ID']['input'];
  input: UpdateOrderLineInput;
}>;

export type UpdateOrderLineMutationMutation = {
  __typename?: 'Mutation';
  updateOrderLine: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?:
      | ({ __typename?: 'Order' } & {
          ' $fragmentRefs'?: { CommonOrderFragment: CommonOrderFragment };
        })
      | null;
  };
};

export type RemoveOrderLineMutationMutationVariables = Exact<{
  lineId: Scalars['ID']['input'];
}>;

export type RemoveOrderLineMutationMutation = {
  __typename?: 'Mutation';
  removeOrderLine: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?:
      | ({ __typename?: 'Order' } & {
          ' $fragmentRefs'?: { CommonOrderFragment: CommonOrderFragment };
        })
      | null;
  };
};

export type AddCustomerToOrderMutationVariables = Exact<{
  orderId: Scalars['ID']['input'];
  input: CreateCustomerInput;
}>;

export type AddCustomerToOrderMutation = {
  __typename?: 'Mutation';
  addCustomerToOrder: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?:
      | ({ __typename?: 'Order' } & {
          ' $fragmentRefs'?: { CommonOrderFragment: CommonOrderFragment };
        })
      | null;
  };
};

export type AddShippingAddressToOrderMutationVariables = Exact<{
  orderId: Scalars['ID']['input'];
  input: CreateAddressInput;
}>;

export type AddShippingAddressToOrderMutation = {
  __typename?: 'Mutation';
  addShippingAddressToOrder: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?:
      | ({ __typename?: 'Order' } & {
          ' $fragmentRefs'?: { CommonOrderFragment: CommonOrderFragment };
        })
      | null;
  };
};

export type AddShipmentToOrderMutationMutationVariables = Exact<{
  orderId: Scalars['ID']['input'];
  input: AddShipmentToOrderInput;
}>;

export type AddShipmentToOrderMutationMutation = {
  __typename?: 'Mutation';
  addShipmentToOrder: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?:
      | ({ __typename?: 'Order' } & {
          ' $fragmentRefs'?: { CommonOrderFragment: CommonOrderFragment };
        })
      | null;
  };
};

export type AddPaymentToOrderMutationMutationVariables = Exact<{
  orderId: Scalars['ID']['input'];
  input: AddPaymentToOrderInput;
}>;

export type AddPaymentToOrderMutationMutation = {
  __typename?: 'Mutation';
  addPaymentToOrder: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?:
      | ({ __typename?: 'Order' } & {
          ' $fragmentRefs'?: { CommonOrderFragment: CommonOrderFragment };
        })
      | null;
  };
};

export type GetOrderQueryQueryVariables = Exact<{
  orderId?: InputMaybe<Scalars['ID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetOrderQueryQuery = {
  __typename?: 'Query';
  order?:
    | ({ __typename?: 'Order' } & {
        ' $fragmentRefs'?: { CommonOrderFragment: CommonOrderFragment };
      })
    | null;
};

export type GetAvailablePaymentMethodsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAvailablePaymentMethodsQuery = {
  __typename?: 'Query';
  availablePaymentMethods: Array<{
    __typename?: 'PaymentMethod';
    id: string;
    name: string;
    description?: string | null;
  }>;
};

export type GetProductsQueryVariables = Exact<{
  input?: InputMaybe<ListInput>;
}>;

export type GetProductsQuery = {
  __typename?: 'Query';
  products: {
    __typename?: 'ProductList';
    count: number;
    items: Array<
      { __typename?: 'Product' } & {
        ' $fragmentRefs'?: { CommonProductFragment: CommonProductFragment };
      }
    >;
  };
};

export type GetAvailableShippingMethodsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAvailableShippingMethodsQuery = {
  __typename?: 'Query';
  availableShippingMethods: Array<{ __typename?: 'ShippingMethod'; id: string }>;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(
    private value: string,
    public __meta__?: Record<string, any>
  ) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CommonOrderFragmentDoc = new TypedDocumentString(
  `
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
        stock
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
  shipment {
    id
    amount
    trackingCode
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
      description
      enabled
    }
  }
}
    `,
  { fragmentName: 'CommonOrder' }
) as unknown as TypedDocumentString<CommonOrderFragment, unknown>;
export const CommonProductFragmentDoc = new TypedDocumentString(
  `
    fragment CommonProduct on Product {
  id
  name
  slug
  description
  onlineOnly
  variants(input: {take: 1}) {
    items {
      id
      stock
      price
    }
  }
  assets {
    items {
      id
      name
      source
    }
  }
}
    `,
  { fragmentName: 'CommonProduct' }
) as unknown as TypedDocumentString<CommonProductFragment, unknown>;
export const CreateOrderMutationDocument = new TypedDocumentString(`
    mutation CreateOrderMutation($input: CreateOrderInput) {
  createOrder(input: $input) {
    apiErrors {
      code
      message
    }
    order {
      ...CommonOrder
    }
  }
}
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
        stock
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
  shipment {
    id
    amount
    trackingCode
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
      description
      enabled
    }
  }
}`) as unknown as TypedDocumentString<
  CreateOrderMutationMutation,
  CreateOrderMutationMutationVariables
>;
export const AddLineToOrderMutationDocument = new TypedDocumentString(`
    mutation AddLineToOrderMutation($orderId: ID!, $input: CreateOrderLineInput!) {
  addLineToOrder(orderId: $orderId, input: $input) {
    apiErrors {
      code
      message
    }
    order {
      ...CommonOrder
    }
  }
}
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
        stock
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
  shipment {
    id
    amount
    trackingCode
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
      description
      enabled
    }
  }
}`) as unknown as TypedDocumentString<
  AddLineToOrderMutationMutation,
  AddLineToOrderMutationMutationVariables
>;
export const UpdateOrderLineMutationDocument = new TypedDocumentString(`
    mutation UpdateOrderLineMutation($lineId: ID!, $input: UpdateOrderLineInput!) {
  updateOrderLine(lineId: $lineId, input: $input) {
    apiErrors {
      code
      message
    }
    order {
      ...CommonOrder
    }
  }
}
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
        stock
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
  shipment {
    id
    amount
    trackingCode
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
      description
      enabled
    }
  }
}`) as unknown as TypedDocumentString<
  UpdateOrderLineMutationMutation,
  UpdateOrderLineMutationMutationVariables
>;
export const RemoveOrderLineMutationDocument = new TypedDocumentString(`
    mutation RemoveOrderLineMutation($lineId: ID!) {
  removeOrderLine(lineId: $lineId) {
    apiErrors {
      code
      message
    }
    order {
      ...CommonOrder
    }
  }
}
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
        stock
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
  shipment {
    id
    amount
    trackingCode
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
      description
      enabled
    }
  }
}`) as unknown as TypedDocumentString<
  RemoveOrderLineMutationMutation,
  RemoveOrderLineMutationMutationVariables
>;
export const AddCustomerToOrderDocument = new TypedDocumentString(`
    mutation AddCustomerToOrder($orderId: ID!, $input: CreateCustomerInput!) {
  addCustomerToOrder(orderId: $orderId, input: $input) {
    apiErrors {
      code
      message
    }
    order {
      ...CommonOrder
    }
  }
}
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
        stock
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
  shipment {
    id
    amount
    trackingCode
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
      description
      enabled
    }
  }
}`) as unknown as TypedDocumentString<
  AddCustomerToOrderMutation,
  AddCustomerToOrderMutationVariables
>;
export const AddShippingAddressToOrderDocument = new TypedDocumentString(`
    mutation addShippingAddressToOrder($orderId: ID!, $input: CreateAddressInput!) {
  addShippingAddressToOrder(orderId: $orderId, input: $input) {
    apiErrors {
      code
      message
    }
    order {
      ...CommonOrder
    }
  }
}
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
        stock
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
  shipment {
    id
    amount
    trackingCode
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
      description
      enabled
    }
  }
}`) as unknown as TypedDocumentString<
  AddShippingAddressToOrderMutation,
  AddShippingAddressToOrderMutationVariables
>;
export const AddShipmentToOrderMutationDocument = new TypedDocumentString(`
    mutation AddShipmentToOrderMutation($orderId: ID!, $input: AddShipmentToOrderInput!) {
  addShipmentToOrder(orderId: $orderId, input: $input) {
    apiErrors {
      code
      message
    }
    order {
      ...CommonOrder
    }
  }
}
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
        stock
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
  shipment {
    id
    amount
    trackingCode
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
      description
      enabled
    }
  }
}`) as unknown as TypedDocumentString<
  AddShipmentToOrderMutationMutation,
  AddShipmentToOrderMutationMutationVariables
>;
export const AddPaymentToOrderMutationDocument = new TypedDocumentString(`
    mutation AddPaymentToOrderMutation($orderId: ID!, $input: AddPaymentToOrderInput!) {
  addPaymentToOrder(orderId: $orderId, input: $input) {
    apiErrors {
      code
      message
    }
    order {
      ...CommonOrder
    }
  }
}
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
        stock
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
  shipment {
    id
    amount
    trackingCode
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
      description
      enabled
    }
  }
}`) as unknown as TypedDocumentString<
  AddPaymentToOrderMutationMutation,
  AddPaymentToOrderMutationMutationVariables
>;
export const GetOrderQueryDocument = new TypedDocumentString(`
    query GetOrderQuery($orderId: ID, $code: String) {
  order(id: $orderId, code: $code) {
    ...CommonOrder
  }
}
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
        stock
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
  shipment {
    id
    amount
    trackingCode
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
      description
      enabled
    }
  }
}`) as unknown as TypedDocumentString<GetOrderQueryQuery, GetOrderQueryQueryVariables>;
export const GetAvailablePaymentMethodsDocument = new TypedDocumentString(`
    query GetAvailablePaymentMethods {
  availablePaymentMethods {
    id
    name
    description
  }
}
    `) as unknown as TypedDocumentString<
  GetAvailablePaymentMethodsQuery,
  GetAvailablePaymentMethodsQueryVariables
>;
export const GetProductsDocument = new TypedDocumentString(`
    query GetProducts($input: ListInput) {
  products(input: $input) {
    count
    items {
      ...CommonProduct
    }
  }
}
    fragment CommonProduct on Product {
  id
  name
  slug
  description
  onlineOnly
  variants(input: {take: 1}) {
    items {
      id
      stock
      price
    }
  }
  assets {
    items {
      id
      name
      source
    }
  }
}`) as unknown as TypedDocumentString<GetProductsQuery, GetProductsQueryVariables>;
export const GetAvailableShippingMethodsDocument = new TypedDocumentString(`
    query GetAvailableShippingMethods {
  availableShippingMethods {
    id
  }
}
    `) as unknown as TypedDocumentString<
  GetAvailableShippingMethodsQuery,
  GetAvailableShippingMethodsQueryVariables
>;
