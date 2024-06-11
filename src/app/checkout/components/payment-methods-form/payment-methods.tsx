import { getAvailablePaymentMethods } from '@/lib/ebloc';

import { PaymentMethodsForm } from './payment-methods-form';

export const PaymentMethods = async () => {
  const paymentMethods = await getAvailablePaymentMethods();

  return <PaymentMethodsForm methods={paymentMethods} />;
};
