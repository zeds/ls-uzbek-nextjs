import { create } from "zustand";

export const useCounterStore = create((set) => ({
  text: "シベリア",
  changeText: (value) => {
    set({ text: value });
  },
}));
