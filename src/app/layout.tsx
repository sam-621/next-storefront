import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { TopLoader } from '@/lib/top-loader';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next storefront',
  description: 'Next storefront powered by Ebloc'
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
        {children}
      </body>
    </html>
  );
}
