"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Tags() {
    var tagName = [
        { name: "すべて" },
        { name: "音楽" },
        { name: "ライブ" },
        { name: "オーディオブック" },
        { name: "フィットネス" },
        { name: "最近アップロードされた動画" },
        { name: "視聴済み" },
        { name: "新しい動画の発見" },
        { name: 'bu tag' }
    ];
    return (
    // <div className="fixed w-full h-[56px] top-[56px] left-0 border-4 border-blue-400 flex gap-3 items-center">
    react_1["default"].createElement("div", { className: "tag_list gap-3 p-2 ml-3" }, tagName.map(function (item, index) { return (react_1["default"].createElement("div", { key: index, className: "bg-gray-300 gap-3 px-2 py-1 flex rounded " }, item.name)); })));
}
exports["default"] = Tags;
