import { type FC } from 'react';

import { cn } from '@/lib/shared/utils';

export const ProductImage: FC<Props> = ({ src, alt, className }) => {
  return (
    <div className={cn('relative aspect-h-1 aspect-w-1 w-full overflow-hidden', className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      ) : (
        <div className="h-full w-full bg-gray-200" />
      )}
    </div>
  );
};

type Props = {
  /**
   * If `src` is not provided, a placeholder will be rendered.
   */
  src?: string;
  alt: string;
  className?: string;
};
