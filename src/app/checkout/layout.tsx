import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { Logo } from '@/ui/components/items';

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
          <div className="flex gap-4 items-center justify-center w-full">
            <p className="text-sm text-gray-700">Carrito</p>
            <ChevronRightIcon className="size-3 text-gray-300" />
            <p className="text-sm text-indigo-600">Información de pago</p>
            <ChevronRightIcon className="size-3 text-gray-300" />
            <p className="text-sm text-gray-700">Confirmación</p>
          </div>
        </header>
        <hr className="" />
      </div>
      {children}
    </>
  );
}
