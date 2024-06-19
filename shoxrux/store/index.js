import { create } from "zustand";

export const useCounterStore = create((set) => ({
	isLogin: false,
	text: "あいうえお",
	changeText: (value) => {
		console.log("changeText=", value);
		set({ text: value });
	},
	setLogin: (value) => {
		set({ isLogin: value });
	},
}));
