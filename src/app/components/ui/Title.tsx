import { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { cva } from 'class-variance-authority';

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const titleClassName = cva('text-[20px] text-black dark:text-white font-bold mb-2 inline-block py-1');
function Title({ title, className }: TitleProps) {
  return (
    <div className={cn(titleClassName({ className }))}>
      <h3 className="text-shadow-lg text-shadow-gray-300 dark:text-shadow-gray-700">{title}</h3>
    </div>
  );
}

export default Title;
