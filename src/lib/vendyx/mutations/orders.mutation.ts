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
      apiErrors {
        code
        message
      }
      order {
        ...CommonOrder
      }
    }
  }
`);

export const createOrder = async ({ line }: CreateOrderInput) => {
  const {
    createOrder: { apiErrors, order }
  } = await vendyxFetcher(CreateOrderMutation, {
    input: { line }
  });

  return {
    order: getFragmentData(CommonOrder, order),
    apiErrors
  };
};

const AddLineToOrderMutation = graphql(`
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
`);

export const addLineToOrder = async (orderId: string, input: CreateOrderLineInput) => {
  const {
    addLineToOrder: { apiErrors, order }
  } = await vendyxFetcher(AddLineToOrderMutation, {
    orderId,
    input
  });

  return {
    order: getFragmentData(CommonOrder, order),
    apiErrors
  };
};

const UpdateOrderLineMutation = graphql(`
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
`);

export const updateOrderLine = async (lineId: string, input: UpdateOrderLineInput) => {
  const {
    updateOrderLine: { apiErrors, order }
  } = await vendyxFetcher(UpdateOrderLineMutation, {
    lineId,
    input
  });

  return {
    order: getFragmentData(CommonOrder, order),
    apiErrors
  };
};

const RemoveOrderLineMutation = graphql(`
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
`);

export const removeOrderLine = async (lineId: string) => {
  const {
    removeOrderLine: { apiErrors, order }
  } = await vendyxFetcher(RemoveOrderLineMutation, {
    lineId
  });

  return {
    order: getFragmentData(CommonOrder, order),
    apiErrors
  };
};

const AddCustomerToOrderMutation = graphql(`
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
`);

export const addCustomerToOrder = async (orderId: string, input: CreateCustomerInput) => {
  const {
    addCustomerToOrder: { apiErrors, order }
  } = await vendyxFetcher(AddCustomerToOrderMutation, {
    orderId,
    input
  });

  return {
    order: getFragmentData(CommonOrder, order),
    apiErrors
  };
};

const AddShippingAddressToOrderMutation = graphql(`
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
`);

export const addShippingAddressToOrder = async (orderId: string, input: CreateAddressInput) => {
  const {
    addShippingAddressToOrder: { apiErrors, order }
  } = await vendyxFetcher(AddShippingAddressToOrderMutation, {
    orderId,
    input
  });

  return {
    order: getFragmentData(CommonOrder, order),
    apiErrors
  };
};

const AddShipmentToOrderMutation = graphql(`
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
`);

export const addShipmentToOrder = async (orderId: string, input: AddShipmentToOrderInput) => {
  const {
    addShipmentToOrder: { apiErrors, order }
  } = await vendyxFetcher(AddShipmentToOrderMutation, {
    orderId,
    input
  });

  return {
    order: getFragmentData(CommonOrder, order),
    apiErrors
  };
};
