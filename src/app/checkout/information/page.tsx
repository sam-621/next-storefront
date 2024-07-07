import { redirect } from 'next/navigation';

import { getCart } from '@/lib/cart';
import { CartSummary, CheckoutFormCard } from '@/lib/checkout/components';
import { Button, Input, Select } from '@/lib/common/components';

export default async function CheckoutPage() {
  const cart = await getCart();

  if (!cart) {
    redirect('/');
  }

  // mx-3 md:mx-8 lg:mx-12 xl:mx-auto max-w-7xl
  return (
    <main className="flex flex-col-reverse min-h-[calc(100vh-85px)] xl:grid grid-cols-2">
      <section className="py-16 px-4">
        <div className="mx-auto max-w-lg">
          <div className="flex flex-col gap-10">
            <CheckoutFormCard title="Contact information">
              <Input name="email" label="Email" placeholder="samuel.corrales621@gmail.com" />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  label="First name (optional)"
                  placeholder="Rogelio Samuel"
                />
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

            <div className="flex flex-col-reverse items-center gap-4">
              <p className="text-gray-500 text-sm">
                You won&apos;t be charged until the payment step.
              </p>
              <Button type="submit" className="w-full font-light">
                Continue to shipping
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-4">
        <div className="mx-auto max-w-lg">
          <CartSummary cart={cart} />
        </div>
      </section>
    </main>
  );
}
