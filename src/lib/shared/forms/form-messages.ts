export const FormMessages = {
  unexpectedError: 'An unexpected error occurred. Please try again later.',
  fieldErrors: 'Please check the fields in red',
  required: 'Required field',
  invalidEmail: 'Invalid email',
  invalidPhoneNumber: 'Invalid phone number',
  minChars: (min: number) => `Minimum ${min} characters`,
  maxChars: (max: number) => `Maximum ${max} characters`,
  minValue: (min: number) => `Greater than ${min}`,
  maxValue: (max: number) => `Less than ${max}`
};
