import { useEffect, useState } from 'react';
import {
  CONTENT_UPDATED_EVENT,
  loadPortfolioContent,
  type PortfolioContent,
} from '../utils/contentStore';

export function usePortfolioContent(): PortfolioContent {
  const [content, setContent] = useState<PortfolioContent>(() =>
    loadPortfolioContent(),
  );

  useEffect(() => {
    const syncContent = () => setContent(loadPortfolioContent());

    window.addEventListener(CONTENT_UPDATED_EVENT, syncContent);
    window.addEventListener('storage', syncContent);

    return () => {
      window.removeEventListener(CONTENT_UPDATED_EVENT, syncContent);
      window.removeEventListener('storage', syncContent);
    };
  }, []);

  return content;
}
