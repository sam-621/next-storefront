import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { CustomerProvider } from '@/lib/customer/contexts';
import { getCustomer } from '@/lib/customer/data';
import { Toaster } from '@/lib/shared/notification';
import { TopLoader } from '@/lib/shared/top-loader';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next storefront',
  description: 'Next storefront powered by Vendyx'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const customer = await getCustomer();

  return (
    <html lang="en">
      <CustomerProvider value={{ isAuth: Boolean(customer), customer }}>
        <body className={inter.className} suppressHydrationWarning>
          <TopLoader />
          <Toaster />
          {children}
        </body>
      </CustomerProvider>
    </html>
  );
}
