'use client';

import { useEffect } from 'react';

/**
 * Scroll to the top of the page when the component is mounted.
 *
 * @reason
 * This is a workaround because the redirect method from `next/navigation` does not have a way to scroll to the top of the page.
 */
export const Scroll = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return null;
};
