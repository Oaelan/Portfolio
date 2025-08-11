import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';
import { useInView } from 'react-intersection-observer';
import Title from './ui/Title';
import Carousel from './ui/Carousel';

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
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 h-screen flex flex-col justify-center items-center gap-15`}
    >
      <div>
        <Title title="Tech Stack" />
        <Carousel images={imgs} />
      </div>
      <div className="flex flex-col justify-center items-center p-5 py-10 border-1 rounded-full border-red-500">
        <p>HTML, CSS, JavaScript, TypeScript, React, Next.js과 같은 기술들을 사용합니다.</p>
        <p>프로젝트를 진행함에 따라 필요한 기술스택이 있다면 이부분은 앞으로 계속해서 추가될 예정입니다!</p>
      </div>
    </div>
  );
}

export default TechStack;
