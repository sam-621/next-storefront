'use client';

import { type FC } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/utils';

export const Drawer: FC<Props> = ({ isOpen, trigger, title, handleClose, footer, children }) => {
  // removes the scrollbar and causes the page to jump,
  // but it prevents the page from scrolling when a drawer is open
  // so we need a better solution
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [isOpen]);

  return (
    <div>
      {trigger}
      <div
        className={cn(
          'relative z-30 transition-opacity',
          !isOpen && 'opacity-0 pointer-events-none'
        )}
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={cn(
                'pointer-events-none fixed inset-y-0 right-0 flex w-full md:w-fit md:pl-10 transition-transform',
                !isOpen && 'translate-x-full'
              )}
            >
              <div className="pointer-events-auto w-full md:w-screen md:max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                        {title}
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={handleClose}
                        >
                          <span className="absolute -inset-0.5"></span>
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>

                    {children}
                  </div>

                  {footer}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  trigger: React.ReactNode;
  title: string;
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  footer: React.ReactNode;
};
