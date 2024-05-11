import { getAvailablePaymentMethods } from '@/lib/vendyx';

import { PaymentMethods } from './payment-methods';

export const PaymentMethodsForm = async () => {
  const paymentMethods = await getAvailablePaymentMethods();

  return <PaymentMethods methods={paymentMethods} />;
};
