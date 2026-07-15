import { useEffect } from 'react';

const defaultImage = `${window.location.origin}${import.meta.env.BASE_URL}og-image.svg`;

function updateMeta(selector: string, attribute: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    if (selector.includes('property=')) {
      element.setAttribute('property', selector.match(/"([^"]+)"/)?.[1] ?? '');
    } else {
      element.setAttribute('name', selector.match(/"([^"]+)"/)?.[1] ?? '');
    }
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    updateMeta('meta[name="description"]', 'content', description);
    updateMeta('meta[property="og:title"]', 'content', title);
    updateMeta('meta[property="og:description"]', 'content', description);
    updateMeta('meta[property="og:image"]', 'content', defaultImage);
    updateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
  }, [description, title]);
}
