"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Navbar() {
    var navTags = [
        { name: "すべて" },
        { name: "音楽" },
        { name: "ライブ" },
        { name: "オーディオブック" },
        { name: "フィットネス" },
        { name: "最近アップロードされた動画" },
        { name: "視聴済み" },
        { name: "新しい動画の発見" },
        { name: "すべて" },
        { name: "音楽" },
        { name: "ライブ" },
        { name: "オーディオブック" },
        { name: "フィットネス" },
        { name: "最近アップロードされた動画" },
        { name: "視聴済み" },
        { name: "新しい動画の発見" },
        { name: "すべて" },
        { name: "音楽" },
        { name: "ライブ" },
        { name: "オーディオブック" },
        { name: "フィットネス" },
        { name: "最近アップロードされた動画" },
        { name: "視聴済み" },
        { name: "新しい動画の発見" },
    ];
    return (react_1["default"].createElement("div", { className: "webkit-scroll fixed z-10 w-[256px] h-[100%] overflow-y-auto bg-green-400 pt-2 pl-1  top-[46px]  mt-3 left-0 bottom-0 border-4 border-orange-400" }, navTags.map(function (item, index) { return (react_1["default"].createElement("ul", { key: index, className: " bg-gray-300 px-2 py-1 rounded  mb-5 cursor-pointer ml-1" },
        react_1["default"].createElement("li", { className: "block  line-clamp-1" }, item.name))); })));
}
exports["default"] = Navbar;
