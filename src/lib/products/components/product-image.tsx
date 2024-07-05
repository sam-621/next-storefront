import { type FC } from 'react';

import { cn } from '@/lib/common';

export const ProductImage: FC<Props> = ({ src, alt, className }) => {
  return (
    <div className={cn('relative aspect-h-1 aspect-w-1 w-full overflow-hidden', className)}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />
    </div>
  );
};

type Props = {
  src: string;
  alt: string;
  className?: string;
};
