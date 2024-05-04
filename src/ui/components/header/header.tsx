import { ShoppingBagIcon } from '@heroicons/react/24/outline';

import { Logo } from '../items';

export const Header = () => {
  return (
    <header className="flex justify-between items-center mx-3 md:mx-8 h-16 border-b border-gray-200">
      <div>
        <Logo />
      </div>
      <div className="flex gap-2 items-center group">
        <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 cursor-pointer" />
        <span className="text-gray-700 group-hover:text-gray-800">0</span>
      </div>
    </header>
  );
};
