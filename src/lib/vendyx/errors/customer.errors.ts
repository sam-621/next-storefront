import { CustomerErrorCode, type CustomerErrorResult } from '../types';
import { GenericError } from './common.errors';

export const getCustomerError = (error?: CustomerErrorResult) => {
  if (!error) return null;

  if (error.code === CustomerErrorCode.EmailAlreadyExists) {
    return 'This email is already in use.';
  }

  if (error.code === CustomerErrorCode.InvalidCredentials) {
    return 'Invalid email or password.';
  }

  if (error.code === CustomerErrorCode.InvalidEmail) {
    return 'Invalid email.';
  }

  if (error.code === CustomerErrorCode.PasswordsDoNotMatch) {
    return 'Passwords do not match.';
  }

  if (error.code === CustomerErrorCode.InvalidAccessToken) {
    return 'Invalid access token.';
  }

  if (error.code === CustomerErrorCode.DisabledCustomer) {
    return 'This account has been disabled.';
  }

  return GenericError;
};
