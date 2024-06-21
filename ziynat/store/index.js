import { create } from "zustand";

export const useCounterStore = create((set) => ({
  isLogin: false,
  text: "",
  changeText: (value) => {
    set({ text: value });
  },
  setLogin: (value) => {
    set({ isLogin: value });
  },
}));
