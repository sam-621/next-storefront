import { type FC } from 'react';

import { UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { Cart } from '@/app/cart/components';
import { Logo } from '@/lib/components';

import { MobileHeaderDrawer } from './mobile-header-drawer';

export const Header: FC<Props> = ({ collections }) => {
  return (
    <header className="section header_height flex justify-between items-center border-b">
      <div className="flex gap-6 w-[90px]">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav className="hidden lg:flex justify-center gap-8">
        {collections.map(c => (
          <Link
            key={c.slug}
            href={`/collections/${c.slug}`}
            className="text-gray-700 transition-colors hover:text-gray-900"
          >
            {c.name}
          </Link>
        ))}
      </nav>
      <div className="flex gap-6 lg:w-[90px]">
        <UserIcon className="w-6 h-6 text-gray-400" />
        {/* <div className="flex gap-2">
          <ShoppingBagIcon className="w-6 h-6 text-gray-400" />
          <span className="text-gray-700">0</span>
        </div> */}
        <Cart />
        <MobileHeaderDrawer collections={collections} />
      </div>
    </header>
  );
};

type Props = {
  collections: {
    slug: string;
    name: string;
  }[];
};
