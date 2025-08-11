import { Title } from '..';

export default function Certificate() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-15">
      <div className="w-[300px] md:w-[600px] lg:w-[800px]">
        <Title title="Certificate" />
        <p>컴퓨터활용능력 1급, 2급</p>
        <p>정보처리산업기사</p>
        <p>SQLD</p>
      </div>
    </div>
  );
}
