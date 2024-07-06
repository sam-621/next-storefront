import { notFound } from 'next/navigation';

import { getProductDetails } from '@/lib/products';
import { ProductGallery, ProductInfo } from '@/lib/products/components';

export default async function ProductDetailsPage({ params }: { params: Params }) {
  const product = await getProductDetails(params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <main className="flex flex-col gap-16 mt-6 max-w-2xl mx-auto md:mt-16 xl:max-w-full">
      <section className="section relative flex flex-col gap-8 xl:grid grid-cols-2">
        <ProductGallery assets={product.assets.items} />
        <ProductInfo product={product} />
      </section>
      {/* Related products */}
      <section></section>
    </main>
  );
}

type Params = {
  slug: string;
};
