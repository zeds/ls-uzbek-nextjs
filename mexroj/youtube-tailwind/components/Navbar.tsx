import React from "react";

export default function Navbar() {
  return (
    <div className="absolute pt-14 hidden left-0 top-0   sm:hidden md:w-16 md:block xl:w-[216px] bg-white">
      <ul>
        <li className="pt-4 pr-0 pb-[14px]">
          <img src="images/yt-home.svg" alt="home" />
          <span className="">Home</span>
        </li>
        <li className="pt-4 pr-0 pb-[14px]">
          <img src="images/yt-short.svg" alt="short" />
          <span className="">Shorts</span>
        </li>
        <li className="pt-4 pr-0 pb-[14px]">
          <img src="images/yt-r-channel.svg" alt="channel" />
          <span className="">登録チャンネル</span>
        </li>
      </ul>
    </div>
  );
}
