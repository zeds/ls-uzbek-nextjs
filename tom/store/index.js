import { create } from "zustand";

export const useCounterStore = create((set) => ({
	count: 777,
	text: "かきくけこ",
	changeText: (value) => {
		set({ text: value });
	},
	increment: () => {
		set((state) => ({ count: state.count + 1 }));
	},
	decrement: () => {
		set((state) => ({ count: state.count - 1 }));
	},
}));
