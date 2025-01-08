import { create } from 'zustand';
export type ColorSchemePreference = 'system' | 'dark' | 'light';

type ThemeState = {
  mode: ColorSchemePreference;
  setMode: (mode: ColorSchemePreference) => void;
};

export const useThemeState = create<ThemeState>((set) => ({
  // default mode is system
  mode: 'system',
  setMode: (mode) => set({ mode }),
}));
