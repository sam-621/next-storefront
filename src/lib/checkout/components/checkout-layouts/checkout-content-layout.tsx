import { type FC, type PropsWithChildren } from 'react';

import { cn } from '@/lib/shared';

const Root: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex flex-col-reverse min-h-[calc(100vh-85px)] xl:grid grid-cols-2">
      {children}
    </main>
  );
};

const Section: FC<PropsWithChildren & { className?: string; sticky?: boolean }> = ({
  children,
  className,
  sticky
}) => {
  return (
    <section className={cn('py-16 px-4', className)}>
      <div className={cn('mx-auto max-w-lg', sticky && 'sticky top-[calc(85px+64px)]')}>
        {children}
      </div>
    </section>
  );
};

export const CheckoutContentLayout = Object.assign(Root, { Section });
