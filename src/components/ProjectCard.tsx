import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import ProjectThumbnail from './ProjectThumbnail';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link to={`/projects/${project.slug}`} aria-label={`${project.title} 상세보기`}>
        <div className="project-media-wrap">
          <ProjectThumbnail project={project} />
          <span className="view-label">VIEW PROJECT</span>
        </div>
        <div className="project-card-body">
          <div className="project-meta">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-type">{project.category}</p>
          <p className="project-role">{project.role}</p>
          <p>{project.summary}</p>
          <dl className="project-facts">
            <div>
              <dt>Format</dt>
              <dd>{project.format}</dd>
            </div>
            <div>
              <dt>Contribution</dt>
              <dd>{project.contribution}</dd>
            </div>
          </dl>
          <ul className="tag-list" aria-label="사용 기술">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <span className="project-link-text">프로젝트 상세보기</span>
        </div>
      </Link>
    </article>
  );
}
