import { create } from "zustand";

export const useCounterStore = create((set) => ({
	text: "カザフ",
	changeText: (value) => {
		set({ text: value });
	},
}));
