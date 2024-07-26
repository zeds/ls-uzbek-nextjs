import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type StoreProp = {
	isLogin: boolean;
	text: string;
	changeText: (arg0: string) => void;
	setLogin: (arg0: boolean) => void;
	setUser: (arg0: any) => void;
	user: any;
};

export const useCounterStore = create<StoreProp>()((set, get) => ({
	isLogin: false,
	text: "",
	changeText: (value: string) => {
		console.log("changeText=", value);
		set({ text: value });
	},
	setLogin: (value: boolean) => {
		set({ isLogin: value });
	},
	setUser: (payload: any) => set({ user: payload }),
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
	},
}));
