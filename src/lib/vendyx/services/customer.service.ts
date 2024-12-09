import { cookies } from 'next/headers';

import { CookiesNames } from '@/lib/shared/constants';

import { getFragmentData } from '../codegen';
import { getCustomerError } from '../errors';
import { fetcher } from '../fetcher';
import {
  CREATE_CUSTOMER_MUTATION,
  CUSTOMER_DETAILS_FRAGMENT,
  GENERATE_ACCESS_TOKEN_MUTATION,
  ME_QUERY,
  UPDATE_CUSTOMER_MUTATION
} from '../operations';
import {
  type CreateCustomerInput,
  type CustomerErrorCode,
  type UpdateCustomerInput
} from '../types';

export const CustomerService = {
  Tags: {
    customer: 'customer'
  },

  async me(accessToken?: string) {
    // If there is no access token, don't make the request because it will fail
    const accessTokenInCookies = cookies().get(CookiesNames.accessToken)?.value;
    if (!accessTokenInCookies && !accessToken) return null;

    const result = await fetcher(
      ME_QUERY,
      {},
      {
        tags: [CustomerService.Tags.customer],
        headers: accessToken
          ? {
              Authorization: `Bearer ${accessToken}`
            }
          : undefined
      }
    );
    const customer = getFragmentData(CUSTOMER_DETAILS_FRAGMENT, result.me);
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

  async update(input: UpdateCustomerInput): Promise<Result> {
    const {
      updateCustomer: { apiErrors, customer }
    } = await fetcher(UPDATE_CUSTOMER_MUTATION, { input });

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
