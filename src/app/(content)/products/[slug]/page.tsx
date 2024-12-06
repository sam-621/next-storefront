import { notFound } from 'next/navigation';

import { getProductDetails, ProductGallery, ProductInfo } from '@/lib/products';
import { VariantProvider } from '@/lib/products/contexts';

export default async function ProductDetailsPage({
  params,
  searchParams
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const product = await getProductDetails(params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <VariantProvider variants={product.variants.items} searchParams={searchParams}>
      <main className="flex flex-col gap-16 mt-6 max-w-2xl mx-auto md:mt-16 xl:max-w-full">
        <section className="section relative flex flex-col gap-8 xl:grid grid-cols-2">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </section>
        {/* Related products */}
        <section></section>
      </main>
    </VariantProvider>
  );
}

type Params = {
  slug: string;
};

type SearchParams = Record<string, string>;
