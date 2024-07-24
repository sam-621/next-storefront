import { type FC, forwardRef, type SelectHTMLAttributes } from 'react';

import { cn } from '../utils';

export const Select: FC<Props> = forwardRef<HTMLSelectElement, Props>(
  ({ label, items, error, className, ...rest }, ref) => {
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
            {items.map(value => (
              <option key={value} value={value}>
                {value}
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
  items: string[];
  error?: string;
};
