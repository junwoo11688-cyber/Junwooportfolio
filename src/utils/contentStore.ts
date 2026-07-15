import { contactLinks, type ContactLinks } from '../data/contact';
import { projects, type Project } from '../data/projects';

const STORAGE_KEY = 'hyeon-junwoo-portfolio-content-v1';
export const CONTENT_UPDATED_EVENT = 'portfolio-content-updated';

export interface PortfolioContent {
  projects: Project[];
  contactLinks: ContactLinks;
}

export const defaultPortfolioContent: PortfolioContent = {
  projects,
  contactLinks,
};

function isProjectArray(value: unknown): value is Project[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'object');
}

function isContactLinks(value: unknown): value is ContactLinks {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const record = value as Record<string, unknown>;
  return (
    typeof record.email === 'string' &&
    typeof record.instagram === 'string' &&
    typeof record.youtube === 'string' &&
    typeof record.vimeo === 'string'
  );
}

export function loadPortfolioContent(): PortfolioContent {
  if (typeof window === 'undefined') {
    return defaultPortfolioContent;
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return defaultPortfolioContent;
  }

  try {
    const parsed = JSON.parse(saved) as Partial<PortfolioContent>;
    return {
      projects: isProjectArray(parsed.projects)
        ? parsed.projects
        : defaultPortfolioContent.projects,
      contactLinks: isContactLinks(parsed.contactLinks)
        ? parsed.contactLinks
        : defaultPortfolioContent.contactLinks,
    };
  } catch {
    return defaultPortfolioContent;
  }
}

export function savePortfolioContent(content: PortfolioContent) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event(CONTENT_UPDATED_EVENT));
}

export function resetPortfolioContent() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(CONTENT_UPDATED_EVENT));
}
