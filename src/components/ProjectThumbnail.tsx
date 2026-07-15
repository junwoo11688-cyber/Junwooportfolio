import { useState } from 'react';
import type { Project } from '../data/projects';

interface ProjectThumbnailProps {
  project: Project;
  className?: string;
}

export default function ProjectThumbnail({
  project,
  className = '',
}: ProjectThumbnailProps) {
  const [hasImage, setHasImage] = useState(Boolean(project.thumbnail));

  return (
    <div className={`project-thumbnail visual-${project.visualTone} ${className}`}>
      {hasImage && project.thumbnail ? (
        <img
          src={project.thumbnail}
          alt={`${project.title} 프로젝트 썸네일`}
          loading="lazy"
          onError={() => setHasImage(false)}
        />
      ) : (
        <div
          className="thumbnail-placeholder"
          aria-label={`${project.title} 썸네일 플레이스홀더`}
        >
          <div className="thumbnail-scene" aria-hidden="true">
            <span className="scene-block scene-main" />
            <span className="scene-block scene-side" />
            <span className="scene-line scene-line-a" />
            <span className="scene-line scene-line-b" />
            <span className="scene-dot scene-dot-a" />
            <span className="scene-dot scene-dot-b" />
          </div>
          <div className="thumbnail-copy">
            <span>{project.category}</span>
            <strong>{project.title}</strong>
            <small>{project.format}</small>
          </div>
        </div>
      )}
    </div>
  );
}
