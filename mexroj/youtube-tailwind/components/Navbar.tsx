import React from "react";

export default function Navbar() {
  return (
    <div className="absolute z-10 pt-14 left-0 top-0 bottom-0 border-4 border-orange-400 hidden sm:hidden md:w-16 md:block xl:w-[216px]">
      <ul>
        <li className="pt-4 pr-0 pb-[14px]">
          <img src="../images/yt-home.svg" alt="home" />
          <span className="">Home</span>
        </li>
      </ul>
    </div>
  );
}
