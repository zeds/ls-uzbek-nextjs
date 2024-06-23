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
  setUser: (payload) => set({ user: payload }),
  user: {
    id: "",
    username: "",
    email: "",
    avatar_url: "",
    birthday: "1997-07-16T19:20+01:00",
    sex: 0,
    school: "",
    occupation: "",
    address: "",
    phone: "",
    hobby: "",
    nationality: "",
    introduce: "",
    pos: 0,
  },
}));
