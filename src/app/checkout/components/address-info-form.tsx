import { Input } from '@/ui/theme';

import { CheckoutFormCard } from './checkout-form-card';

export const AddressInfoForm = () => {
  return (
    <CheckoutFormCard title="Información de envío">
      <Input label="Calle 1" />
      <Input label="Calle 2" />
      <div className="grid grid-cols-2 gap-2">
        <Input label="Colonia" />
        <Input label="Código postal" />
        <Input label="Ciudad" />
        <Input label="Estado" />
      </div>
      <Input label="Referencias" />
    </CheckoutFormCard>
  );
};
