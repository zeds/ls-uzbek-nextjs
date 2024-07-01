"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed z-10 flex h-[56px] top-0 w-full justify-between items-center bg-white px-3">
      <div className="flex items-center justify-center w-[169px]">
        <div className="w-10 h-10 p-2 shrink-0">
          <Image src="/images/burger.svg" alt="Menu" width={24} height={24} />
        </div>
        <Link href="/">
          <div className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px] shrink-0">
            <Image src="/images/youtube-logo.svg" alt="YouTube Logo" width={90} height={20} />
          </div>
        </Link>
      </div>
      <div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
        <input
          type="text"
          placeholder="検索"
          className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
        />
        <button className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300">
          <Image
            className="absolute right-4 bottom-1.5"
            src="/images/scope.svg"
            alt="Search"
            width={24}
            height={24}
          />
        </button>
        <button className="shrink-0 ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center">
          <Image
            className="rounded-full"
            src="/images/mic.svg"
            alt="Microphone"
            width={24}
            height={24}
          />
        </button>
      </div>
      <ul className="flex items-center justify-end w-[225px] h-[40px] pr-3 shrink-0">
        <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
          <Image src="/images/scope.svg" alt="Search" width={24} height={24} />
        </li>
        <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
          <Image src="/images/mic.svg" alt="Microphone" width={24} height={24} />
        </li>
        <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
          <Image src="/images/video.svg" alt="Video" width={24} height={24} />
        </li>
        <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
          <Image src="/images/bell.svg" alt="Notifications" width={24} height={24} />
        </li>
        <li>
          <Image
            className="w-[32px] h-[32px] rounded-full cursor-pointer"
            src="/images/profile.jpg"
            alt="User Profile"
            width={32}
            height={32}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
