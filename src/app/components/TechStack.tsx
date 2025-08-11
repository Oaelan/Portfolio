import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';
import { Title, Carousel } from './';

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
function TechStack() {
  return (
    <div className={`transition-opacity duration-1000 flex flex-col justify-center items-center gap-15`}>
      <div>
        <Title title="Tech Stack" />
        <Carousel images={imgs} />
      </div>
    </div>
  );
}

export default TechStack;
