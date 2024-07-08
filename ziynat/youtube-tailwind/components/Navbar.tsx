import Image from "next/image";
import React from "react";

// CSJ

export default function Navbar() {
  const items = [
    { title: "ホーム", img: "./images/menu_home.svg" },
    { title: "ショート", img: "./images/menu_short.svg" },
    { title: "登録チャンネル", img: "./images/menu_channels.svg" },
    { title: "YouTube Music", img: "./images/menu_music.svg" },
    { title: "", img: "" },
    { title: "チャンネル", img: "./images/menu_your-videos.svg" },
    { title: "履歴", img: "./images/menu_history.svg" },
    { title: "再生リスト", img: "./images/menu_playlist.svg" },
    { title: "再生した動画", img: "./images/menu_watch-later.svg" },
  ];

  return (
    <nav className="hidden md:flex md:w-[72px] md:py-0 md:px-1  md:flex-col fixed lg:w-[240px] left-0 top-14 bottom-0 z-20 bg-white  ">
      <ul className="pl-[10px]">
        {items.map((item, index) => (
          <>
            {item.title === "" ? (
              <div className="border-t-[1px] border-solid border-gray-200 mt-3 pt-3" />
            ) : (
              <li
                key={index}
                className="flex lg:text-[14px] font-medium lg:leading-4 text-(rgba[15,15,15,1]) lg:p-[10px]  items-center rounded-[10px] lg:gap-6 hover:bg-gray-200 md:flex-col md:justify-center  md:gap-0 md:text-[10px] md:leading-[14px] md:rounded-[10px] md:p-1  lg:flex-row lg:justify-start cursor-pointer"
              >
                <img src={item.img} alt="home" className="w-6 h-6 mb-[6px]" />
                <span className="title ">{item.title} </span>
              </li>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
}
