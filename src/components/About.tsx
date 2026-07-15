const profileModules = import.meta.glob('../assets/profile.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const profileImage = Object.values(profileModules)[0];

const tools = [
  'Adobe Premiere Pro',
  'Adobe After Effects',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Sony Camera System',
  'AI Image & Video Tools',
  'Storyboarding',
  'Interview Directing',
  'Content Planning',
];

export default function About() {
  return (
    <section
      className="section-pad about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="section-heading">
        <h2 className="section-title" id="about-title">
          ABOUT ME
        </h2>
      </div>

      <div className="about-layout">
        <div className="profile-frame">
          {profileImage ? (
            <img src={profileImage} alt="현준우 프로필 사진" />
          ) : (
            <div className="profile-placeholder" aria-label="프로필 이미지 플레이스홀더">
              <span>HYEON JUNWOO</span>
              <strong>VIDEO DIRECTOR</strong>
            </div>
          )}
        </div>

        <div className="about-copy">
          <dl className="profile-list">
            <div>
              <dt>Name</dt>
              <dd>현준우</dd>
            </div>
            <div>
              <dt>Position</dt>
              <dd>Video Director / Producer</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>영상 편집 및 콘텐츠 제작 경력 4년 이상</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Seoul, Korea</dd>
            </div>
            <div className="profile-tools-row">
              <dt>Tools &amp; Skills</dt>
              <dd>
                <ul className="profile-tools" aria-label="사용 프로그램 및 기술">
                  {tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
