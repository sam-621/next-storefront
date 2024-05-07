import { Input } from '@/ui/theme';

import { CheckoutFormCard } from './checkout-form-card';

export const AddressInfoForm = () => {
  return (
    <CheckoutFormCard title="Información de envío">
      <Input label="País" />
      <Input label="Dirección" />
      <Input label="Apartamento, suite, etc." />

      <div className="grid grid-cols-3 gap-2">
        <Input label="Código postal" />
        <Input label="Ciudad" />
        <Input label="Estado" />
      </div>
      <Input label="Referencias" />
    </CheckoutFormCard>
  );
};
