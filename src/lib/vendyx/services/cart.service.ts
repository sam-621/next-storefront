import { cookies } from 'next/headers';

import { CookiesNames } from '@/lib/shared';

import { getFragmentData } from '../codegen';
import { getOrderError } from '../errors';
import { fetcher } from '../fetcher';
import {
  ADD_CUSTOMER_TO_CART_MUTATION,
  ADD_PAYMENT_TO_CART_MUTATION,
  ADD_SHIPMENT_TO_CART_MUTATION,
  ADD_SHIPPING_ADDRESS_TO_CART_MUTATION,
  ADD_TO_CART_MUTATION,
  CART_FRAGMENT,
  CREATE_CART_MUTATION,
  GET_AVAILABLE_PAYMENT_METHODS_QUERY,
  GET_AVAILABLE_SHIPPING_METHODS_QUERY,
  GET_CART_QUERY,
  GET_COUNTRIES_QUERY,
  REMOVE_CART_LINE_MUTATION,
  UPDATE_CART_LINE_MUTATION
} from '../operations';
import {
  type AddCustomerToOrderInput,
  type AddPaymentToOrderInput,
  type AddShipmentToOrderInput,
  type CreateAddressInput,
  type CreateOrderInput,
  type CreateOrderLineInput,
  type OrderErrorCode,
  type UpdateOrderLineInput
} from '../types';

export const CartService = {
  Tags: {
    cart: (id: string) => `cart:${id}`
  },

  async getCart() {
    const cartId = cookies().get(CookiesNames.cartId)?.value ?? '';

    const result = await fetcher(GET_CART_QUERY, { id: cartId }, [this.Tags.cart(cartId)]);
    const cart = getFragmentData(CART_FRAGMENT, result.order);

    return cart;
  },

  async getAvailablePaymentMethods() {
    const { availablePaymentMethods } = await fetcher(GET_AVAILABLE_PAYMENT_METHODS_QUERY);

    return availablePaymentMethods;
  },

  async getAvailableShippingMethods(cartId: string) {
    const { availableShippingMethods } = await fetcher(GET_AVAILABLE_SHIPPING_METHODS_QUERY, {
      cartId
    });

    return availableShippingMethods;
  },

  async getCountries() {
    const { countries } = await fetcher(GET_COUNTRIES_QUERY);

    return countries;
  },

  async create(input: CreateOrderInput): Promise<Result> {
    const {
      createOrder: { order, apiErrors }
    } = await fetcher(CREATE_CART_MUTATION, { input });

    const error = getOrderError(apiErrors[0]);

    if (error) {
      return { success: false, error, errorCode: apiErrors[0].code };
    }

    return { success: true, orderId: order?.id ?? '' };
  },

  async addLine(cartId: string, input: CreateOrderLineInput): Promise<Result> {
    const {
      addLineToOrder: { apiErrors, order }
    } = await fetcher(ADD_TO_CART_MUTATION, {
      cartId,
      input
    });

    const error = getOrderError(apiErrors[0]);

    if (error) {
      return { success: false, error, errorCode: apiErrors[0].code };
    }

    return { success: true, orderId: order?.id ?? '' };
  },

  async updateLine(lineId: string, input: UpdateOrderLineInput): Promise<Result> {
    const {
      updateOrderLine: { apiErrors, order }
    } = await fetcher(UPDATE_CART_LINE_MUTATION, {
      lineId,
      input
    });

    const error = getOrderError(apiErrors[0]);

    if (error) {
      return { success: false, error, errorCode: apiErrors[0].code };
    }

    return { success: true, orderId: order?.id ?? '' };
  },

  async removeLine(lineId: string) {
    const {
      removeOrderLine: { apiErrors, order }
    } = await fetcher(REMOVE_CART_LINE_MUTATION, {
      lineId
    });

    const error = getOrderError(apiErrors[0]);

    if (error) {
      return { success: false, error, errorCode: apiErrors[0].code };
    }

    return { success: true, orderId: order?.id ?? '' };
  },

  async addCustomer(cartId: string, input: AddCustomerToOrderInput) {
    const {
      addCustomerToOrder: { apiErrors, order }
    } = await fetcher(ADD_CUSTOMER_TO_CART_MUTATION, { cartId, input });

    const error = getOrderError(apiErrors[0]);

    if (error) {
      return { success: false, error, errorCode: apiErrors[0].code };
    }

    return { success: true, orderId: order?.id ?? '' };
  },

  async addShippingAddress(cartId: string, input: CreateAddressInput) {
    const {
      addShippingAddressToOrder: { apiErrors, order }
    } = await fetcher(ADD_SHIPPING_ADDRESS_TO_CART_MUTATION, {
      cartId,
      input
    });

    const error = getOrderError(apiErrors[0]);

    if (error) {
      return { success: false, error, errorCode: apiErrors[0].code };
    }

    return { success: true, orderId: order?.id ?? '' };
  },

  async addShipment(cartId: string, input: AddShipmentToOrderInput) {
    const {
      addShipmentToOrder: { apiErrors, order }
    } = await fetcher(ADD_SHIPMENT_TO_CART_MUTATION, {
      cartId,
      input
    });

    const error = getOrderError(apiErrors[0]);

    if (error) {
      return { success: false, error, errorCode: apiErrors[0].code };
    }

    return { success: true, orderId: order?.id };
  },

  async addPayment(cartId: string, input: AddPaymentToOrderInput) {
    const {
      addPaymentToOrder: { apiErrors, order }
    } = await fetcher(ADD_PAYMENT_TO_CART_MUTATION, {
      cartId,
      input
    });

    const error = getOrderError(apiErrors[0]);

    if (error) {
      return { success: false, error, errorCode: apiErrors[0].code };
    }

    return { success: true, orderId: order?.id };
  }
};

type Result =
  | {
      success: true;
      orderId: string;
    }
  | {
      success: false;
      error: string;
      errorCode: OrderErrorCode;
    };
