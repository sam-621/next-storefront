import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/lib/shared/notification';
import { TopLoader } from '@/lib/shared/top-loader';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next storefront',
  description: 'Next storefront powered by Vendyx'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <TopLoader />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
