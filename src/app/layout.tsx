import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster, TopLoader } from '@/lib/shared';

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
    <html lang="en" suppressContentEditableWarning>
      <body className={inter.className}>
        <TopLoader />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
