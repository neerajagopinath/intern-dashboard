import { create } from 'zustand';
import { interns as seed } from '../data/mockData';

export const useAppStore = create((set) => ({
  dark: true,
  sidebarOpen: true,
  interns: seed,
  setDark: (dark) => set({ dark }),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}));
