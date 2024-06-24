"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCounterStore = void 0;

var _zustand = require("zustand");

var useCounterStore = (0, _zustand.create)(function (set) {
  return {
    isLogin: false,
    text: "",
    changeText: function changeText(value) {
      console.log("changeText=", value);
      set({
        text: value
      });
    },
    setLogin: function setLogin(value) {
      set({
        isLogin: value
      });
    },
    setUser: function setUser(payload) {
      return set({
        user: payload
      });
    },
    user: {
      id: "aiueo",
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
      introduce: ""
    }
  };
});
exports.useCounterStore = useCounterStore;