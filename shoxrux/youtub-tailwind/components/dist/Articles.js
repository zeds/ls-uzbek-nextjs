"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Articles() {
    var article = [
        { title: "あいうえお1", img: "./fff.jpg" },
        { title: "あいうえお2", img: "./fff.jpg" },
        { title: "あいうえお3", img: "./fff.jpg" },
        { title: "あいうえお4", img: "./fff.jpg" },
        { title: "あいうえお5", img: "./fff.jpg" },
        { title: "あいうえお6", img: "./fff.jpg" },
        { title: "あいうえお7", img: "./fff.jpg" },
        { title: "あいうえお8", img: "./fff.jpg" },
        { title: "あいうえお9", img: "./fff.jpg" },
        { title: "あいうえお10", img: "./fff.jpg" },
        { title: "あいうえお11", img: "./fff.jpg" },
        { title: "あいうえお12", img: "./fff.jpg" },
        { title: "あいうえお13", img: "./fff.jpg" },
        { title: "あいうえお14", img: "./fff.jpg" },
        { title: "あいうえお15", img: "./fff.jpg" },
        { title: "あいうえお16", img: "./fff.jpg" },
        { title: "あいうえお17", img: "./fff.jpg" },
        { title: "あいうえお18", img: "./fff.jpg" },
        { title: "あいうえお19", img: "./fff.jpg" },
        { title: "あいうえお20", img: "./fff.jpg" },
    ];
    return (react_1["default"].createElement("div", { className: "w-full grid grid-cols-3 bg-pink-400 gap-3 overflow-y-auto pt-[16px] pl-[260px] pr-5" }, article.map(function (item, index) { return (react_1["default"].createElement("div", { key: index },
        react_1["default"].createElement("img", { src: item.img, alt: "hero", className: "rounded-lg" }),
        react_1["default"].createElement("div", { className: "bg-red-500" }, item.title))); })));
}
exports["default"] = Articles;
