import Image from 'next/image';

import { getFormattedPrice } from '@/lib/utils';

export const OrderSummaryItem = () => {
  return (
    <article className="flex">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          fill
          src={
            // image ??
            'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg'
          }
          alt={'name'}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>Nombre</h3>
            <p className="ml-4">{getFormattedPrice(67000)}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {9}</p>
        </div>
      </div>
    </article>
  );
};
