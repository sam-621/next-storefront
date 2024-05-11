import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { getOrder } from '@/lib/vendyx';

import { OrderSummary } from '../components/order-summary/order-summary';

export default async function CheckoutSuccessPage({ searchParams }: Props) {
  const code = searchParams.code ?? '';

  const order = await getOrder({ orderId: code });

  if (!order) {
    redirect('/');
  }

  return (
    <main className="grid grid-cols-2 h-[calc(100vh-85px)] overflow-y-hidden mx-3 md:mx-8 lg:mx-12 xl:mx-auto max-w-7xl">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Gracias por tu compra!</h1>
        <p className="mt-4">Te enviaremos un email con los detalles de tu orden.</p>
        <Link href="/" className="flex items-center gap-2  mt-8 text-indigo-600 cursor-pointer">
          Seguir comprando
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
      <div className="bg-gray-50 pr-8 pl-24 pt-10 pb-32">
        <OrderSummary order={order} />
      </div>
    </main>
  );
}

interface Props {
  searchParams: { code: string };
}
