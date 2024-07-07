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
      <div className="sticky top-0 z-10 bg-white py-8 px-4 h-[85px] border-b">
        <header className="flex justify-between items-center mx-auto max-w-lg xl:grid grid-cols-2 xl:mx-0 xl:max-w-none">
          <div className="xl:min-w-[512px] xl:mx-auto">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="xl:hidden">
            <span className="text-gray-700 font-medium">Step 1 of 3</span>
          </div>
          <div className="hidden xl:block relative -left-1/2">
            <CheckoutSteps />
          </div>
        </header>
      </div>
      {children}
    </>
  );
}
