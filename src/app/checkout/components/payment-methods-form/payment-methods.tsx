import { getAvailablePaymentMethods } from '@/lib/vendyx';

import { PaymentMethodsForm } from './payment-methods-form';

export const PaymentMethods = async () => {
  const paymentMethods = await getAvailablePaymentMethods();

  return <PaymentMethodsForm methods={paymentMethods} />;
};
