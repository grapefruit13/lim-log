'use client';

import { useEffect } from 'react';
import styles from './switch.module.css';
import { useThemeStore } from '@/stores/useThemeStore';

export const STORAGE_KEY = 'theme';
const modes = ['system', 'dark', 'light'] as const;

const ThemeSwitcher = () => {
  const { mode, setMode } = useThemeStore();

  // updating DOM on Client side with useEffect
  useEffect(() => {
    const savedMode = localStorage.getItem(STORAGE_KEY) ?? 'system';
    const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    const resolvedMode = savedMode === 'system' ? systemMode : savedMode;

    // updating className and data-mode only on Client side
    document.documentElement.classList.add(resolvedMode);
    document.documentElement.setAttribute('data-mode', savedMode);
    localStorage.setItem(STORAGE_KEY, savedMode);
  }, []);

  /** when switch mode **/
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
    const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    const resolvedMode = mode === 'system' ? systemMode : mode;

    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(resolvedMode);
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  /** toggle mode */
  const handleModeSwitch = () => {
    const index = modes.indexOf(mode);
    setMode(modes[(index + 1) % modes.length]);
  };
  return (
    <button
      suppressHydrationWarning
      className={styles.switch}
      onClick={handleModeSwitch}
    />
  );
};

export default ThemeSwitcher;
