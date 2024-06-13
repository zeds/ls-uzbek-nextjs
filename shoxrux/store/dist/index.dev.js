"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCounterStore = void 0;

var _zustand = require("zustand");

var useCounterStore = (0, _zustand.create)(function (set) {
  return {
    isLogin: false,
    text: "あいうえお",
    changeText: function changeText(value) {
      set({
        text: value
      });
    },
    setLogin: function setLogin(value) {
      set({
        isLogin: value
      });
    }
  };
});
exports.useCounterStore = useCounterStore;