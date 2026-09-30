import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { switchTheme, type ThemeMode } from '../../lib';

const STORAGE_KEY = 'cybergrid:theme';
const getInitialMode = (): ThemeMode => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};
export const useThemeMode = () => {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
    }
  }, [mode]);
  const toggle = () =>
    switchTheme(() =>
      flushSync(() => setMode((current) => (current === 'dark' ? 'light' : 'dark'))),
    );

  return { mode, toggle };
};