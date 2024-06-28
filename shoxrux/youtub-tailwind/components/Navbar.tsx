import React from "react";

export default function Navbar() {
  const navTags = [
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
  return (
    <div className="webkit-scroll fixed z-10 w-[256px] h-[100%] overflow-y-auto bg-green-400 pt-2 pl-1  top-[46px]  mt-3 left-0 bottom-0 border-4 border-orange-400">
      {navTags.map((item, index) => (
        <ul
          key={index}
          className=" bg-gray-300 px-2 py-1 rounded  mb-5 cursor-pointer ml-1"
        >
          <li className="block  line-clamp-1">{item.name}</li>
        </ul>
      ))}
    </div>
  );
}
