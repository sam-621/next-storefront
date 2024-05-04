import { ProductCard } from '@/ui/components/product';

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-8 mx-3 mt-6 md:mx-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </main>
  );
}
