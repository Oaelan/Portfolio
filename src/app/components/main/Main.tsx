'use client';
import Typing from '../ui/Typing';
import Button from '../ui/Button';
import { useEffect, useState } from 'react';

function Main() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center md:justify-start md:items-start border-2 py-5 md:p-10 dark:border-emerald-500 border-light-dark">
      <Typing
        texts={['Front-end Developer\n', 'O AE LAN']}
        speed={100}
        delay={100}
        loop={false}
        className="dark:text-emerald-500 mb-10 h-20 md:w-120 w-50 text-center md:text-left text-2xl md:text-3xl"
      />
      <Button href="/about" className={`${isShow ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        About
      </Button>
    </div>
  );
}

export default Main;
