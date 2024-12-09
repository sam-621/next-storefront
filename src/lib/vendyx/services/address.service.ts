import { fetcher } from '../fetcher';
import {
  CREATE_CUSTOMER_ADDRESS_MUTATION,
  REMOVE_CUSTOMER_ADDRESS_MUTATION,
  UPDATE_CUSTOMER_ADDRESS_MUTATION
} from '../operations';
import { type CreateAddressInput, type UpdateAddressInput } from '../types';

export const AddressService = {
  async create(input: CreateAddressInput) {
    const { createCustomerAddress } = await fetcher(CREATE_CUSTOMER_ADDRESS_MUTATION, { input });

    return createCustomerAddress;
  },

  async update(id: string, input: UpdateAddressInput) {
    const { updateCustomerAddress } = await fetcher(UPDATE_CUSTOMER_ADDRESS_MUTATION, {
      id,
      input
    });

    return updateCustomerAddress;
  },

  async remove(id: string) {
    const { removeCustomerAddress } = await fetcher(REMOVE_CUSTOMER_ADDRESS_MUTATION, { id });

    return removeCustomerAddress;
  }
};
