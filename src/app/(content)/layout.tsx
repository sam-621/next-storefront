import { Header } from '../components/header';
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
