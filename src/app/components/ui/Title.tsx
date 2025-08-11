import { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { cva } from 'class-variance-authority';

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  size?: 'sm' | 'md' | 'lg';
}

const titleClassName = cva('text-black dark:text-emerald-300 font-bold mb-2 inline-block py-1', {
  variants: {
    size: {
      sm: 'text-lg md:text-xl',
      md: 'text-xl md:text-2xl',
      lg: 'text-2xl md:text-4xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

function Title({ title, className, size }: TitleProps) {
  return (
    <div className={cn(titleClassName({ className, size }))}>
      <h3 className="text-shadow-lg text-shadow-gray-300 dark:text-shadow-gray-700">{title}</h3>
    </div>
  );
}

export default Title;
