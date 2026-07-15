export interface VideoEmbed {
  src: string;
  provider: 'YouTube' | 'Vimeo';
}

export function getVideoEmbed(videoUrl?: string): VideoEmbed | null {
  if (!videoUrl) {
    return null;
  }

  try {
    const url = new URL(videoUrl);

    if (url.hostname.includes('youtu.be')) {
      const id = url.pathname.replace('/', '');
      return id
        ? { src: `https://www.youtube.com/embed/${id}`, provider: 'YouTube' }
        : null;
    }

    if (url.hostname.includes('youtube.com')) {
      const watchId = url.searchParams.get('v');
      const pathParts = url.pathname.split('/').filter(Boolean);
      const embedId =
        watchId ??
        (pathParts[0] === 'embed' || pathParts[0] === 'shorts'
          ? pathParts[1]
          : undefined);

      return embedId
        ? {
            src: `https://www.youtube.com/embed/${embedId}`,
            provider: 'YouTube',
          }
        : null;
    }

    if (url.hostname.includes('vimeo.com')) {
      const id = url.pathname.split('/').filter(Boolean).at(-1);
      return id
        ? { src: `https://player.vimeo.com/video/${id}`, provider: 'Vimeo' }
        : null;
    }
  } catch {
    return null;
  }

  return null;
}
