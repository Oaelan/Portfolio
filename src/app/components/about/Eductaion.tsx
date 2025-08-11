import { Title } from '..';

export default function Eductaion() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-15">
      <div className="w-[300px] md:w-[600px] lg:w-[800px]">
        <Title title="Education" />
        <div>
          <p>2024.03 ~ 2024.08</p>
          <p>IoT기반 스마트 헬스케어 웹서비스 개발 과정 수료</p>
        </div>
        <div>
          <p>2025.04 ~ 2025.06</p>
          <p>심화_프론트엔드 엔지니어 부트캠프</p>
        </div>
      </div>
    </div>
  );
}
