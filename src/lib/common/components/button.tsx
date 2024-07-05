import { type FC } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/common/utils';

const buttonVariants = cva(
  'flex justify-center items-center transition-colors px-8 disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-white bg-indigo-600 hover:bg-indigo-700',
        secondary: 'text-gray-900  rounded bg-gray-100 hover:bg-gray-200'
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

const Button: FC<Props> = ({ className, variant, size, isLoading, children, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      aria-disabled={isLoading}
      disabled={isLoading}
      {...props}
    >
      {children}
    </button>
  );
};
Button.displayName = 'Button';

export { Button, buttonVariants };
