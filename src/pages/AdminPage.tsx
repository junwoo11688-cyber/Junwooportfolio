import { FormEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  projectFilters,
  type Project,
  type ProjectCategory,
  type ProjectVisualTone,
} from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  defaultPortfolioContent,
  loadPortfolioContent,
  resetPortfolioContent,
  savePortfolioContent,
  type PortfolioContent,
} from '../utils/contentStore';

const PASSWORD_HASH =
  'd2b4562e01c5bbf69e4d0b6be1850061064b9c6db800e165f88bf0242fe3a886';
const SESSION_KEY = 'portfolio-admin-unlocked';
const visualToneOptions: ProjectVisualTone[] = [
  'interview',
  'medical',
  'brand',
  'city',
  'youtube',
  'motion',
];

const categoryOptions = projectFilters.filter(
  (filter): filter is ProjectCategory => filter !== 'ALL',
);

async function hashPassword(value: string) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function listToText(items: string[]) {
  return items.join('\n');
}

function textToList(value: string) {
  return value
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);
}

function createProject(): Project {
  const id = Date.now();

  return {
    id,
    slug: `new-project-${id}`,
    title: '새 프로젝트',
    client: '클라이언트명',
    year: '2026',
    category: '프로젝트 종류',
    categories: ['PUBLIC'],
    role: '담당 역할',
    summary: '프로젝트 한 줄 설명',
    format: '영상 포맷',
    deliverable: '납품물',
    contribution: '핵심 기여도',
    outcome: '결과 또는 성과',
    technologies: ['기획', '편집'],
    thumbnail: '',
    visualTone: 'interview',
    overview: '프로젝트 개요',
    purpose: '제작 목적',
    direction: '기획 방향',
    tasks: ['주요 작업 내용'],
    images: [],
  };
}

export default function AdminPage() {
  const [isUnlocked, setIsUnlocked] = useState(
    () => window.sessionStorage.getItem(SESSION_KEY) === '1',
  );
  const [password, setPassword] = useState('');
  const [content, setContent] = useState<PortfolioContent>(() =>
    loadPortfolioContent(),
  );
  const [jsonDraft, setJsonDraft] = useState('');
  const [status, setStatus] = useState('');

  usePageMeta(
    '관리자 페이지 | 현준우 영상 포트폴리오',
    '포트폴리오 내용을 수정하는 관리자 페이지입니다.',
  );

  const exportedJson = useMemo(
    () => JSON.stringify(content, null, 2),
    [content],
  );

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hashed = await hashPassword(password);

    if (hashed !== PASSWORD_HASH) {
      setStatus('비밀번호가 맞지 않습니다.');
      return;
    }

    window.sessionStorage.setItem(SESSION_KEY, '1');
    setIsUnlocked(true);
    setPassword('');
    setStatus('관리자 모드가 열렸습니다.');
  };

  const updateProject = <Key extends keyof Project>(
    index: number,
    key: Key,
    value: Project[Key],
  ) => {
    setContent((current) => ({
      ...current,
      projects: current.projects.map((project, projectIndex) =>
        projectIndex === index ? { ...project, [key]: value } : project,
      ),
    }));
  };

  const toggleCategory = (index: number, category: ProjectCategory) => {
    const project = content.projects[index];
    const categories = project.categories.includes(category)
      ? project.categories.filter((item) => item !== category)
      : [...project.categories, category];

    updateProject(index, 'categories', categories.length > 0 ? categories : [category]);
  };

  const addProject = () => {
    setContent((current) => ({
      ...current,
      projects: [...current.projects, createProject()],
    }));
  };

  const removeProject = (index: number) => {
    setContent((current) => ({
      ...current,
      projects: current.projects.filter((_, projectIndex) => projectIndex !== index),
    }));
  };

  const saveContent = () => {
    savePortfolioContent(content);
    setStatus('저장했습니다. 사이트 화면에 바로 반영됩니다.');
  };

  const resetContent = () => {
    resetPortfolioContent();
    setContent(defaultPortfolioContent);
    setJsonDraft('');
    setStatus('기본 내용으로 되돌렸습니다.');
  };

  const importJson = () => {
    try {
      const parsed = JSON.parse(jsonDraft) as PortfolioContent;
      if (!Array.isArray(parsed.projects) || !parsed.contactLinks) {
        setStatus('JSON 구조를 확인해주세요.');
        return;
      }

      setContent(parsed);
      setStatus('JSON을 불러왔습니다. 저장 버튼을 눌러 반영하세요.');
    } catch {
      setStatus('JSON 형식이 올바르지 않습니다.');
    }
  };

  if (!isUnlocked) {
    return (
      <section className="section-pad admin-page">
        <div className="admin-login">
          <p className="eyebrow">ADMIN</p>
          <h1>관리자 확인</h1>
          <form onSubmit={handleLogin}>
            <label>
              비밀번호
              <input
                type="password"
                value={password}
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <button className="button button-primary" type="submit">
              ENTER
            </button>
          </form>
          {status ? <p className="admin-status">{status}</p> : null}
          <Link className="text-link" to="/">
            메인으로 돌아가기
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-pad admin-page">
      <div className="admin-heading">
        <div>
          <p className="eyebrow">ADMIN</p>
          <h1>포트폴리오 내용 수정</h1>
          <p>
            저장 내용은 현재 브라우저에 보관됩니다. 배포 파일에 반영하려면
            JSON을 내보내 데이터 파일로 옮기면 됩니다.
          </p>
        </div>
        <div className="admin-actions">
          <button className="button button-primary" type="button" onClick={saveContent}>
            SAVE
          </button>
          <button className="button button-secondary" type="button" onClick={addProject}>
            ADD PROJECT
          </button>
          <button className="text-button" type="button" onClick={resetContent}>
            RESET
          </button>
          <Link className="text-link" to="/">
            VIEW SITE
          </Link>
        </div>
      </div>

      {status ? <p className="admin-status">{status}</p> : null}

      <div className="admin-section">
        <h2>Contact</h2>
        <div className="admin-grid">
          <label>
            Email
            <input
              value={content.contactLinks.email}
              onChange={(event) =>
                setContent((current) => ({
                  ...current,
                  contactLinks: {
                    ...current.contactLinks,
                    email: event.target.value,
                  },
                }))
              }
            />
          </label>
          <label>
            Instagram
            <input
              value={content.contactLinks.instagram}
              onChange={(event) =>
                setContent((current) => ({
                  ...current,
                  contactLinks: {
                    ...current.contactLinks,
                    instagram: event.target.value,
                  },
                }))
              }
            />
          </label>
          <label>
            YouTube
            <input
              value={content.contactLinks.youtube}
              onChange={(event) =>
                setContent((current) => ({
                  ...current,
                  contactLinks: {
                    ...current.contactLinks,
                    youtube: event.target.value,
                  },
                }))
              }
            />
          </label>
          <label>
            Vimeo
            <input
              value={content.contactLinks.vimeo}
              onChange={(event) =>
                setContent((current) => ({
                  ...current,
                  contactLinks: {
                    ...current.contactLinks,
                    vimeo: event.target.value,
                  },
                }))
              }
            />
          </label>
        </div>
      </div>

      <div className="admin-section">
        <div className="admin-section-title">
          <h2>Projects</h2>
          <button className="text-button" type="button" onClick={addProject}>
            ADD PROJECT
          </button>
        </div>

        <div className="admin-project-list">
          {content.projects.map((project, index) => (
            <details className="admin-project" key={project.id} open={index === 0}>
              <summary>
                <span>{project.title}</span>
                <small>{project.client}</small>
              </summary>

              <div className="admin-grid">
                <label>
                  Slug
                  <input
                    value={project.slug}
                    onChange={(event) =>
                      updateProject(index, 'slug', event.target.value)
                    }
                  />
                </label>
                <label>
                  Title
                  <input
                    value={project.title}
                    onChange={(event) =>
                      updateProject(index, 'title', event.target.value)
                    }
                  />
                </label>
                <label>
                  Client
                  <input
                    value={project.client}
                    onChange={(event) =>
                      updateProject(index, 'client', event.target.value)
                    }
                  />
                </label>
                <label>
                  Year
                  <input
                    value={project.year}
                    onChange={(event) =>
                      updateProject(index, 'year', event.target.value)
                    }
                  />
                </label>
                <label>
                  Category label
                  <input
                    value={project.category}
                    onChange={(event) =>
                      updateProject(index, 'category', event.target.value)
                    }
                  />
                </label>
                <label>
                  Visual tone
                  <select
                    value={project.visualTone}
                    onChange={(event) =>
                      updateProject(
                        index,
                        'visualTone',
                        event.target.value as ProjectVisualTone,
                      )
                    }
                  >
                    {visualToneOptions.map((tone) => (
                      <option key={tone} value={tone}>
                        {tone}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Thumbnail path
                  <input
                    value={project.thumbnail}
                    onChange={(event) =>
                      updateProject(index, 'thumbnail', event.target.value)
                    }
                    placeholder="/images/projects/example.jpg"
                  />
                </label>
                <label>
                  Video URL
                  <input
                    value={project.videoUrl ?? ''}
                    onChange={(event) =>
                      updateProject(index, 'videoUrl', event.target.value)
                    }
                    placeholder="YouTube 또는 Vimeo URL"
                  />
                </label>
              </div>

              <div className="admin-checkboxes">
                {categoryOptions.map((category) => (
                  <label key={category}>
                    <input
                      type="checkbox"
                      checked={project.categories.includes(category)}
                      onChange={() => toggleCategory(index, category)}
                    />
                    {category}
                  </label>
                ))}
              </div>

              <div className="admin-grid">
                <label>
                  Role
                  <textarea
                    rows={2}
                    value={project.role}
                    onChange={(event) =>
                      updateProject(index, 'role', event.target.value)
                    }
                  />
                </label>
                <label>
                  Summary
                  <textarea
                    rows={2}
                    value={project.summary}
                    onChange={(event) =>
                      updateProject(index, 'summary', event.target.value)
                    }
                  />
                </label>
                <label>
                  Format
                  <textarea
                    rows={2}
                    value={project.format}
                    onChange={(event) =>
                      updateProject(index, 'format', event.target.value)
                    }
                  />
                </label>
                <label>
                  Deliverable
                  <textarea
                    rows={2}
                    value={project.deliverable}
                    onChange={(event) =>
                      updateProject(index, 'deliverable', event.target.value)
                    }
                  />
                </label>
                <label>
                  Contribution
                  <textarea
                    rows={2}
                    value={project.contribution}
                    onChange={(event) =>
                      updateProject(index, 'contribution', event.target.value)
                    }
                  />
                </label>
                <label>
                  Outcome
                  <textarea
                    rows={2}
                    value={project.outcome}
                    onChange={(event) =>
                      updateProject(index, 'outcome', event.target.value)
                    }
                  />
                </label>
                <label>
                  Overview
                  <textarea
                    rows={3}
                    value={project.overview}
                    onChange={(event) =>
                      updateProject(index, 'overview', event.target.value)
                    }
                  />
                </label>
                <label>
                  Purpose
                  <textarea
                    rows={3}
                    value={project.purpose}
                    onChange={(event) =>
                      updateProject(index, 'purpose', event.target.value)
                    }
                  />
                </label>
                <label>
                  Direction
                  <textarea
                    rows={3}
                    value={project.direction}
                    onChange={(event) =>
                      updateProject(index, 'direction', event.target.value)
                    }
                  />
                </label>
                <label>
                  Technologies
                  <textarea
                    rows={4}
                    value={listToText(project.technologies)}
                    onChange={(event) =>
                      updateProject(
                        index,
                        'technologies',
                        textToList(event.target.value),
                      )
                    }
                  />
                </label>
                <label>
                  Tasks
                  <textarea
                    rows={4}
                    value={listToText(project.tasks)}
                    onChange={(event) =>
                      updateProject(index, 'tasks', textToList(event.target.value))
                    }
                  />
                </label>
                <label>
                  Image paths
                  <textarea
                    rows={4}
                    value={listToText(project.images)}
                    onChange={(event) =>
                      updateProject(index, 'images', textToList(event.target.value))
                    }
                  />
                </label>
              </div>

              <button
                className="text-button danger-text"
                type="button"
                onClick={() => removeProject(index)}
              >
                DELETE PROJECT
              </button>
            </details>
          ))}
        </div>
      </div>

      <div className="admin-section">
        <h2>JSON</h2>
        <div className="admin-json-actions">
          <button
            className="button button-secondary"
            type="button"
            onClick={() => setJsonDraft(exportedJson)}
          >
            EXPORT JSON
          </button>
          <button className="button button-secondary" type="button" onClick={importJson}>
            IMPORT JSON
          </button>
        </div>
        <textarea
          className="json-editor"
          rows={12}
          value={jsonDraft}
          onChange={(event) => setJsonDraft(event.target.value)}
          placeholder="내보내기 버튼을 누르거나 JSON을 붙여넣으세요."
        />
      </div>
    </section>
  );
}
