export default function Hero() {
  return (
    <section className="hero section-pad" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">VIDEO DIRECTOR / PRODUCER</p>
        <h1 className="hero-name" id="hero-title">
          <span>HYEON</span>
          <span>JUNWOO</span>
        </h1>
        <p className="hero-scope">
          PUBLIC FILM / INTERVIEW / BRAND CONTENT / MOTION GRAPHICS / AI CONTENT
        </p>
        <p className="hero-description">
          공공기관, 기업, 브랜드 콘텐츠의 메시지를 기획부터 편집까지 정리합니다.
        </p>
        <div className="hero-actions" aria-label="주요 이동">
          <a className="button button-primary" href="#work">
            VIEW PROJECTS
          </a>
          <a className="button button-secondary" href="#contact">
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
}
