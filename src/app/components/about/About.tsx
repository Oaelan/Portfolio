import { useInView } from 'react-intersection-observer';
import { Eductaion, Introduce, TechStack } from '..';
import Line from '../ui/Line';
import Certificate from './Certificate';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 flex flex-col gap-6 md:gap-8 lg:gap-10 p-4 md:p-6 lg:p-10 w-full justify-center items-center`}
    >
      <Introduce />
      <Line />
      <Eductaion />
      <Line />
      <TechStack />
      <Line />
      <Certificate />
    </div>
  );
}
