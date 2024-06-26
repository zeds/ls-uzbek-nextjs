import { create } from "zustand";

export const useCounterStore = create((set) => ({
	isLogin: false,
	text: "salom",
	changeText: (value) => {
		set({ text: value });
	},
	setLogin: (value) => {
		set({ isLogin: value });
	},
	setUser: (playload) => set({user: playload}),
	user: {
		id: "",
		username: "",
		email: "",
		avatar_url: "",
		birthday: "",
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
