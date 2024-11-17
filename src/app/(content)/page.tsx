import { getCollectionsSlugs } from '@/lib/collections';
import { Hero } from '@/lib/shared';

export default async function Home() {
  const collection = await getCollectionsSlugs();

  const defaultCollection = collection[0];

  return (
    <>
      <Hero
        action={
          defaultCollection && {
            title: `Shop news in ${defaultCollection.name}`,
            href: `/collections/${defaultCollection.slug}`
          }
        }
      />
    </>
  );
}
