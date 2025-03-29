import { create } from "zustand";

interface AttendeeData {
  name: string;
  setName: (name: string) => void;
}

export const useAttendeeData = create<AttendeeData>((set) => ({
  name: "",
  setName: (name: string) => set(() => ({ name })),
}));
