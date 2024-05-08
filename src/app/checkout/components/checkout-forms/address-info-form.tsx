import { Input, Select } from '@/ui/theme';

import { getProvinces } from '../../data';
import { CheckoutFormCard } from '../checkout-form-card';

export const AddressInfoForm = () => {
  return (
    <CheckoutFormCard title="Información de envío">
      <Input label="Telefono" placeholder="667 1624 203" />
      <Input label="Dirección" placeholder="Romulo Díaz de la Vega #117 Col. Lazaro cárdenas" />
      <Input label="Apartamento, suite, etc." placeholder="Apartamento 45" />

      <div className="grid grid-cols-2 gap-4">
        <Select label="País" items={['México']} />
        <Select label="Estado" items={['Selecciona un estado', ...getProvinces()]} />
        <Input label="Ciudad" placeholder="Culiacán" />
        <Input label="Código postal" placeholder="80290" />
      </div>
      <Input label="Referencias" placeholder="Hay dos pinos" />
    </CheckoutFormCard>
  );
};
