'use client';

import { useEffect } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useCustomerContext } from '@/lib/customer/contexts';
import { notification } from '@/lib/shared/notification';

export const WelcomeMessage = () => {
  const { customer } = useCustomerContext();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!customer) return;

    const from = searchParams.get('from');

    if (from === 'login') {
      notification.info(`Welcome back ${customer.firstName}`, { richColors: false });
    }

    if (from === 'register') {
      notification.info(`Welcome to Vendyx ${customer.firstName}`, { richColors: false });
    }

    const params = new URLSearchParams(searchParams);
    params.delete('from');
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, customer]);

  return null;
};
