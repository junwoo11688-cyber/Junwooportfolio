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

export default function Skills() {
  return (
    <section
      className="section-pad skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <h2 className="section-title" id="skills-title">
          TOOLS &amp; SKILLS
        </h2>
      </div>

      <ul className="skill-cloud" aria-label="사용 프로그램 및 기술">
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </section>
  );
}
