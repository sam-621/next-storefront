// -translate-x-full

import { type FC } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';

import { cn } from '../utils';

export const Drawer: FC<Props> = ({ isOpen, title, handleClose, footer, className, children }) => {
  return (
    <div
      id="drawer-example"
      className={cn(
        'fixed top-0 right-0 z-40 h-screen p-10 overflow-y-hidden transition-transform bg-white w-[600px] flex flex-col gap-6',
        !isOpen && 'translate-x-full'
      )}
      tabIndex={-1}
      aria-labelledby="drawer-label"
    >
      <div className="flex justify-between items-center">
        <h5 id="drawer-label" className="text-foreground h3">
          {title}
        </h5>
        <XMarkIcon
          width={24}
          height={24}
          onClick={handleClose}
          className="text-foreground-tertiary cursor-pointer"
        />
      </div>

      <hr className="border border-border" />

      <div className={cn('h-full overflow-y-scroll', className)}>{children}</div>

      <hr className="border border-border" />

      <div>{footer}</div>
    </div>
  );
};

interface Props {
  title: string;
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  footer: React.ReactNode;
  className?: string;
}
