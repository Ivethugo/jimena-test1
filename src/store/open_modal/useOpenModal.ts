import { create } from "zustand";

interface OpenModal {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

export const useOpenModal = create<OpenModal>((set) => ({
  openModal: false,
  setOpenModal: (openModal: boolean) => set(() => ({ openModal })),
}));
