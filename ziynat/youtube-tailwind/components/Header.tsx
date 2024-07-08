"use client";
import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  return (
    <>
      <div className="fixed z-20 flex h-[56px] top-0 w-full justify-between items-center bg-white px-3">
        <div className="flex items-center justify-center w-[169px] ">
          <div className="w-10 h-10 p-2 shrink-0">
            <img src="images/burger.svg" alt=""></img>
          </div>
          <Link href={"/"}>
            <div className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px] shrink-0">
              <img src="images/youtube-logo.svg" alt=""></img>
            </div>
          </Link>
        </div>
        <div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
          {/* search */}
          <input
            type="text"
            placeholder="検索"
            className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
          ></input>

          {/* scope */}
          <button className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300 tooltip">
            <img
              className="w-[24px] absolute right-4 bottom-1.5"
              src="images/scope.svg"
              alt=""
            ></img>
            <span className="tooltip-text">検索</span>
          </button>

          {/* mic */}
          <button className="shrink-0 ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square relative tooltip">
            <img
              className="flex rounded-full w-[24px]"
              src="images/mic.svg"
              alt=""
            ></img>
            <span className="tooltip-text">音声で検索</span>
          </button>
        </div>
        <ul className="flex relative items-center justify-end w-[225px] h-[40px] pr-3  shrink-0">
          {/* search */}
          <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2 relative tooltip">
            <img className="" src="images/scope.svg" alt=""></img>
            <span className="tooltip-text">検索</span>
          </li>
          {/* mic */}
          <li className="flex relative shrink-0 sm:hidden w-[40px] h-[40px] p-2 tooltip cursor-pointer">
            <img className="" src="images/mic.svg" alt=""></img>
            <span className="tooltip-text">音声で検索</span>
          </li>

          <>
            {/* video */}
            <li className="flex relative items-center shrink-0 w-[40px] h-[40px] p-2 tooltip cursor-pointer">
              <img className="" src="images/video.svg" alt=""></img>
              <span className="tooltip-text">作成</span>
            </li>
            {/*bell*/}
            <li className="flex relative items-center shrink-0 w-[40px] h-[40px] p-2 tooltip cursor-pointer">
              <img className="" src="images/bell.svg" alt=""></img>
              <span className="tooltip-text">通知</span>
            </li>
          </>
          <img
            className="w-[32px] h-[32px] rounded-full cursor-pointer"
            src="me.jpg"
            alt="me"
          ></img>
        </ul>
      </div>
    </>
  );
};

export default Header;
