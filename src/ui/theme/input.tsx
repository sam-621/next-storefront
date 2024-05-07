import { type FC, type InputHTMLAttributes } from 'react';

import { cn } from '../utils';

export const Input: FC<Props> = ({ label, className, ...rest }) => {
  return (
    <div className="w-full">
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-700">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          {...rest}
          className={cn(
            className,
            'block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          )}
        />
      </div>
    </div>
  );
};

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};
