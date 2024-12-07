import { type FC } from 'react';

import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/shared/utils';

const buttonVariants = cva(
  'flex justify-center items-center gap-2 transition-colors px-8 disabled:opacity-60 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'text-white bg-indigo-600 hover:bg-indigo-700 disabled:hover:bg-indigo-600',
        secondary: 'text-gray-900  rounded bg-gray-100 hover:bg-gray-200 disabled:hover:bg-gray-100'
      },
      size: {
        md: 'py-2 text-sm rounded',
        lg: 'py-3 rounded-md'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
);

type Props = {
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button: FC<Props> = ({
  className,
  variant,
  size,
  isLoading,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      aria-disabled={isLoading ?? disabled}
      disabled={isLoading ?? disabled}
      {...props}
    >
      {isLoading && <ArrowPathIcon className="w-5 h-5 animate-spin" />}
      {children}
    </button>
  );
};
Button.displayName = 'Button';

export { Button, buttonVariants };
