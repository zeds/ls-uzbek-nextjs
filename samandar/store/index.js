import { create } from "zustand";

export const useCounterStore = create((set) => ({
	isLogin: true,
	text: "あいうえお",
	changeText: (value) => {
		set({ text: value });
	},
	setLogin: (value) => {
		set({ isLogin: value });
	},
}));
