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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
};

export type AddCustomerToOrderInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type AddPaymentToOrderInput = {
  methodId: Scalars['ID']['input'];
};

export type AddShipmentToOrderInput = {
  methodId: Scalars['ID']['input'];
};

export type Address = Node & {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  postalCode: Scalars['String']['output'];
  /** State or region */
  province: Scalars['String']['output'];
  references?: Maybe<Scalars['String']['output']>;
  streetLine1: Scalars['String']['output'];
  streetLine2?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type AddressJson = {
  __typename?: 'AddressJson';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  /** State or region */
  province: Scalars['String']['output'];
  references?: Maybe<Scalars['String']['output']>;
  streetLine1: Scalars['String']['output'];
  streetLine2?: Maybe<Scalars['String']['output']>;
};

export type AddressList = List & {
  __typename?: 'AddressList';
  count: Scalars['Int']['output'];
  items: Array<Address>;
  pageInfo: PageInfo;
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

export type AssetList = List & {
  __typename?: 'AssetList';
  count: Scalars['Int']['output'];
  items: Array<Asset>;
  pageInfo: PageInfo;
};

export enum AssetType {
  Image = 'IMAGE'
}

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A collection is a group of products that are displayed together in the storefront. */
export type Collection = Node & {
  __typename?: 'Collection';
  assets: AssetList;
  createdAt: Scalars['Date']['output'];
  /** The collection's description */
  description?: Maybe<Scalars['String']['output']>;
  /** The collection's order user to decide to show the collection in the storefront */
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The collection's name */
  name: Scalars['String']['output'];
  products: ProductList;
  /** The collection's slug used in the URL */
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

/** A collection is a group of products that are displayed together in the storefront. */
export type CollectionAssetsArgs = {
  input?: InputMaybe<ListInput>;
};

/** A collection is a group of products that are displayed together in the storefront. */
export type CollectionProductsArgs = {
  input?: InputMaybe<ProductListInput>;
};

export type CollectionList = List & {
  __typename?: 'CollectionList';
  count: Scalars['Int']['output'];
  items: Array<Collection>;
  pageInfo: PageInfo;
};

export type Country = Node & {
  __typename?: 'Country';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  states: Array<State>;
  updatedAt: Scalars['Date']['output'];
};

export type CreateAddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
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
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type CustomerAddressesArgs = {
  input?: InputMaybe<ListInput>;
};

export type CustomerOrdersArgs = {
  input?: InputMaybe<OrderListInput>;
};

export enum CustomerErrorCode {
  DisabledCustomer = 'DISABLED_CUSTOMER',
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
  pageInfo: PageInfo;
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
  pageInfo: PageInfo;
};

export type ListInput = {
  /** Skip the first n results */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** takes n result from where the skip position is */
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
  /** Create a new customer. */
  createCustomer: CustomerResult;
  createOrder: OrderResult;
  /** Create paypal order and return the paypal order id */
  createPaypalOrder: PaypalResult;
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
  input: CreateOrderInput;
};

export type MutationCreatePaypalOrderArgs = {
  orderId: Scalars['ID']['input'];
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
  values: Array<OptionValue>;
};

export type OptionList = List & {
  __typename?: 'OptionList';
  count: Scalars['Int']['output'];
  items: Array<Option>;
  pageInfo: PageInfo;
};

export type OptionValue = Node & {
  __typename?: 'OptionValue';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  option: Option;
  updatedAt: Scalars['Date']['output'];
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
  shippingAddress?: Maybe<AddressJson>;
  state: OrderState;
  /** Order lines total less discounts */
  subtotal: Scalars['Int']['output'];
  /** The price that will be sent to the payment provider. subtotal plus shipping price */
  total: Scalars['Int']['output'];
  totalQuantity: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type OrderLinesArgs = {
  input?: InputMaybe<ListInput>;
};

/**  Utils  */
export enum OrderErrorCode {
  CustomerDisabled = 'CUSTOMER_DISABLED',
  CustomerInvalidEmail = 'CUSTOMER_INVALID_EMAIL',
  ForbiddenOrderAction = 'FORBIDDEN_ORDER_ACTION',
  MissingShippingAddress = 'MISSING_SHIPPING_ADDRESS',
  NotEnoughStock = 'NOT_ENOUGH_STOCK',
  OrderTransitionError = 'ORDER_TRANSITION_ERROR',
  PaymentDeclined = 'PAYMENT_DECLINED',
  /** Payment failed due to an unexpected error in the payment handler */
  PaymentFailed = 'PAYMENT_FAILED',
  PaymentMethodNotFound = 'PAYMENT_METHOD_NOT_FOUND',
  ShippingMethodNotFound = 'SHIPPING_METHOD_NOT_FOUND'
}

export type OrderErrorResult = {
  __typename?: 'OrderErrorResult';
  code: OrderErrorCode;
  message: Scalars['String']['output'];
};

export type OrderFilters = {
  code?: InputMaybe<Scalars['String']['input']>;
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
  pageInfo: PageInfo;
};

export type OrderList = List & {
  __typename?: 'OrderList';
  count: Scalars['Int']['output'];
  items: Array<Order>;
  pageInfo: PageInfo;
};

export type OrderListInput = {
  /** Filters to apply */
  filters?: InputMaybe<OrderFilters>;
  /** Skip the first n results */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** takes n result from where the skip position is */
  take?: InputMaybe<Scalars['Int']['input']>;
};

/**  Results  */
export type OrderResult = {
  __typename?: 'OrderResult';
  apiErrors: Array<OrderErrorResult>;
  order?: Maybe<Order>;
};

export enum OrderState {
  /** The order has been canceled by the admin */
  Canceled = 'CANCELED',
  /** The order has been delivered and is completes */
  Delivered = 'DELIVERED',
  /** The order is being modified by the customer (CRUD line actions, adding contact info and shipment info) */
  Modifying = 'MODIFYING',
  /** The order is ready to be paid */
  PaymentAdded = 'PAYMENT_ADDED',
  /** The payment has been authorized by the payment provider */
  PaymentAuthorized = 'PAYMENT_AUTHORIZED',
  /** The order has been shipped (carrier and tracking code added) */
  Shipped = 'SHIPPED'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  total: Scalars['Int']['output'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

/** A payment method is a way to pay for an order in your shop, like credit card, paypal, etc */
export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  createdAt: Scalars['Date']['output'];
  /** The payment method's icon */
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The payment method's name (e.g. 'Stripe') */
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum PaypalErrorCode {
  PaypalError = 'PAYPAL_ERROR',
  UnknownError = 'UNKNOWN_ERROR'
}

export type PaypalErrorResult = {
  __typename?: 'PaypalErrorResult';
  code?: Maybe<PaypalErrorCode>;
  message?: Maybe<Scalars['String']['output']>;
};

export type PaypalResult = {
  __typename?: 'PaypalResult';
  apiErrors: Array<PaypalErrorResult>;
  orderId?: Maybe<Scalars['String']['output']>;
};

export type Product = Node & {
  __typename?: 'Product';
  /**
   * Whether the product is archived or not.
   * Archived products are not exposed to the storefront API and are not visible in the admin ui by default.
   * Useful for products that are not available anymore but you don't want to lose their data.
   */
  archived: Scalars['Boolean']['output'];
  assets: AssetList;
  createdAt: Scalars['Date']['output'];
  /** The product's description */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * Whether the products is enabled or not.
   * Not enabled products are not exposed to the storefront API but are visible in the admin ui.
   * Useful for products that are not published by now but they planned to be published in the future.
   */
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The product's name */
  name: Scalars['String']['output'];
  options: Array<Option>;
  /** A human-friendly unique string for the Product automatically generated from its name */
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

export type ProductFilters = {
  name?: InputMaybe<StringFilter>;
};

export type ProductList = List & {
  __typename?: 'ProductList';
  count: Scalars['Int']['output'];
  items: Array<Product>;
  pageInfo: PageInfo;
};

export type ProductListInput = {
  /** Filters to apply */
  filters?: InputMaybe<ProductFilters>;
  /** Skip the first n results */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** takes n result from where the skip position is */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  availablePaymentMethods: Array<PaymentMethod>;
  availableShippingMethods: Array<ShippingMethod>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  countries: Array<Country>;
  /** Get the customer by the access token. */
  customer?: Maybe<Customer>;
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  products: ProductList;
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
  input?: InputMaybe<ProductListInput>;
};

export type Shipment = Node & {
  __typename?: 'Shipment';
  amount: Scalars['Int']['output'];
  carrier?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  order: Order;
  trackingCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

/** A shipping method is a method chosen by the customer to ship the order to the customer's address */
export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  createdAt: Scalars['Date']['output'];
  /** The shipping method's description */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * Whether the shipping method is enabled or not
   * Not enabled shipping methods will not be shown in the storefront
   * Useful for shipping methods that are not ready to be used yet
   */
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The shipping method's name (e.g. 'Stripe') */
  name: Scalars['String']['output'];
  pricePreview: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type State = Node & {
  __typename?: 'State';
  country: Country;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerPasswordInput = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateOrderLineInput = {
  quantity: Scalars['Int']['input'];
};

/**
 * A variant is a specific version of a product.
 * For example, a product can have a variant with a specific color, size, or material.
 */
export type Variant = Node & {
  __typename?: 'Variant';
  asset?: Maybe<Asset>;
  /**
   * The variant's comparison price.
   * Useful when you want to mark a variant as on sale. Comparison price should be higher than the sale price.
   */
  comparisonPrice?: Maybe<Scalars['Int']['output']>;
  /**
   * The variant's cost per unit.
   * Useful when you want to calculate the profit of a variant.
   */
  costPerUnit?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  optionValues: Array<OptionValue>;
  product: Product;
  /**
   * The variant's weight
   * Useful when you want to indicate that the variant needs shipping.
   */
  requiresShipping: Scalars['Boolean']['output'];
  /** The variant's sale price */
  salePrice: Scalars['Int']['output'];
  /** The variant's SKU */
  sku?: Maybe<Scalars['String']['output']>;
  /** The variant's stock */
  stock: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type VariantList = List & {
  __typename?: 'VariantList';
  count: Scalars['Int']['output'];
  items: Array<Variant>;
  pageInfo: PageInfo;
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
        optionValues: Array<{ __typename?: 'OptionValue'; id: string; name: string }>;
        asset?: { __typename?: 'Asset'; id: string; source: string } | null;
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
  } | null;
  shippingAddress?: {
    __typename?: 'AddressJson';
    streetLine1: string;
    streetLine2?: string | null;
    postalCode: string;
    city: string;
    province: string;
    country: string;
    references?: string | null;
  } | null;
  shipment?: { __typename?: 'Shipment'; id: string; amount: number; method: string } | null;
  payment?: {
    __typename?: 'Payment';
    id: string;
    amount: number;
    transactionId?: string | null;
    method: string;
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
  availablePaymentMethods: Array<{ __typename?: 'PaymentMethod'; id: string; name: string }>;
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
    pricePreview: number;
    description?: string | null;
  }>;
};

export type GetCountriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCountriesQuery = {
  __typename?: 'Query';
  countries: Array<{
    __typename?: 'Country';
    id: string;
    name: string;
    states: Array<{ __typename?: 'State'; id: string; name: string }>;
  }>;
};

export type CreateCartMutationVariables = Exact<{
  input: CreateOrderInput;
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

export type AddCustomerToCartMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  input: AddCustomerToOrderInput;
}>;

export type AddCustomerToCartMutation = {
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
    order?: { __typename?: 'Order'; id: string; code: string } | null;
  };
};

export type CollectionProductFragment = {
  __typename?: 'Product';
  id: string;
  name: string;
  slug: string;
  variants: {
    __typename?: 'VariantList';
    items: Array<{ __typename?: 'Variant'; id: string; salePrice: number; stock: number }>;
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

export type CustomerDetailsFragment = {
  __typename?: 'Customer';
  id: string;
  email: string;
  firstName?: string | null;
  lastName: string;
  phoneNumber?: string | null;
} & { ' $fragmentName'?: 'CustomerDetailsFragment' };

export type GetCustomerQueryVariables = Exact<{
  accessToken: Scalars['String']['input'];
}>;

export type GetCustomerQuery = {
  __typename?: 'Query';
  customer?:
    | ({ __typename?: 'Customer' } & {
        ' $fragmentRefs'?: { CustomerDetailsFragment: CustomerDetailsFragment };
      })
    | null;
};

export type CreateCustomerMutationMutationVariables = Exact<{
  input: CreateCustomerInput;
}>;

export type CreateCustomerMutationMutation = {
  __typename?: 'Mutation';
  createCustomer: {
    __typename?: 'CustomerResult';
    apiErrors: Array<{
      __typename?: 'CustomerErrorResult';
      code: CustomerErrorCode;
      message: string;
    }>;
    customer?: { __typename?: 'Customer'; id: string } | null;
  };
};

export type GenerateAccessTokenMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type GenerateAccessTokenMutation = {
  __typename?: 'Mutation';
  generateCustomerAccessToken: {
    __typename?: 'GenerateCustomerAccessTokenResult';
    accessToken?: string | null;
    apiErrors: Array<{
      __typename?: 'CustomerErrorResult';
      code: CustomerErrorCode;
      message: string;
    }>;
  };
};

export type UpdateCustomerMutationVariables = Exact<{
  accessToken: Scalars['String']['input'];
  input: UpdateCustomerInput;
}>;

export type UpdateCustomerMutation = {
  __typename?: 'Mutation';
  updateCustomer: {
    __typename?: 'CustomerResult';
    apiErrors: Array<{
      __typename?: 'CustomerErrorResult';
      code: CustomerErrorCode;
      message: string;
    }>;
    customer?: { __typename?: 'Customer'; id: string } | null;
  };
};

export type OrderFragment = {
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
        optionValues: Array<{ __typename?: 'OptionValue'; id: string; name: string }>;
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
  } | null;
  shippingAddress?: {
    __typename?: 'AddressJson';
    streetLine1: string;
    streetLine2?: string | null;
    postalCode: string;
    city: string;
    province: string;
    country: string;
    references?: string | null;
  } | null;
  shipment?: { __typename?: 'Shipment'; id: string; amount: number; method: string } | null;
  payment?: {
    __typename?: 'Payment';
    id: string;
    amount: number;
    transactionId?: string | null;
    method: string;
  } | null;
} & { ' $fragmentName'?: 'OrderFragment' };

export type GetOrderQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;

export type GetOrderQuery = {
  __typename?: 'Query';
  order?:
    | ({ __typename?: 'Order' } & { ' $fragmentRefs'?: { OrderFragment: OrderFragment } })
    | null;
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
    values: Array<{ __typename?: 'OptionValue'; id: string; name: string }>;
  }>;
  variants: {
    __typename?: 'VariantList';
    items: Array<{
      __typename?: 'Variant';
      id: string;
      salePrice: number;
      stock: number;
      optionValues: Array<{ __typename?: 'OptionValue'; id: string; name: string }>;
      asset?: { __typename?: 'Asset'; id: string; source: string } | null;
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
          name
        }
        asset {
          id
          source
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
      salePrice
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
export const CustomerDetailsFragmentDoc = new TypedDocumentString(
  `
    fragment CustomerDetails on Customer {
  id
  email
  firstName
  lastName
  phoneNumber
}
    `,
  { fragmentName: 'CustomerDetails' }
) as unknown as TypedDocumentString<CustomerDetailsFragment, unknown>;
export const OrderFragmentDoc = new TypedDocumentString(
  `
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
          name
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
    `,
  { fragmentName: 'Order' }
) as unknown as TypedDocumentString<OrderFragment, unknown>;
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
      name
    }
  }
  variants {
    items {
      id
      salePrice
      stock
      optionValues {
        id
        name
      }
      asset {
        id
        source
      }
    }
  }
}
    `,
  { fragmentName: 'ProductDetails' }
) as unknown as TypedDocumentString<ProductDetailsFragment, unknown>;
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
          name
        }
        asset {
          id
          source
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
}`) as unknown as TypedDocumentString<GetCartQuery, GetCartQueryVariables>;
export const GetAvailablePaymentMethodsDocument = new TypedDocumentString(`
    query GetAvailablePaymentMethods {
  availablePaymentMethods {
    id
    name
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
    pricePreview
    description
  }
}
    `) as unknown as TypedDocumentString<
  GetAvailableShippingMethodsQuery,
  GetAvailableShippingMethodsQueryVariables
>;
export const GetCountriesDocument = new TypedDocumentString(`
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
    `) as unknown as TypedDocumentString<GetCountriesQuery, GetCountriesQueryVariables>;
export const CreateCartDocument = new TypedDocumentString(`
    mutation CreateCart($input: CreateOrderInput!) {
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
export const AddCustomerToCartDocument = new TypedDocumentString(`
    mutation AddCustomerToCart($cartId: ID!, $input: AddCustomerToOrderInput!) {
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
  AddCustomerToCartMutation,
  AddCustomerToCartMutationVariables
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
      code
    }
  }
}
    `) as unknown as TypedDocumentString<
  AddPaymentToCartMutationMutation,
  AddPaymentToCartMutationMutationVariables
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
      salePrice
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
export const GetCustomerDocument = new TypedDocumentString(`
    query GetCustomer($accessToken: String!) {
  customer(accessToken: $accessToken) {
    ...CustomerDetails
  }
}
    fragment CustomerDetails on Customer {
  id
  email
  firstName
  lastName
  phoneNumber
}`) as unknown as TypedDocumentString<GetCustomerQuery, GetCustomerQueryVariables>;
export const CreateCustomerMutationDocument = new TypedDocumentString(`
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
    `) as unknown as TypedDocumentString<
  CreateCustomerMutationMutation,
  CreateCustomerMutationMutationVariables
>;
export const GenerateAccessTokenDocument = new TypedDocumentString(`
    mutation GenerateAccessToken($email: String!, $password: String!) {
  generateCustomerAccessToken(email: $email, password: $password) {
    apiErrors {
      code
      message
    }
    accessToken
  }
}
    `) as unknown as TypedDocumentString<
  GenerateAccessTokenMutation,
  GenerateAccessTokenMutationVariables
>;
export const UpdateCustomerDocument = new TypedDocumentString(`
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
    `) as unknown as TypedDocumentString<UpdateCustomerMutation, UpdateCustomerMutationVariables>;
export const GetOrderDocument = new TypedDocumentString(`
    query GetOrder($code: String!) {
  order(code: $code) {
    ...Order
  }
}
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
          name
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
}`) as unknown as TypedDocumentString<GetOrderQuery, GetOrderQueryVariables>;
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
      name
    }
  }
  variants {
    items {
      id
      salePrice
      stock
      optionValues {
        id
        name
      }
      asset {
        id
        source
      }
    }
  }
}`) as unknown as TypedDocumentString<GetProductDetailsQuery, GetProductDetailsQueryVariables>;
