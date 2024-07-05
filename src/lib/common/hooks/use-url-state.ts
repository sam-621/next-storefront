'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

/**
 * Handle URL state with URLSearchParams
 */
export const useUrlState = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  /**
   * set a key value pair in the URL
   *
   * @example
   * set('key', 'value');
   */
  const set = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return {
    set,
    searchParams
  };
};
