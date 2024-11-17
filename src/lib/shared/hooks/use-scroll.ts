'use client';

import { useEffect } from 'react';

/**
 * Scrolls the window to the specified position.
 *
 * @default top 0
 * @default behavior 'smooth'
 * @default left 0
 */
export const useScroll = (options?: ScrollToOptions) => {
  useEffect(() => {
    window.scrollTo({
      top: options?.top ?? 0,
      behavior: options?.behavior ?? 'smooth',
      left: options?.left ?? 0
    });
  }, [options]);
};
