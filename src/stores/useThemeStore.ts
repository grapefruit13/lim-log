import { STORAGE_KEY } from '@/app/_components/theme-switcher';
import { create } from 'zustand';

export type ColorSchemePreference = 'system' | 'dark' | 'light';

type ThemeState = {
  mode: ColorSchemePreference;
  setMode: (mode: ColorSchemePreference) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  mode: 'system', // 기본값 설정
  setMode: (mode) => set({ mode }),
}));

// 클라이언트에서만 상태를 설정하도록 useEffect 추가
export const initializeTheme = () => {
  if (typeof window !== 'undefined') {
    const savedMode = localStorage.getItem(STORAGE_KEY) ?? 'system';
    const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    const resolvedMode = savedMode === 'system' ? systemMode : savedMode;

    useThemeStore.getState().setMode(resolvedMode as ColorSchemePreference); // Zustand 상태 업데이트
  }
};
