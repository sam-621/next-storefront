import { Input } from '@/ui/theme';

import { CheckoutFormCard } from './checkout-form-card';

export const AddressInfoForm = () => {
  return (
    <CheckoutFormCard title="Información de envío">
      <Input label="Telefono" />
      <Input label="Dirección" />
      <Input label="Apartamento, suite, etc." />

      <div className="grid grid-cols-2 gap-2">
        <Input label="País" />
        <Input label="Estado" />
        <Input label="Código postal" />
        <Input label="Ciudad" />
      </div>
      <Input label="Referencias" />
    </CheckoutFormCard>
  );
};
