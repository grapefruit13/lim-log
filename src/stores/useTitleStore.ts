import { create } from 'zustand';

interface TitleState {
  title: string;
  setTitle: (newTitle: string) => void;
  resetTitle: () => void;
}

export const useTitleStore = create<TitleState>((set) => ({
  title: '',
  setTitle: (newTitle) => set({ title: newTitle }),
  resetTitle: () => set({ title: '' }),
}));
