const loaded = new Set<string>();

export const ensureFonts = (url: string | null | undefined) => {
  if (!url || loaded.has(url) || typeof document === 'undefined') return;
  loaded.add(url);
  if (document.querySelector(`link[rel="stylesheet"][href="${CSS.escape(url)}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
};