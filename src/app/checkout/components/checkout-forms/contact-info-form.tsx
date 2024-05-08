import { Input } from '@/ui/theme';

import { CheckoutFormCard } from '../checkout-form-card';

export const ContactInfoForm = () => {
  return (
    <CheckoutFormCard title="Información de contacto">
      <Input label="Correo electrónico" placeholder="samuel.corrales621@gmail.com" />
      <div className="grid grid-cols-2 gap-4">
        <Input label="Nombre (opcional)" placeholder="Rogelio Samuel" />
        <Input label="Apellidos" placeholder="Moreno Corrales" />
      </div>
    </CheckoutFormCard>
  );
};
