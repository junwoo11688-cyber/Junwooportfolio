const services = [
  ['콘텐츠 기획', '프로젝트 목적과 시청자를 기준으로 영상의 구조를 설계합니다.'],
  ['인터뷰 질문 구성', '답변에서 핵심 메시지가 자연스럽게 나오도록 질문 흐름을 만듭니다.'],
  ['촬영 디렉팅', '현장 상황에 맞춰 장면, 동선, 인터뷰 톤을 조율합니다.'],
  ['영상 편집', '정보와 감정의 흐름이 살아나도록 컷과 리듬을 정리합니다.'],
  ['모션그래픽', '타이포그래피, 인포그래픽, 타이틀 모션으로 이해를 돕습니다.'],
  ['색보정', '프로젝트 성격에 맞는 톤과 일관된 화면 분위기를 만듭니다.'],
  ['사운드 디자인', '음악, 효과음, 인터뷰 음성을 정리해 전달력을 높입니다.'],
  ['숏폼 콘텐츠 재구성', '본편의 핵심 장면을 플랫폼별 짧은 콘텐츠로 재편집합니다.'],
  ['AI 영상 제작', 'AI 이미지와 영상 도구를 활용해 콘셉트 표현을 확장합니다.'],
  ['프로젝트 일정 및 제작 관리', '촬영부터 납품까지 필요한 단계와 일정을 관리합니다.'],
];

export default function Expertise() {
  return (
    <section className="section-pad expertise-section" aria-labelledby="do-title" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">WHAT I DO</p>
        <h2 className="sr-only" id="do-title">
          WHAT I DO
        </h2>
      </div>

      <div className="service-list">
        {services.map(([title, description]) => (
          <article className="service-item" key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
