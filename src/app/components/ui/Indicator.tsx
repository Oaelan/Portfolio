import { ButtonHTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

interface IndicatorProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  currentIndex: number;
  totalImages: number;
  setCurrentIndex: (index: number) => void;
}

function Indicator({ currentIndex, totalImages, setCurrentIndex, ...props }: IndicatorProps) {
  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };
  const indicatorClassName = cva(
    `indicator flex rounded-full
    cursor-pointer transition-all duration-200 ease-linear`,
    {
      variants: {
        size: {
          default: 'w-2 h-2',
          active: 'w-6 h-2',
        },
        color: {
          default: 'bg-white border-1 border-black dark:bg-black dark:border-white',
          active: 'bg-black dark:bg-white dark:border-black dark:border-1',
        },
      },
    }
  );
  return (
    <div className="indicator flex justify-center gap-2 w-[150px]">
      {Array.from({ length: totalImages }, (_, index) => (
        <button
          key={index}
          className={cn(
            indicatorClassName({
              size: currentIndex === index ? 'active' : 'default',
              color: currentIndex === index ? 'active' : 'default',
            })
          )}
          onClick={() => handleClick(index)}
        ></button>
      ))}
    </div>
  );
}

export default Indicator;
