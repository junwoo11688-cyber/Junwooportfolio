import { Link, useNavigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePortfolioContent } from '../hooks/usePortfolioContent';
import { getVideoEmbed } from '../utils/video';

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { projects } = usePortfolioContent();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  usePageMeta(
    project
      ? `${project.title} | 현준우 영상 포트폴리오`
      : '프로젝트를 찾을 수 없습니다 | 현준우 영상 포트폴리오',
    project
      ? project.summary
      : '요청하신 프로젝트 페이지를 찾을 수 없습니다.',
  );

  if (!project) {
    return (
      <section className="section-pad detail-not-found">
        <p className="eyebrow">PROJECT NOT FOUND</p>
        <h1>프로젝트를 찾을 수 없습니다.</h1>
        <Link className="button button-primary" to="/#work">
          WORK로 돌아가기
        </Link>
      </section>
    );
  }

  const previousProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const embed = getVideoEmbed(project.videoUrl);
  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate('/#work');
  };

  return (
    <article className="project-detail">
      <header className="detail-hero section-pad">
        <div className="detail-actions">
          <button className="text-button" type="button" onClick={goBack}>
            뒤로 가기
          </button>
          <Link className="text-link" to="/#work">
            프로젝트 목록
          </Link>
        </div>
        <div className="detail-title-grid">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
          </div>
          <dl className="detail-meta">
            <div>
              <dt>Client</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>{project.format}</dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="section-pad detail-media" aria-label="프로젝트 결과물 영상">
        <div className="video-frame">
          {embed ? (
            <iframe
              src={embed.src}
              title={`${project.title} ${embed.provider} 영상`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="video-placeholder">
              <span>RESULT VIDEO</span>
              <strong>{project.title}</strong>
              <small>공개 영상 링크가 연결되면 이 영역에 결과물이 표시됩니다.</small>
            </div>
          )}
        </div>
      </section>

      <section className="section-pad detail-summary" aria-label="프로젝트 요약">
        <article>
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </article>
        <article>
          <h2>Contribution</h2>
          <p>{project.contribution}</p>
        </article>
        <article>
          <h2>Tools</h2>
          <p>{project.technologies.join(' · ')}</p>
        </article>
      </section>

      <nav className="section-pad project-pagination" aria-label="프로젝트 이동">
        <Link to={`/projects/${previousProject.slug}`}>
          <span>PREVIOUS PROJECT</span>
          {previousProject.title}
        </Link>
        <Link to={`/projects/${nextProject.slug}`}>
          <span>NEXT PROJECT</span>
          {nextProject.title}
        </Link>
      </nav>
    </article>
  );
}
