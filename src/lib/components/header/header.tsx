import { type FC } from 'react';

import {
  Bars4Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { Logo } from '../common';

export const Header: FC<Props> = ({ collections }) => {
  return (
    <header className="section header_height flex justify-between items-center border-b">
      <div className="flex gap-6 w-44">
        <Bars4Icon className="w-6 h-6 text-gray-400 lg:hidden" />
        <Logo />
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
      <div className="flex gap-6 w-44">
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
        <UserIcon className="w-6 h-6 text-gray-400" />
        <hr className="w-[1px] h-6 bg-gray-200" />
        <div className="flex gap-2">
          <ShoppingBagIcon className="w-6 h-6 text-gray-400" />
          <span className="text-gray-700">0</span>
        </div>
      </div>
    </header>
  );
};

interface Props {
  collections: {
    slug: string;
    name: string;
  }[];
}
