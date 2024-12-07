import { forwardRef, type InputHTMLAttributes } from 'react';

import { cn } from '@/lib/shared/utils';

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, className, ...rest }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={label} className="block text-sm font-medium leading-6 text-gray-700">
          {label}
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            ref={ref}
            id={label}
            className={cn(
              className,
              'block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
              error && 'ring-red-500'
            )}
            {...rest}
          />
        </div>
        {error && <span className={cn('text-red-500 text-xs')}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};
