export const THEME_SWITCHING_ATTR = 'data-theme-switching';
export const switchTheme = (update: () => void): void => {
  if (typeof document === 'undefined') {
    update();
    return;
  }
  const root = document.documentElement;
  root.setAttribute(THEME_SWITCHING_ATTR, '');
  update();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => root.removeAttribute(THEME_SWITCHING_ATTR));
  });
};