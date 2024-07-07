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

export type AddCustomerToOrderInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  phoneCountryCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
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
  order: Scalars['Int']['output'];
  source: Scalars['String']['output'];
  type: AssetType;
  updatedAt: Scalars['Date']['output'];
};

export type AssetInEntityInput = {
  id: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
};

export type AssetList = List & {
  __typename?: 'AssetList';
  count: Scalars['Int']['output'];
  items: Array<Asset>;
};

export enum AssetType {
  Image = 'IMAGE'
}

export type Collection = Node & {
  __typename?: 'Collection';
  assets: AssetList;
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: ProductList;
  published: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type CollectionAssetsArgs = {
  input?: InputMaybe<ListInput>;
};

export type CollectionProductsArgs = {
  input?: InputMaybe<ListInput>;
};

export type CollectionList = List & {
  __typename?: 'CollectionList';
  count: Scalars['Int']['output'];
  items: Array<Collection>;
};

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
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
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
  addresses: AddressList;
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  /** to customer be able to login, place orders, etc. the customer must be enabled */
  enabled: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  orders: OrderList;
  phoneCountryCode?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

/**  Utils  */
export enum CustomerErrorCode {
  CustomerNotFound = 'CUSTOMER_NOT_FOUND',
  EmailAlreadyExists = 'EMAIL_ALREADY_EXISTS',
  InvalidAccessToken = 'INVALID_ACCESS_TOKEN',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidEmail = 'INVALID_EMAIL',
  PasswordsDoNotMatch = 'PASSWORDS_DO_NOT_MATCH'
}

export type CustomerErrorResult = {
  __typename?: 'CustomerErrorResult';
  code: CustomerErrorCode;
  message: Scalars['String']['output'];
};

export type CustomerList = List & {
  __typename?: 'CustomerList';
  count: Scalars['Int']['output'];
  items: Array<Customer>;
};

/**  Results  */
export type CustomerResult = {
  __typename?: 'CustomerResult';
  apiErrors: Array<CustomerErrorResult>;
  customer?: Maybe<Customer>;
};

export type GenerateCustomerAccessTokenResult = {
  __typename?: 'GenerateCustomerAccessTokenResult';
  accessToken?: Maybe<Scalars['String']['output']>;
  apiErrors: Array<CustomerErrorResult>;
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
  /** Add a new address to the customer. */
  addAddressToCustomer: CustomerResult;
  addCustomerToOrder: OrderResult;
  addLineToOrder: OrderResult;
  addPaymentToOrder: OrderResult;
  addShipmentToOrder: OrderResult;
  addShippingAddressToOrder: OrderResult;
  /** Create a new customer.  */
  createCustomer: CustomerResult;
  createOrder: OrderResult;
  /** Generate a token for the customer. This token is used to modify the customer's data. */
  generateCustomerAccessToken: GenerateCustomerAccessTokenResult;
  /** Change the customer's password with the token received from the request recovery password email */
  recoverCustomerPassword: CustomerResult;
  removeOrderLine: OrderResult;
  /** Send an email to the customer with a link to reset the password. The link contains a token that is used to execute the recoverCustomerPassword mutation. */
  requestRecoveryCustomerPassword: CustomerResult;
  /** Update the customer's data. */
  updateCustomer: CustomerResult;
  /** Update the customer's password providing the current password and the new password */
  updateCustomerPassword: CustomerResult;
  updateOrderLine: OrderResult;
};

export type MutationAddAddressToCustomerArgs = {
  accessToken: Scalars['String']['input'];
  input: CreateAddressInput;
};

export type MutationAddCustomerToOrderArgs = {
  input: AddCustomerToOrderInput;
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

export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};

export type MutationCreateOrderArgs = {
  input?: InputMaybe<CreateOrderInput>;
};

export type MutationGenerateCustomerAccessTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationRecoverCustomerPasswordArgs = {
  password: Scalars['String']['input'];
  urlToken: Scalars['String']['input'];
};

export type MutationRemoveOrderLineArgs = {
  lineId: Scalars['ID']['input'];
};

export type MutationRequestRecoveryCustomerPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationUpdateCustomerArgs = {
  accessToken: Scalars['String']['input'];
  input: UpdateCustomerInput;
};

export type MutationUpdateCustomerPasswordArgs = {
  accessToken: Scalars['String']['input'];
  input: UpdateCustomerPasswordInput;
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
  option: Option;
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
  shippingAddress?: Maybe<OrderShippingAddressJson>;
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
  CustomerDisabled = 'CUSTOMER_DISABLED',
  CustomerInvalidEmail = 'CUSTOMER_INVALID_EMAIL',
  LineNotFound = 'LINE_NOT_FOUND',
  MissingPaymentIntegration = 'MISSING_PAYMENT_INTEGRATION',
  MissingShippingAddress = 'MISSING_SHIPPING_ADDRESS',
  MissingShippingPriceCalculator = 'MISSING_SHIPPING_PRICE_CALCULATOR',
  NotEnoughStock = 'NOT_ENOUGH_STOCK',
  OrderNotFound = 'ORDER_NOT_FOUND',
  OrderTransitionError = 'ORDER_TRANSITION_ERROR',
  PaymentDeclined = 'PAYMENT_DECLINED',
  PaymentMethodNotFound = 'PAYMENT_METHOD_NOT_FOUND',
  ShippingMethodNotFound = 'SHIPPING_METHOD_NOT_FOUND',
  VariantNotFound = 'VARIANT_NOT_FOUND'
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

export type OrderShippingAddressJson = {
  __typename?: 'OrderShippingAddressJson';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  phoneCountryCode?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  /** State or region */
  province: Scalars['String']['output'];
  references?: Maybe<Scalars['String']['output']>;
  streetLine1: Scalars['String']['output'];
  streetLine2?: Maybe<Scalars['String']['output']>;
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
  options: Array<Option>;
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
  collection?: Maybe<Collection>;
  collections: CollectionList;
  /** Get the customer by the access token. */
  customer?: Maybe<Customer>;
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  products: ProductList;
  variant?: Maybe<Variant>;
  variants: VariantList;
};

export type QueryAvailableShippingMethodsArgs = {
  orderId: Scalars['ID']['input'];
};

export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryCollectionsArgs = {
  input?: InputMaybe<ListInput>;
};

export type QueryCustomerArgs = {
  accessToken: Scalars['String']['input'];
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
  carrier?: Maybe<Scalars['String']['output']>;
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
  price: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type UpdateCustomerInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneCountryCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerPasswordInput = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
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

export type VariantOptionValuesArgs = {
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VariantList = List & {
  __typename?: 'VariantList';
  count: Scalars['Int']['output'];
  items: Array<Variant>;
};

export type CreateCartMutationVariables = Exact<{
  input?: InputMaybe<CreateOrderInput>;
}>;

export type CreateCartMutation = {
  __typename?: 'Mutation';
  createOrder: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?: { __typename?: 'Order'; id: string } | null;
  };
};

export type AddToCartMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  input: CreateOrderLineInput;
}>;

export type AddToCartMutation = {
  __typename?: 'Mutation';
  addLineToOrder: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?: { __typename?: 'Order'; id: string } | null;
  };
};

export type UpdateCartLineMutationVariables = Exact<{
  lineId: Scalars['ID']['input'];
  input: UpdateOrderLineInput;
}>;

export type UpdateCartLineMutation = {
  __typename?: 'Mutation';
  updateOrderLine: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?: { __typename?: 'Order'; id: string } | null;
  };
};

export type RemoveCartLineMutationVariables = Exact<{
  lineId: Scalars['ID']['input'];
}>;

export type RemoveCartLineMutation = {
  __typename?: 'Mutation';
  removeOrderLine: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?: { __typename?: 'Order'; id: string } | null;
  };
};

export type SetCustomerToCartMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  input: AddCustomerToOrderInput;
}>;

export type SetCustomerToCartMutation = {
  __typename?: 'Mutation';
  addCustomerToOrder: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?: { __typename?: 'Order'; id: string } | null;
  };
};

export type AddShippingAddressToCartMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  input: CreateAddressInput;
}>;

export type AddShippingAddressToCartMutation = {
  __typename?: 'Mutation';
  addShippingAddressToOrder: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?: { __typename?: 'Order'; id: string } | null;
  };
};

export type AddShipmentToOrderMutationMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  input: AddShipmentToOrderInput;
}>;

export type AddShipmentToOrderMutationMutation = {
  __typename?: 'Mutation';
  addShipmentToOrder: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?: { __typename?: 'Order'; id: string } | null;
  };
};

export type AddPaymentToCartMutationMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  input: AddPaymentToOrderInput;
}>;

export type AddPaymentToCartMutationMutation = {
  __typename?: 'Mutation';
  addPaymentToOrder: {
    __typename?: 'OrderResult';
    apiErrors: Array<{ __typename?: 'OrderErrorResult'; code: OrderErrorCode; message: string }>;
    order?: { __typename?: 'Order'; id: string } | null;
  };
};

export type CartFragment = {
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
        optionValues?: Array<{ __typename?: 'OptionValue'; id: string; value: string }> | null;
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
    __typename?: 'OrderShippingAddressJson';
    streetLine1: string;
    streetLine2?: string | null;
    postalCode: string;
    city: string;
    province: string;
    country: string;
    phoneCountryCode?: string | null;
    phoneNumber?: string | null;
  } | null;
  shipment?: {
    __typename?: 'Shipment';
    id: string;
    amount: number;
    method: { __typename?: 'ShippingMethod'; id: string; name: string };
  } | null;
  payment?: {
    __typename?: 'Payment';
    id: string;
    amount: number;
    transactionId?: string | null;
    method: { __typename?: 'PaymentMethod'; id: string; name: string };
  } | null;
} & { ' $fragmentName'?: 'CartFragment' };

export type GetCartQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;

export type GetCartQuery = {
  __typename?: 'Query';
  order?: ({ __typename?: 'Order' } & { ' $fragmentRefs'?: { CartFragment: CartFragment } }) | null;
};

export type GetAvailablePaymentMethodsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAvailablePaymentMethodsQuery = {
  __typename?: 'Query';
  availablePaymentMethods: Array<{
    __typename?: 'PaymentMethod';
    id: string;
    name: string;
    enabled: boolean;
    description?: string | null;
  }>;
};

export type GetAvailableShippingMethodsQueryVariables = Exact<{
  cartId: Scalars['ID']['input'];
}>;

export type GetAvailableShippingMethodsQuery = {
  __typename?: 'Query';
  availableShippingMethods: Array<{
    __typename?: 'ShippingMethod';
    id: string;
    name: string;
    price: number;
    description?: string | null;
  }>;
};

export type CollectionProductFragment = {
  __typename?: 'Product';
  id: string;
  name: string;
  slug: string;
  variants: {
    __typename?: 'VariantList';
    items: Array<{ __typename?: 'Variant'; id: string; price: number; stock: number }>;
  };
  assets: {
    __typename?: 'AssetList';
    items: Array<{ __typename?: 'Asset'; id: string; source: string; order: number }>;
  };
} & { ' $fragmentName'?: 'CollectionProductFragment' };

export type GetCollectionsSlugQueryVariables = Exact<{ [key: string]: never }>;

export type GetCollectionsSlugQuery = {
  __typename?: 'Query';
  collections: {
    __typename?: 'CollectionList';
    items: Array<{ __typename?: 'Collection'; id: string; name: string; slug: string }>;
  };
};

export type GetCollectionProductsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetCollectionProductsQuery = {
  __typename?: 'Query';
  collection?: {
    __typename?: 'Collection';
    products: {
      __typename?: 'ProductList';
      items: Array<
        { __typename?: 'Product' } & {
          ' $fragmentRefs'?: { CollectionProductFragment: CollectionProductFragment };
        }
      >;
    };
  } | null;
};

export type GetCollectionDetailsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetCollectionDetailsQuery = {
  __typename?: 'Query';
  collection?: {
    __typename?: 'Collection';
    id: string;
    name: string;
    slug: string;
    description?: string | null;
  } | null;
};

export type ProductDetailsFragment = {
  __typename?: 'Product';
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  assets: {
    __typename?: 'AssetList';
    items: Array<{ __typename?: 'Asset'; id: string; name: string; order: number; source: string }>;
  };
  options: Array<{
    __typename?: 'Option';
    id: string;
    name: string;
    values?: Array<{ __typename?: 'OptionValue'; id: string; value: string }> | null;
  }>;
  variants: {
    __typename?: 'VariantList';
    items: Array<{
      __typename?: 'Variant';
      id: string;
      price: number;
      stock: number;
      optionValues?: Array<{ __typename?: 'OptionValue'; id: string; value: string }> | null;
    }>;
  };
} & { ' $fragmentName'?: 'ProductDetailsFragment' };

export type GetProductDetailsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;

export type GetProductDetailsQuery = {
  __typename?: 'Query';
  product?:
    | ({ __typename?: 'Product' } & {
        ' $fragmentRefs'?: { ProductDetailsFragment: ProductDetailsFragment };
      })
    | null;
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
export const CartFragmentDoc = new TypedDocumentString(
  `
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
          value
        }
        product {
          name
          slug
          assets(input: {take: 1}) {
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
    `,
  { fragmentName: 'Cart' }
) as unknown as TypedDocumentString<CartFragment, unknown>;
export const CollectionProductFragmentDoc = new TypedDocumentString(
  `
    fragment CollectionProduct on Product {
  id
  name
  slug
  variants(input: {take: 1}) {
    items {
      id
      price
      stock
    }
  }
  assets(input: {take: 1}) {
    items {
      id
      source
      order
    }
  }
}
    `,
  { fragmentName: 'CollectionProduct' }
) as unknown as TypedDocumentString<CollectionProductFragment, unknown>;
export const ProductDetailsFragmentDoc = new TypedDocumentString(
  `
    fragment ProductDetails on Product {
  id
  name
  slug
  description
  assets {
    items {
      id
      name
      order
      source
    }
  }
  options {
    id
    name
    values {
      id
      value
    }
  }
  variants {
    items {
      id
      price
      stock
      optionValues {
        id
        value
      }
    }
  }
}
    `,
  { fragmentName: 'ProductDetails' }
) as unknown as TypedDocumentString<ProductDetailsFragment, unknown>;
export const CreateCartDocument = new TypedDocumentString(`
    mutation CreateCart($input: CreateOrderInput) {
  createOrder(input: $input) {
    apiErrors {
      code
      message
    }
    order {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<CreateCartMutation, CreateCartMutationVariables>;
export const AddToCartDocument = new TypedDocumentString(`
    mutation AddToCart($cartId: ID!, $input: CreateOrderLineInput!) {
  addLineToOrder(orderId: $cartId, input: $input) {
    apiErrors {
      code
      message
    }
    order {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<AddToCartMutation, AddToCartMutationVariables>;
export const UpdateCartLineDocument = new TypedDocumentString(`
    mutation UpdateCartLine($lineId: ID!, $input: UpdateOrderLineInput!) {
  updateOrderLine(lineId: $lineId, input: $input) {
    apiErrors {
      code
      message
    }
    order {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<UpdateCartLineMutation, UpdateCartLineMutationVariables>;
export const RemoveCartLineDocument = new TypedDocumentString(`
    mutation RemoveCartLine($lineId: ID!) {
  removeOrderLine(lineId: $lineId) {
    apiErrors {
      code
      message
    }
    order {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<RemoveCartLineMutation, RemoveCartLineMutationVariables>;
export const SetCustomerToCartDocument = new TypedDocumentString(`
    mutation SetCustomerToCart($cartId: ID!, $input: AddCustomerToOrderInput!) {
  addCustomerToOrder(orderId: $cartId, input: $input) {
    apiErrors {
      code
      message
    }
    order {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<
  SetCustomerToCartMutation,
  SetCustomerToCartMutationVariables
>;
export const AddShippingAddressToCartDocument = new TypedDocumentString(`
    mutation addShippingAddressToCart($cartId: ID!, $input: CreateAddressInput!) {
  addShippingAddressToOrder(orderId: $cartId, input: $input) {
    apiErrors {
      code
      message
    }
    order {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<
  AddShippingAddressToCartMutation,
  AddShippingAddressToCartMutationVariables
>;
export const AddShipmentToOrderMutationDocument = new TypedDocumentString(`
    mutation AddShipmentToOrderMutation($cartId: ID!, $input: AddShipmentToOrderInput!) {
  addShipmentToOrder(orderId: $cartId, input: $input) {
    apiErrors {
      code
      message
    }
    order {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<
  AddShipmentToOrderMutationMutation,
  AddShipmentToOrderMutationMutationVariables
>;
export const AddPaymentToCartMutationDocument = new TypedDocumentString(`
    mutation AddPaymentToCartMutation($cartId: ID!, $input: AddPaymentToOrderInput!) {
  addPaymentToOrder(orderId: $cartId, input: $input) {
    apiErrors {
      code
      message
    }
    order {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<
  AddPaymentToCartMutationMutation,
  AddPaymentToCartMutationMutationVariables
>;
export const GetCartDocument = new TypedDocumentString(`
    query GetCart($id: ID) {
  order(id: $id) {
    ...Cart
  }
}
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
          value
        }
        product {
          name
          slug
          assets(input: {take: 1}) {
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
}`) as unknown as TypedDocumentString<GetCartQuery, GetCartQueryVariables>;
export const GetAvailablePaymentMethodsDocument = new TypedDocumentString(`
    query GetAvailablePaymentMethods {
  availablePaymentMethods {
    id
    name
    enabled
    description
  }
}
    `) as unknown as TypedDocumentString<
  GetAvailablePaymentMethodsQuery,
  GetAvailablePaymentMethodsQueryVariables
>;
export const GetAvailableShippingMethodsDocument = new TypedDocumentString(`
    query GetAvailableShippingMethods($cartId: ID!) {
  availableShippingMethods(orderId: $cartId) {
    id
    name
    price
    description
  }
}
    `) as unknown as TypedDocumentString<
  GetAvailableShippingMethodsQuery,
  GetAvailableShippingMethodsQueryVariables
>;
export const GetCollectionsSlugDocument = new TypedDocumentString(`
    query GetCollectionsSlug {
  collections(input: {take: 3}) {
    items {
      id
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<GetCollectionsSlugQuery, GetCollectionsSlugQueryVariables>;
export const GetCollectionProductsDocument = new TypedDocumentString(`
    query GetCollectionProducts($slug: String) {
  collection(slug: $slug) {
    products {
      items {
        ...CollectionProduct
      }
    }
  }
}
    fragment CollectionProduct on Product {
  id
  name
  slug
  variants(input: {take: 1}) {
    items {
      id
      price
      stock
    }
  }
  assets(input: {take: 1}) {
    items {
      id
      source
      order
    }
  }
}`) as unknown as TypedDocumentString<
  GetCollectionProductsQuery,
  GetCollectionProductsQueryVariables
>;
export const GetCollectionDetailsDocument = new TypedDocumentString(`
    query GetCollectionDetails($slug: String) {
  collection(slug: $slug) {
    id
    name
    slug
    description
  }
}
    `) as unknown as TypedDocumentString<
  GetCollectionDetailsQuery,
  GetCollectionDetailsQueryVariables
>;
export const GetProductDetailsDocument = new TypedDocumentString(`
    query GetProductDetails($slug: String!) {
  product(slug: $slug) {
    ...ProductDetails
  }
}
    fragment ProductDetails on Product {
  id
  name
  slug
  description
  assets {
    items {
      id
      name
      order
      source
    }
  }
  options {
    id
    name
    values {
      id
      value
    }
  }
  variants {
    items {
      id
      price
      stock
      optionValues {
        id
        value
      }
    }
  }
}`) as unknown as TypedDocumentString<GetProductDetailsQuery, GetProductDetailsQueryVariables>;
