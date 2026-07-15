const processSteps = [
  ['DISCOVER', '프로젝트의 목적과 핵심 메시지를 정리합니다.'],
  ['PLAN', '콘텐츠 구성, 인터뷰 질문, 촬영 장면을 설계합니다.'],
  ['PRODUCE', '촬영 현장에서 필요한 장면과 이야기를 확보합니다.'],
  ['EDIT', '영상의 흐름을 만들고 그래픽과 사운드를 완성합니다.'],
  ['DELIVER', '송출 매체와 목적에 맞게 최종 결과물을 제작합니다.'],
];

export default function Process() {
  return (
    <section className="section-pad process-section" aria-labelledby="process-title" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">PROCESS</p>
        <h2 className="sr-only" id="process-title">
          PROCESS
        </h2>
      </div>

      <ol className="process-list">
        {processSteps.map(([title, description], index) => (
          <li key={title}>
            <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
