import { getFragmentData } from '../codegen';
import { getCustomerError } from '../errors';
import { fetcher } from '../fetcher';
import {
  CREATE_CUSTOMER_MUTATION,
  CUSTOMER_DETAILS_FRAGMENT,
  GENERATE_ACCESS_TOKEN_MUTATION,
  GET_CUSTOMER_BY_ACCESS_TOKEN_QUERY,
  UPDATE_CUSTOMER_MUTATION
} from '../operations';
import {
  type CreateCustomerInput,
  type CustomerErrorCode,
  type UpdateCustomerInput
} from '../types';

export const CustomerService = {
  Tags: {
    customer: (id: string) => `customer:${id}`
  },

  async getByAccessToken(accessToken: string) {
    const result = await fetcher(GET_CUSTOMER_BY_ACCESS_TOKEN_QUERY, { accessToken }, [
      this.Tags.customer(accessToken)
    ]);

    const customer = getFragmentData(CUSTOMER_DETAILS_FRAGMENT, result.customer);

    return customer;
  },

  async create(input: CreateCustomerInput): Promise<Result> {
    const {
      createCustomer: { apiErrors, customer }
    } = await fetcher(CREATE_CUSTOMER_MUTATION, { input });

    const error = getCustomerError(apiErrors[0]);

    if (error) {
      return { success: false, error, errorCode: apiErrors[0].code };
    }

    return { success: true, customerId: customer?.id ?? '' };
  },

  async update(accessToken: string, input: UpdateCustomerInput): Promise<Result> {
    const {
      updateCustomer: { apiErrors, customer }
    } = await fetcher(UPDATE_CUSTOMER_MUTATION, { accessToken, input });

    const error = getCustomerError(apiErrors[0]);

    if (error) {
      return { success: false, error, errorCode: apiErrors[0].code };
    }

    return { success: true, customerId: customer?.id ?? '' };
  },

  async generateAccessToken(email: string, password: string): Promise<GenerateAccessTokenResult> {
    const {
      generateCustomerAccessToken: { apiErrors, accessToken }
    } = await fetcher(GENERATE_ACCESS_TOKEN_MUTATION, { email, password });

    const error = getCustomerError(apiErrors[0]);

    if (error) {
      return { success: false, error, errorCode: apiErrors[0].code };
    }

    return { success: true, accessToken: accessToken ?? '' };
  }
};

type Result =
  | {
      success: true;
      customerId: string;
    }
  | {
      success: false;
      error: string;
      errorCode: CustomerErrorCode;
    };

type GenerateAccessTokenResult =
  | {
      success: true;
      accessToken: string;
    }
  | {
      success: false;
      error: string;
      errorCode: CustomerErrorCode;
    };
