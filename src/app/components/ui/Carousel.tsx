'use client';

import { useState, useEffect, useMemo, useCallback, HTMLAttributes } from 'react';
import Indicator from './Indicator';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  images: {
    name: string;
    icon: React.ReactElement;
  }[];
}
const carouselClassName = cva(
  `carousel-container py-2
      dark:bg-linear-to-r/srgb dark:from-black dark:to-light-black dark:outline-gray      
      bg-linear-to-r/srgb from-light-gray to-white outline outline-black
      w-[400px] md:w-[600px] lg:w-[800px]
      flex flex-col justify-center items-center`
);
function Carousel({ images, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState('transform 0.5s ease-in-out');
  // 인디케이터에서 사용할 이미지 배열의 갯수와 인덱스
  const actualImagesArray = images.length;
  const actualCurrentIndex = currentIndex >= actualImagesArray ? 0 : currentIndex;
  const imgArray = [...images, { ...images[0], name: 'HTML2' }];
  const resetIndexAndTransition = useCallback(() => {
    setTimeout(() => {
      setCurrentIndex(0);
      setTransition('none');
    }, 10);
  }, []);
  const slideTimeDelay = useMemo(() => {
    return transition === 'none' ? 10 : 2000;
  }, [transition]);
  useEffect(() => {
    const slideTime = setInterval(() => {
      if (currentIndex === imgArray.length - 1) {
        resetIndexAndTransition();
      } else {
        setCurrentIndex((prev) => (prev + 1) % imgArray.length);
        setTransition('transform 0.5s ease-in-out');
      }
    }, slideTimeDelay);
    return () => clearInterval(slideTime);
  }, [imgArray.length, currentIndex, slideTimeDelay, resetIndexAndTransition]);

  const getCarouselStyle = () => {
    return {
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: `${transition}`,
    };
  };
  return (
    <div className={cn(carouselClassName({ className }))}>
      <div className="w-[150px] h-[150px] flex overflow-hidden">
        <div className="w-full h-full flex" style={getCarouselStyle()}>
          {imgArray.map((img) => (
            <div key={img.name}>{img.icon}</div>
          ))}
        </div>
      </div>
      <Indicator currentIndex={actualCurrentIndex} totalImages={actualImagesArray} setCurrentIndex={setCurrentIndex} />
    </div>
  );
}

export default Carousel;
