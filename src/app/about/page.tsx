'use client';
import About from '../components/about/About';

export default function test() {
  return (
    <div className="min-h-[calc(100vh-60px)] px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 flex justify-center items-center md:justify-start md:items-start">
      <About />
    </div>
  );
}
