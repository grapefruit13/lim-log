import { create } from 'zustand';
export type ColorSchemePreference = 'system' | 'dark' | 'light';

type ThemeState = {
  mode: ColorSchemePreference;
  setMode: (mode: ColorSchemePreference) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  // default mode is system
  mode: 'system',
  setMode: (mode) => set({ mode }),
}));
