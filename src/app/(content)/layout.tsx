import { getCollectionsSlugs } from '@/lib/collections';
import { Header } from '@/lib/common/components/header';

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
