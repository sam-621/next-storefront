import Link from 'next/link';

import { Button } from '@/components/ui';
import { getCollectionsSlugs } from '@/lib/collections/data';

export default async function Home() {
  const collection = await getCollectionsSlugs();

  const defaultCollection = collection[0];

  return (
    <div className="relative hero_height">
      <div className="w-full h-full absolute z-20 flex items-center">
        <div className="section flex flex-col gap-8 items-center w-full">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl xl:text-6xl text-white text-center">
              Vendyx storefront
            </h1>
            <p className="text-xl text-white font-light text-center max-w-3xl">
              Our storefront demonstrates how Vendyx streamlines operations, enhances user
              experience, and drives sales.
            </p>
          </div>
          {defaultCollection && (
            <Link href={`/collections/${defaultCollection.slug}`}>
              <Button size="lg" className="bg-white hover:bg-gray-200 text-gray-900">
                {`Shop news in ${defaultCollection.name}`}
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="w-full h-full bg-slate-800/50 relative z-10"></div>
      <img
        src="/images/hero.png"
        alt="Background hero showing some fancy bloc notes"
        className="object-cover w-full h-full absolute z-0 top-0"
      />
    </div>
  );
}
