import { getFragmentData, graphql } from '../codegen';
import {
  type AddShipmentToOrderInput,
  type CreateAddressInput,
  type CreateCustomerInput,
  type CreateOrderInput,
  type CreateOrderLineInput,
  type UpdateOrderLineInput
} from '../codegen/graphql';
import { vendyxFetcher } from '../fetcher.vendyx';
import { CommonOrder } from '../fragments';

const CreateOrderMutation = graphql(`
  mutation CreateOrderMutation($input: CreateOrderInput) {
    createOrder(input: $input) {
      ...CommonOrder
    }
  }
`);

export const createOrder = async ({ line }: CreateOrderInput) => {
  const { createOrder } = await vendyxFetcher(CreateOrderMutation, {
    input: { line }
  });

  const order = getFragmentData(CommonOrder, createOrder);

  return order;
};

const AddLineToOrderMutation = graphql(`
  mutation AddLineToOrderMutation($orderId: ID!, $input: CreateOrderLineInput!) {
    addLineToOrder(orderId: $orderId, input: $input) {
      ...CommonOrder
    }
  }
`);

export const addLineToOrder = async (orderId: string, input: CreateOrderLineInput) => {
  const { addLineToOrder } = await vendyxFetcher(AddLineToOrderMutation, {
    orderId,
    input
  });

  const order = getFragmentData(CommonOrder, addLineToOrder);

  return order;
};

const UpdateOrderLineMutation = graphql(`
  mutation UpdateOrderLineMutation($lineId: ID!, $input: UpdateOrderLineInput!) {
    updateOrderLine(lineId: $lineId, input: $input) {
      ...CommonOrder
    }
  }
`);

export const updateOrderLine = async (lineId: string, input: UpdateOrderLineInput) => {
  const { updateOrderLine } = await vendyxFetcher(UpdateOrderLineMutation, {
    lineId,
    input
  });

  const order = getFragmentData(CommonOrder, updateOrderLine);

  return order;
};

const RemoveOrderLineMutation = graphql(`
  mutation RemoveOrderLineMutation($lineId: ID!) {
    removeOrderLine(lineId: $lineId) {
      ...CommonOrder
    }
  }
`);

export const removeOrderLine = async (lineId: string) => {
  const { removeOrderLine } = await vendyxFetcher(RemoveOrderLineMutation, {
    lineId
  });

  const order = getFragmentData(CommonOrder, removeOrderLine);

  return order;
};

const AddCustomerToOrderMutation = graphql(`
  mutation AddCustomerToOrder($orderId: ID!, $input: CreateCustomerInput!) {
    addCustomerToOrder(orderId: $orderId, input: $input) {
      ...CommonOrder
    }
  }
`);

export const addCustomerToOrder = async (orderId: string, input: CreateCustomerInput) => {
  const { addCustomerToOrder } = await vendyxFetcher(AddCustomerToOrderMutation, {
    orderId,
    input
  });

  const order = getFragmentData(CommonOrder, addCustomerToOrder);

  return order;
};

const AddShippingAddressToOrderMutation = graphql(`
  mutation addShippingAddressToOrder($orderId: ID!, $input: CreateAddressInput!) {
    addShippingAddressToOrder(orderId: $orderId, input: $input) {
      ...CommonOrder
    }
  }
`);

export const addShippingAddressToOrder = async (orderId: string, input: CreateAddressInput) => {
  const { addShippingAddressToOrder } = await vendyxFetcher(AddShippingAddressToOrderMutation, {
    orderId,
    input
  });

  const order = getFragmentData(CommonOrder, addShippingAddressToOrder);

  return order;
};

const AddShipmentToOrderMutation = graphql(`
  mutation AddShipmentToOrderMutation($orderId: ID!, $input: AddShipmentToOrderInput!) {
    addShipmentToOrder(orderId: $orderId, input: $input) {
      ...CommonOrder
    }
  }
`);

export const addShipmentToOrder = async (orderId: string, input: AddShipmentToOrderInput) => {
  const { addShipmentToOrder } = await vendyxFetcher(AddShipmentToOrderMutation, {
    orderId,
    input
  });

  const order = getFragmentData(CommonOrder, addShipmentToOrder);

  return order;
};
