import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vendyx | E-Commerce',
  description: 'E-Commerce enfocado en la venta de productos de calzado. powered by Vendyx'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster richColors />
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
