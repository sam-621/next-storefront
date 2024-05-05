import { getProducts } from '@/lib/vendyx';
import { ProductCard } from '@/ui/components/product';

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </main>
  );
}
