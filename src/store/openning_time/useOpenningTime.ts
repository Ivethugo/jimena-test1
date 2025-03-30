import { create } from "zustand";

interface TimePreloading {
  timePreloading: number;
  timeWelcome: number;
  preloading: boolean;
  welcome: boolean;
  invitation: boolean;
  setPreloading: (preloading: boolean) => void;
  setWelcome: (welcome: boolean) => void;
  setInvitation: (invitation: boolean) => void;
}

export const useOpenningTime = create<TimePreloading>((set) => ({
  timePreloading: 6000,
  timeWelcome: 7500,
  preloading: true,
  welcome: false,
  invitation: false,
  setPreloading: (preloading: boolean) => set(() => ({ preloading })),
  setWelcome: (welcome: boolean) => set(() => ({ welcome })),
  setInvitation: (invitation: boolean) => set(() => ({ invitation })),
}));
