import Carousel from '../components/ui/Carousel';
import { FaHtml5, FaJs, FaReact, FaCss3Alt } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';

function Test() {
  const iconSize = 150;
  const iconColor = 'text-black dark:text-white';
  const imgs = [
    {
      name: 'HTML',
      icon: <FaHtml5 size={iconSize} className={iconColor} />,
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt size={iconSize} className={iconColor} />,
    },
    {
      name: 'JavaScript',
      icon: <FaJs size={iconSize} className={iconColor} />,
    },
    {
      name: 'TypeScript',
      icon: <BiLogoTypescript size={iconSize} className={iconColor} />,
    },
    {
      name: 'React',
      icon: <FaReact size={iconSize} className={iconColor} />,
    },
    {
      name: 'Next.js',
      icon: <RiNextjsFill size={iconSize} className={iconColor} />,
    },
  ];
  return (
    <div className="flex justify-center items-center h-screen">
      <Carousel images={imgs} />
    </div>
  );
}

export default Test;
