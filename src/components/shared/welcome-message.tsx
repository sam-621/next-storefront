'use client';

import { useEffect } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { notification } from '@/lib/shared/notification';

export const WelcomeMessage = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const from = searchParams.get('from');
    const customer = searchParams.get('customer');

    if (from === 'login') {
      notification.info(`Welcome back ${customer}`, { richColors: false });
    }

    if (from === 'register') {
      notification.info(`Welcome to Vendyx ${customer}`, { richColors: false });
    }

    const params = new URLSearchParams(searchParams);
    params.delete('from');
    params.delete('customer');

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams]);

  return null;
};
