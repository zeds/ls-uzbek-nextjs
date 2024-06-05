"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCounterStore = void 0;

var _zustand = require("zustand");

var useCounterStore = (0, _zustand.create)(function (set) {
  return {
    changeText: function changeText(value) {
      set({
        text: value
      });
    },
    text: "Shoxrux",
    count: 25
  };
});
exports.useCounterStore = useCounterStore;