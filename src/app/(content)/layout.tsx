import { Suspense } from 'react';

import Link from 'next/link';

import { Cart } from '@/components/cart';
import { CartButton } from '@/components/cart/cart-button';
import { CustomerAvatar } from '@/components/customer';
import { Logo, MobileHeaderDrawer } from '@/components/shared';
import { getCollectionsSlugs } from '@/lib/collections/data';

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const collections = await getCollectionsSlugs();

  return (
    <>
      <header className="section header_height flex justify-between items-center border-b">
        <div className="flex gap-6 w-[90px]">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <nav className="hidden lg:flex justify-center gap-8">
          {collections.map(c => (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              className="text-gray-700 transition-colors hover:text-gray-900"
            >
              {c.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-6 lg:w-[90px]">
          <Suspense fallback={<CustomerAvatar.Placeholder />}>
            <CustomerAvatar />
          </Suspense>
          <Suspense fallback={<CartButton />}>
            <Cart />
          </Suspense>
          <MobileHeaderDrawer collections={collections} />
        </div>
      </header>
      {children}
    </>
  );
}
