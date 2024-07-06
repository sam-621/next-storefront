import { Suspense } from 'react';

import Link from 'next/link';

import { CheckoutSteps } from '@/lib/checkout/components';
import { Logo } from '@/lib/common/components';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="sticky top-0 z-10 bg-white">
        <header className="flex items-center p-8 mx-3 md:mx-8 lg:mx-12 xl:mx-auto max-w-7xl">
          <Link href="/" className="absolute">
            <Logo />
          </Link>
          <Suspense>
            <CheckoutSteps />
          </Suspense>
        </header>
        <hr />
      </div>
      {children}
    </>
  );
}
