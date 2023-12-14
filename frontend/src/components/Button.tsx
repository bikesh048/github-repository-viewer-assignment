import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(['hover:bg-secondary-hover', 'transition-colors'], {
  variants: {
    variant: {
      default: ['bg-secondary', 'hover:bg-secondary-hover'],
      ghost: ['hover:bg-gray-100'],
    },
    size: {
      default: ['rounded', 'p-2', 'text-sm'],
      icon: [
        'rounded-full',
        'w-10',
        'h-10',
        'felx',
        'items-center',
        'justify-center',
        'p-2.5',
      ],
      text: ['text-[13px]', 'line-height', 'hover:underline', 'cursor-pointer'],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}
