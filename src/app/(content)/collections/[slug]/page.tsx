import { notFound } from 'next/navigation';

import { Dropdown } from '@/lib/components';

import { getCollection } from '../data';

export default async function Page({ params }: { params: Params }) {
  const collection = await getCollection(params.slug);

  if (!collection) {
    notFound();
  }

  return (
    <main className="section flex flex-col gap-6">
      <section className="flex flex-col gap-4 py-24 border-b">
        <h1 className="font-bold text-4xl text-center">{collection.name}</h1>
        <p className="text-gray-500 text-base font-light text-center">{collection.description}</p>
      </section>
      <section>
        <header>
          <div>
            <Dropdown
              title="Sort by"
              options={['Newest', 'Oldest', 'Highest price', 'Lowest price']}
            />
          </div>
          <div></div>
        </header>
        <div></div>
      </section>
    </main>
  );
}

type Params = {
  slug: string;
};
