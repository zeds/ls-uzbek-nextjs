import { create } from "zustand";

export const useCounterStore = create((set) => ({
  changeText: (value) => {
    set({ text: value });
  },
}));
