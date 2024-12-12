import { redirect } from 'next/navigation';

import {
  AccountAddresses,
  AccountDetailsForm,
  AccountLayout,
  UpdatePasswordButton
} from '@/components/account';
import { getCustomer } from '@/lib/customer/data';

export default async function AccountPage() {
  const customer = await getCustomer();

  if (!customer) {
    redirect('/login');
  }

  return (
    <AccountLayout>
      <AccountLayout.Card
        title="Contact info"
        subtitle="Information about your account and how to contact you"
      >
        <AccountDetailsForm customer={customer} />
      </AccountLayout.Card>
      <hr />
      <AccountLayout.Card title="Addresses" subtitle="Manage your addresses">
        <AccountAddresses addresses={customer.addresses.items} />
      </AccountLayout.Card>
      <hr />
      <AccountLayout.Card title="Account" subtitle="Manage your account">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div>Password</div>
            <div>********</div>
            <div>
              <UpdatePasswordButton />
            </div>
          </div>

          <hr />

          <div className="flex justify-between">
            <div>Disable account</div>
            <div></div>
            <div>
              <button className="text-[#EF4444] font-semibold text-sm">Disable</button>
            </div>
          </div>
        </div>
      </AccountLayout.Card>
      <hr />
      <div></div>
    </AccountLayout>
  );
}
