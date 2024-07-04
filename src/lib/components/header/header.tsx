import {
  Bars4Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon
} from '@heroicons/react/24/outline';

import { Logo } from '../common';

export const Header = () => {
  return (
    <header className="section h-16 flex justify-between items-center border-b">
      <div className="flex gap-6">
        <Bars4Icon className="w-6 h-6 text-gray-400" />
        <Logo />
      </div>
      {/* <nav className="w-full flex justify-center gap-8">
        <Link href="categories">Tees</Link>
        <Link href="categories">Workspace</Link>
        <Link href="categories">Bags</Link>
      </nav> */}
      <div className="flex gap-6">
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
        <UserIcon className="w-6 h-6 text-gray-400" />
        <hr className="w-[1px] h-6 bg-gray-200" />
        <div className="flex gap-2">
          <ShoppingBagIcon className="w-6 h-6 text-gray-400" />
          <span>0</span>
        </div>
      </div>
    </header>
  );
};
