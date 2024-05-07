import { type FC } from 'react';

import { cn } from '@/ui/utils';

export const Logo: FC<Props> = ({ className }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn('h-8 w-auto', className)}
      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600"
      alt=""
    />
  );
};

interface Props {
  className?: string;
}
