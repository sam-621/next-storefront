import { Header } from '@/lib/components';

import { getCollectionsSlugs } from './collections/data';

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const collections = await getCollectionsSlugs();

  return (
    <>
      <Header collections={collections} />
      {children}
    </>
  );
}
