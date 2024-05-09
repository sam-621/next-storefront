export const FormMessages = {
  unexpectedError: 'Un error inesperado ha ocurrido, por favor intenta de nuevo.',
  fieldErrors: 'Por favor revisa los campos marcados en rojo.',
  required: 'Campo requerido',
  invalidEmail: 'Email inválido',
  invalidPhoneNumber: 'Número de telefono inválido',
  minChars: (min: number) => `Mínimo ${min} caracteres`,
  maxChars: (max: number) => `Máximo ${max} caracteres`,
  minValue: (min: number) => `Mayor que ${min}`,
  maxValue: (max: number) => `menor que ${max}`
};
