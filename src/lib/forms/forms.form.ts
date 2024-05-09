import { type z } from 'zod';

export const FORM_INITIAL_STATE = {
  error: false,
  fieldErrors: undefined,
  message: ''
};
export interface FormState<T extends z.ZodObject<any>> {
  message: string;
  error: boolean;
  fieldErrors?: SchemaFromZod<T>;
}

type SchemaFromZod<T extends z.ZodObject<any>> = {
  [K in keyof T['_input']]?: string[] | undefined;
};

/**
 * @example
 * getFieldError(fieldErrors?.email)
 */
export const getFieldError = (error: string[] | undefined) => {
  return Array.isArray(error) ? error[0] : '';
};
