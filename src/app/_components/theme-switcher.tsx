'use client';

import { useCallback, useEffect, useState } from 'react';
import styles from './switch.module.css';
import { useThemeStore } from '@/stores/useThemeStore';

const STORAGE_KEY = 'theme';
const modes = ['system', 'dark', 'light'] as const;
type Theme = (typeof modes)[number];

// detect the system theme
const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// get the stored theme from localStorage
const getStoredTheme = () => localStorage.getItem(STORAGE_KEY) as Theme | null;

const ThemeSwitcher = () => {
  const { mode, setMode } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // apply the selected theme to the DOM
  const applyTheme = useCallback((mode: Theme) => {
    // resolve 'system' mode to actual system theme
    const systemMode = getSystemTheme();
    const resolvedMode = mode === 'system' ? systemMode : mode;

    // apply theme to the DOM
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(resolvedMode);
    document.documentElement.setAttribute('data-mode', mode);
    // store selected theme to localStaorage
    localStorage.setItem(STORAGE_KEY, mode);
  }, []);
  // Set initial theme on component mount
  useEffect(() => {
    // default to 'system' if no theme is stored
    const initialMode = getStoredTheme() || 'system';
    applyTheme(initialMode);
    setMode(initialMode);
    setMounted(true);
  }, []);

  // Handle theme changes and system theme updates
  useEffect(() => {
    // do not run before component is mounted
    if (!mounted) return;

    const handleChangeTheme = () => {
      if (mode === 'system') applyTheme(mode);
    };

    applyTheme(mode);

    // add event listener for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleChangeTheme);

    // cleanup : remove event listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChangeTheme);
    };
  }, [mode, mounted, applyTheme]);

  // switching theme modes
  const handleModeSwitch = useCallback(() => {
    const currentIndex = modes.indexOf(mode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    setMode(nextMode);
  }, [mode, setMode]);

  if (!mounted) {
    return <div className={styles.switch} aria-hidden='true' />;
  }

  return (
    <button
      className={styles.switch}
      onClick={handleModeSwitch}
      aria-label={`toggle theme (current:${mode})`}
      title={`Current theme : ${mode}`}
    />
  );
};

export default ThemeSwitcher;
