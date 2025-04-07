import { create } from "zustand";

interface AttendeeData {
  code: string;
  name: string;
  tickets: number;
  setCode: (code: string) => void;
  setName: (name: string) => void;
  setTickets: (tickets: number) => void;
}

export const useAttendeeData = create<AttendeeData>((set) => ({
  code: "",
  name: "",
  tickets: 0,
  setCode: (code: string) => set(() => ({ code })),
  setName: (name: string) => set(() => ({ name })),
  setTickets: (tickets: number) => set(() => ({ tickets })),
}));
