import { UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { getCustomer } from '@/lib/customer/data';

const Root = async () => {
  const customer = await getCustomer();

  const initials = customer?.firstName ? customer.firstName[0] : customer?.lastName[0];

  if (!customer)
    return (
      <Link href="/login">
        <Placeholder />
      </Link>
    );

  return (
    <Link
      href="/account"
      className="flex shrink-0 justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 rounded-full w-6 h-6 text-white"
    >
      {initials}
    </Link>
  );
};

const Placeholder = () => {
  return <UserIcon className="w-6 h-6 text-gray-400 flex-shrink-0" />;
};

export const CustomerAvatar = Object.assign(Root, { Placeholder });
