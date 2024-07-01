import Image from "next/image";
import React from "react";

// CSJ

export default function Navbar() {
  const items = [
    { title: "ホーム", img: "./images/yt-home.svg" },
    { title: "ショート", img: "./images/yt-short.svg" },
    { title: "登録チャンネル", img: "./images/yt-r-channel.svg" },
    { title: "YouTube Music", img: "./images/yt-r-channel.svg" },
    { title: "", img: "" },
    { title: "チャンネル", img: "./images/yt-channel.svg" },
    { title: "履歴", img: "./images/yt-history.svg" },
    { title: "再生リスト", img: "./images/yt-play-list.svg" },
    { title: "再生した動画", img: "./images/yt-my-movie.svg" },
  ];

  return (
    <nav className="hidden md:flex md:w-[72px] md:py-0 md:px-1  md:flex-col fixed lg:w-[240px] left-0 top-14 bottom-0 z-20 bg-white  ">
      <ul className="pl-[10px] md:pr-0 ">
        {items.map((item, index) => (
          <>
            {item.title === "" ? (
              <div className="border-t-[1px] border-solid border-gray-200 mt-3 pt-3" />
            ) : (
              <li
                key={index}
                className="flex text-[14px] font-medium leading-5 text-(rgba[15,15,15,1]) py-[10px]  items-center rounded-[10px] lg:gap-6 hover:bg-gray-200 md:flex-col md:justify-center md:bg-white md:text-[10px] md:leading-[14px] md:rounded-[10px] md:gap-0 lg:flex-row lg:justify-start"
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
