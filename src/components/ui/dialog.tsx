'use client';

import { createContext, type FC, type PropsWithChildren, useContext, useState } from 'react';

import { Dialog as HDialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

import { cn } from '@/lib/shared/utils';

type Schema = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Context = createContext<Schema>({ isOpen: false, setIsOpen: () => {} });

export const useDialog = () => useContext(Context);

const Root: FC<Partial<Schema> & PropsWithChildren> = ({ isOpen, setIsOpen, children }) => {
  const [open, setOpen] = useState(isOpen ?? false);

  return (
    <Context.Provider value={{ isOpen: isOpen ?? open, setIsOpen: setIsOpen ?? setOpen }}>
      {children}
    </Context.Provider>
  );
};

const Trigger: FC<{ className?: string } & PropsWithChildren> = ({ className, children }) => {
  const { setIsOpen } = useDialog();

  return (
    <button onClick={() => setIsOpen(true)} className={className}>
      {children}
    </button>
  );
};

const Title: FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
  return (
    <DialogTitle className={cn('text-base font-semibold text-gray-900', className)}>
      {children}
    </DialogTitle>
  );
};

const Close: FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
  const { setIsOpen } = useDialog();

  return (
    <button type="button" onClick={() => setIsOpen(false)} className={className}>
      {children}
    </button>
  );
};

const Content: FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
  const { isOpen, setIsOpen } = useDialog();
  console.log({
    isOpen
  });

  return (
    <HDialog open={isOpen} onClose={setIsOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className={cn(
              'w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95',
              className
            )}
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </HDialog>
  );
};

export const Dialog = Object.assign(Root, { Trigger, Title, Content, Close });
