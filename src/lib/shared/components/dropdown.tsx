'use client';

import { type FC } from 'react';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/shared';

export const Dropdown: FC<Props> = ({ title, options, direction = 'left' }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
          {title}
          <ChevronDownIcon
            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className={cn(
          'absolute z-10 mt-2 w-40 rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in cursor-pointer',
          direction === 'right' ? 'right-0 origin-top-right' : 'left-0 origin-top-left'
        )}
      >
        <div className="py-1">
          {options.map(op => (
            <MenuItem key={op}>
              <span
                className={cn(
                  // option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                  'text-gray-500 block px-4 py-2 text-sm hover:bg-gray-100'
                )}
              >
                {op}
              </span>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

type Props = {
  title: string;
  options: string[];
  /**
   * Direction for the dropdown to open
   *
   * @default "left"
   */
  direction?: 'left' | 'right';
};
