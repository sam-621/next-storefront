import { AddressInfoForm } from './components/address-info-form';
import { ContactInfoForm } from './components/contact-info-form';
import { OrderSummary } from './components/order-summary/order-summary';

export default async function Checkout() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="pt-10 pl-8 pr-24 flex flex-col gap-10">
        <ContactInfoForm />
        <hr />
        <AddressInfoForm />
        <hr />
        <div>
          <button className="w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
            Pagar
          </button>
        </div>
      </div>
      <div className="bg-gray-50 pr-8 pl-24 pt-10">
        <OrderSummary />
      </div>
    </main>
  );
}
