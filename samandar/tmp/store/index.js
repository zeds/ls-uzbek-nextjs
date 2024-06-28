import { create } from "zustand";

export const useCounterStore = create((set) => ({
	isLogin: true,
	text: "",

	changeText: (value) => {
		set({ text: value });
	},
	setLogin: (value) => {
		set({ isLogin: value });
	},
	user: {
		id: "",
		email: "",
		username: "",
		introduce: "",
		avatar_url: "",
		pos: 0,
		class: [],
		customer_id: "",
	},
	setUser: (payload) => set({ user: payload }),

	// user: {
	// 	id: "qqqq",
	// 	email: "",
	// 	username: "",
	// 	avatar_url: "",
	// 	birthday: "",
	// 	sex: 0,
	// 	school: "",
	// 	occupation: "",
	// 	address: "",
	// 	phone: "",
	// 	hobby: "",
	// 	nationality: "",
	// 	introduce: "",
	// },
}));
