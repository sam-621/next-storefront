import { Button, Input, Select } from '@/lib/common/components';

import { CheckoutFormCard } from '../checkout-card';

export const InformationForm = () => {
  return (
    <div className="flex flex-col gap-10">
      <CheckoutFormCard title="Contact information">
        <Input name="email" label="Email" placeholder="samuel.corrales621@gmail.com" />
        <div className="grid grid-cols-2 gap-4">
          <Input name="firstName" label="First name (optional)" placeholder="Rogelio Samuel" />
          <Input name="lastName" label="Last name" placeholder="Moreno Corrales" />
        </div>
      </CheckoutFormCard>

      <CheckoutFormCard title="Shipping address">
        <Input name="company" label="Company" placeholder="" />
        <Input name="streetLine1" label="Address" placeholder="" />
        <Input name="streetLine2" label="Apartment, suite, etc." placeholder="" />
        <div className="grid grid-cols-2 gap-4">
          <Select name="country" label="Country" items={['México']} />
          <Select name="province" label="Province" items={['Sinaloa']} />
          <Input name="city" label="City" placeholder="Culiacán" />
          <Input name="postalCode" label="Postal code" placeholder="80290" />
        </div>
        <Input name="references" label="References" placeholder="In a corner" />
      </CheckoutFormCard>

      <hr />

      <div className="flex justify-end">
        <Button size="lg" type="submit" className="w-full font-light lg:w-fit">
          Continue to shipping
        </Button>
      </div>
    </div>
  );
};
