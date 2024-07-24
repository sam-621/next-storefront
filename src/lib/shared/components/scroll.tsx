'use client';

import { type FC } from 'react';

import { useScroll } from '../hooks';

/**
 * Scrolls the window to the specified position.
 *
 * @default top 0
 * @default behavior 'smooth'
 * @default left 0
 */
export const Scroll: FC<Props> = ({ options }) => {
  useScroll(options);

  return null;
};

type Props = {
  options?: ScrollToOptions;
};
