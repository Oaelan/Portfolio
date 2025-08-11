import { Title } from '..';

export default function Introduce() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-15 ">
      <div className="w-[300px] md:w-[600px] lg:w-[800px]">
        <Title title="Introduce" />
        <p>
          안녕하세요! 다양한 경험을 통해 성장해나가고 싶은 주니어 개발자입니다. 동료들과 함께하는 개발이 더욱 즐거워질
          수 있도록 밝은 에너지와 협력적인 분위기를 만들어 함께 일하고 싶은 개발자가 되고 싶습니다! 어떤 문제든 끝까지
          책임지고 해결해나가는, 믿을 수 있는 개발자가 되겠습니다.
        </p>
      </div>
    </div>
  );
}
