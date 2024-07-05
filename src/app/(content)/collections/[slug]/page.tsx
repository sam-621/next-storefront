import { notFound } from 'next/navigation';

import { ProductCard } from '@/lib/components';

import { getCollection } from '../data';

export default async function Page({ params }: { params: Params }) {
  const collection = await getCollection(params.slug);

  if (!collection) {
    notFound();
  }

  return (
    <main>
      <section className="section flex flex-col gap-4 py-24 border-b">
        <h1 className="font-bold text-4xl text-center">{collection.name}</h1>
        <p className="text-gray-500 text-base font-light text-center max-w-4xl mx-auto">
          {collection.description}
        </p>
      </section>
      <section>
        <div className="section grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
          {collection.products.items.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

type Params = {
  slug: string;
};
