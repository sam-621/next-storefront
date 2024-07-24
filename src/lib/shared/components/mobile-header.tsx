'use client';

import { type FC, useState } from 'react';

import { Bars4Icon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { Drawer } from './drawer';

export const MobileHeaderDrawer: FC<Props> = ({ collections }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Drawer
        title="Menu"
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        trigger={<Bars4Icon onClick={() => setIsOpen(true)} className="w-6 h-6 text-gray-400" />}
        footer={
          <div className="p-6 border-t">
            <Link
              href="/sign-in"
              type="button"
              className="flex justify-center items-center px-6 py-3 w-full text-white font-medium bg-indigo-600 hover:bg-indigo-700 rounded-md"
            >
              Sign in
            </Link>
          </div>
        }
      >
        <nav className="flex flex-col gap-6 mt-8">
          {collections.map(c => (
            <Link
              onClick={() => setIsOpen(false)}
              key={c.slug}
              href={`/collections/${c.slug}`}
              className="text-base text-gray-700 transition-colors hover:text-gray-900 flex justify-between items-center"
            >
              {c.name}
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            </Link>
          ))}
        </nav>
      </Drawer>
    </div>
  );
};

type Props = {
  collections: {
    slug: string;
    name: string;
  }[];
};
