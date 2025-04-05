import { create } from "zustand";

interface AudioState {
  audio: boolean;
  setAudio: (val: boolean) => void;
}

export const useAudio = create<AudioState>((set) => ({
  audio: false,
  setAudio: (val: boolean) => set({ audio: val }),
}));
