"use strict";
exports.__esModule = true;
var react_1 = require("react");
// CSJ
function Navbar() {
    var items = [
        { title: "ホーム", img: "./images/yt-home.svg" },
        { title: "ショート", img: "./images/yt-short.svg" },
        { title: "登録チャンネル", img: "./images/yt-r-channel.svg" },
    ];
    return (react_1["default"].createElement("nav", null,
        react_1["default"].createElement("ul", null, items.map(function (item, index) { return (react_1["default"].createElement("li", { key: index },
            react_1["default"].createElement("img", { src: item.img, alt: "home" }),
            react_1["default"].createElement("span", { className: "title" }, item.title))); }))));
}
exports["default"] = Navbar;
