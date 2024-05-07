import { Input } from '@/ui/theme';

import { CheckoutFormCard } from './checkout-form-card';

export const ContactInfoForm = () => {
  return (
    <CheckoutFormCard title="Información de contacto">
      <Input label="Correo electrónico" />
      <div className="grid grid-cols-2 gap-2">
        <Input label="Nombre (opcional)" />
        <Input label="Apellidos" />
      </div>
    </CheckoutFormCard>
  );
};
