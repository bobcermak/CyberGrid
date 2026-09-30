import { useCallback, useEffect, useState } from 'react';

export type Route = {
  page: string;
  section?: string;
};

const BASE = import.meta.env.BASE_URL;

export const toPath = (page: string, section?: string) =>
  `${BASE}${page}${section ? `#${section}` : ''}`;

const parse = (): Route => {
  const path = window.location.pathname.startsWith(BASE)
    ? window.location.pathname.slice(BASE.length)
    : window.location.pathname.replace(/^\//, '');
  const section = window.location.hash.replace(/^#/, '');
  return {
    page: decodeURIComponent(path.replace(/\/$/, '')),
    section: section ? decodeURIComponent(section) : undefined,
  };
};

export const useRoute = () => {
  const [route, setRoute] = useState<Route>(parse);

  const navigate = useCallback((page: string, section?: string) => {
    window.history.pushState(null, '', toPath(page, section));
    setRoute(parse());
  }, []);

  useEffect(() => {
    const onPopState = () => setRoute(parse());

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest('a');
      if (!link || link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || !url.pathname.startsWith(BASE)) return;
      event.preventDefault();
      window.history.pushState(null, '', url.pathname + url.hash);
      setRoute(parse());
    };

    window.addEventListener('popstate', onPopState);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return { route, navigate };
};