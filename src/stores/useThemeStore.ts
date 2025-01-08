import { MODE } from '@/constants/_theme';
import { ThemeType } from '@/types/_theme';
import { create } from 'zustand';

type ThemeState = {
  mode: ThemeType;
  setMode: (mode: ThemeType) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  // default mode is system
  mode: MODE.SYSTEM as ThemeType,
  setMode: (mode) => set({ mode }),
}));
