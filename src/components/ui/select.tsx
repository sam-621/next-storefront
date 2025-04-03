import { type FC, forwardRef, type SelectHTMLAttributes } from 'react';

import { cn } from '@/lib/shared/utils';

export const Select: FC<Props> = forwardRef<HTMLSelectElement, Props>(
  ({ label, items, error, className, placeholder, ...rest }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={label} className="block text-sm font-medium leading-6 text-gray-700">
          {label}
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <select
            id={label}
            ref={ref}
            className={cn(
              'block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
              className
            )}
            {...rest}
          >
            {items.map(item => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          {error && <span className={cn('text-red-500 text-xs')}>{error}</span>}
        </div>
      </div>
    );
  }
);

Select.displayName = 'Select';

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  items: { value: string; label: string }[];
  error?: string;
  placeholder?: string;
};
