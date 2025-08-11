import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  shape?: 'circle' | 'square';
  href?: string; // 라우팅을 위한 href 추가
}

const buttonClassName = cva(
  `w-fit cursor-pointer bg-emerald-500 text-white py-3 px-10
  rounded-full text-2xl 
  hover:bg-emerald-600 transition-colors`,
  {
    variants: {
      shape: {
        circle: 'rounded-full',
        square: 'rounded-none',
      },
    },
    defaultVariants: {
      shape: 'circle',
    },
  }
);

function Button({ children, className, shape, href, ...props }: ButtonProps) {
  const buttonElement = (
    <button className={cn(buttonClassName({ className, shape }))} {...props}>
      {children}
    </button>
  );

  // href가 있으면 Link로 감싸기
  if (href) {
    return <Link href={href}>{buttonElement}</Link>;
  }

  return buttonElement;
}

export default Button;
