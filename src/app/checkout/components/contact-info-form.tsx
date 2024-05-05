import { Input } from '@/ui/theme';

import { CheckoutFormCard } from './checkout-form-card';

export const ContactInfoForm = () => {
  return (
    <CheckoutFormCard title="Información de contacto">
      <div className="flex gap-4 w-full">
        <Input label="Correo electrónico" />
        <Input label="Número de teléfono" />
      </div>
    </CheckoutFormCard>
  );
};
