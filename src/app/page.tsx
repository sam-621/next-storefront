import { ProductCard } from '@/ui/components/product';

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </main>
  );
}
