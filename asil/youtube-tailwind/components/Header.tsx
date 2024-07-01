"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed z-10 flex h-14 top-0 w-full justify-between items-center bg-white px-3">
      <div className="flex items-center justify-center w-[168px]">
        <button className="w-10 h-10 p-2 shrink-0 focus:outline-none">
          <Image src="/images/burger.svg" alt="Menu" width={24} height={24} />
        </button>
        <Link href="/">
          <div className="w-[127px] h-14 py-[18px] pl-4 pr-[14px] shrink-0">
            <Image src="/images/youtube-logo.svg" alt="YouTube Logo" width={90} height={20} />
          </div>
        </Link>
      </div>
      <div className="ml-[90px] w-full max-w-[732px] h-10 hidden sm:flex justify-end">
        <input
          type="text"
          placeholder="検索"
          className="pl-4 h-10 w-full max-w-[536px] rounded-l-full outline outline-gray-300 focus:outline-blue-500"
        />
        <button className="shrink-0 w-16 h-10 bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300 focus:outline-blue-500">
          <Image
            className="absolute right-4 bottom-1.5"
            src="/images/scope.svg"
            alt="Search"
            width={24}
            height={24}
          />
        </button>
        <button className="shrink-0 ml-3 w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center focus:outline-none">
          <Image
            className="rounded-full"
            src="/images/mic.svg"
            alt="Microphone"
            width={24}
            height={24}
          />
        </button>
      </div>
      <ul className="flex items-center justify-end w-[225px] h-10 pr-3 shrink-0">
        <li className="flex shrink-0 sm:hidden w-10 h-10 p-2">
          <button className="focus:outline-none">
            <Image src="/images/scope.svg" alt="Search" width={24} height={24} />
          </button>
        </li>
        <li className="flex shrink-0 sm:hidden w-10 h-10 p-2">
          <button className="focus:outline-none">
            <Image src="/images/mic.svg" alt="Microphone" width={24} height={24} />
          </button>
        </li>
        <li className="flex items-center shrink-0 w-10 h-10 p-2">
          <button className="focus:outline-none">
            <Image src="/images/video.svg" alt="Video" width={24} height={24} />
          </button>
        </li>
        <li className="flex items-center shrink-0 w-10 h-10 p-2">
          <button className="focus:outline-none">
            <Image src="/images/bell.svg" alt="Notifications" width={24} height={24} />
          </button>
        </li>
        <li>
          <Image
            className="w-8 h-8 rounded-full cursor-pointer"
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
