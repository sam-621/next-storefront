import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';
import { notFound } from 'next/navigation';

import { ProductImage } from '@/lib/components';
import { formatPrice } from '@/lib/utils';

import { getProductDetails } from '../data';

export default async function ProductDetailsPage({ params }: { params: Params }) {
  const product = await getProductDetails(params.slug);

  if (!product) {
    return notFound();
  }

  const { assets, options, variants } = product;

  return (
    <main className="flex flex-col gap-16 max-w-2xl mx-auto md:mt-16 xl:max-w-full">
      <section className="flex flex-col gap-8 xl:grid grid-cols-2">
        <ProductImage
          src={assets.items[0].source}
          alt={product.name}
          className="rounded-lg h-fit"
        />
        <div className="section flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold leading-9">{product.name}</h1>
            <span className="leading-9 text-3xl font-normal">
              {formatPrice(variants.items[0].price)}
            </span>
          </div>
          <div className="flex flex-col gap-8">
            {options.map(option => (
              <div key={option.id} className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">{option.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {option.values?.map(value => (
                    <button key={value.id} className="py-3 px-5 text-sm border rounded-md">
                      {value.value}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <button
                type="button"
                className="flex justify-center items-center px-6 py-3 w-full text-white font-normal bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium">Description</h3>
            <div>
              <p className="text-base text-gray-500 font-normal">{product.description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col items-center gap-1 py-6 bg-gray-50 border rounded-md w-full">
              <GlobeAmericasIcon className="w-6 h-6" />
              <h4 className="font-medium text-sm">International delivery</h4>
              <p className="font-normal text-sm text-gray-500">Get your order in 2 years</p>
            </div>
            <div className="flex flex-col items-center gap-1 py-6 bg-gray-50 border rounded-md w-full">
              <CurrencyDollarIcon className="w-6 h-6" />
              <h4 className="font-medium text-sm">Loyalty rewards</h4>
              <p className="font-normal text-sm text-gray-500">
                don&apos;t miss out on your rewards
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      {/* Related products */}
      <section></section>
    </main>
  );
}

type Params = {
  slug: string;
};
