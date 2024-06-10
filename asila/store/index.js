import { create } from "zustand";

// export const useCounterStore = create((set) => ({
//   // count: 2222,
//   text: "Asila",
//   changeText: (value) => {
//     set({ text: value });
//   },
// }));



// export const useCounterStore = create((set) => ({
// 	text: "Morning",
// 	changeText: (value) => {
// 		set({ text: value });
// 	},
// }));



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
