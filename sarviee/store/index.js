import { create } from "zustand";

export const useCounterStore = create((set) => ({
  text: "hello",
  changeText: (value) => {
    set({ text: value });
  },
}));
