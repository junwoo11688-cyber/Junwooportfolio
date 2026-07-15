import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import ProjectThumbnail from './ProjectThumbnail';

interface SelectedWorksProps {
  projects: Project[];
}

export default function SelectedWorks({ projects }: SelectedWorksProps) {
  return (
    <section
      className="section-pad works-section"
      id="work"
      aria-labelledby="works-title"
    >
      <div className="section-heading">
        <h2 className="section-title" id="works-title">
          VIDEO LIST
        </h2>
      </div>

      <div className="video-list" aria-label="영상 프로젝트 목록">
        {projects.map((project, index) => (
          <Link
            className="video-item"
            key={project.slug}
            to={`/projects/${project.slug}`}
            aria-label={`${project.title} 상세보기`}
          >
            <ProjectThumbnail project={project} className="video-item-media" />
            <div className="video-item-copy">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{project.title}</h3>
              <p>{project.client} · {project.year}</p>
              <small>{project.category}</small>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
