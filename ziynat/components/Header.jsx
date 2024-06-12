"use client";
import Link from "next/link";
import React, { useState } from "react";
import FlagModal from "./FlagModal";
import { useCounterStore } from "@/store";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [flag, setFlag] = useState("jp"); // jp us au
  const [showModal, setShowModal] = useState(false); // true/false

  const changeText = useCounterStore((state) => state.changeText);
  const [searchText, setSearchText] = useState("");

  const clickSearch = () => {
    changeText(searchText);
  };

  return (
    <>
      {showModal ? (
        <FlagModal setShowModal={setShowModal} setFlag={setFlag} />
      ) : null}
      <div className="fixed z-10 flex h-[56px] w-full justify-between items-center bg-white">
        <div className="flex items-center justify-center w-[169px] ">
          <div className="w-10 h-10 p-2 shrink-0">
            <img src="burger.svg" alt=""></img>
          </div>
          <Link href={"/"}>
            <div className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px] shrink-0">
              <img src="logo.svg" alt=""></img>
            </div>
          </Link>
        </div>
        <div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
          {/* search */}
          <input
            type="text"
            // value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="検索"
            className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
          ></input>

          {/* scope */}
          <button
            onClick={clickSearch}
            className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300"
          >
            <img
              className="w-[24px] absolute right-4 bottom-1.5"
              src="search.svg"
              alt=""
            ></img>
          </button>

          {/* mic */}
          <button className="ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square">
            <img
              className="flex shrink-0 rounded-full w-[24px]"
              src="mic.svg"
              alt=""
            ></img>
          </button>
        </div>
        <ul className="flex items-center justify-end w-[225px] h-[40px]  shrink-0">
          {/* search */}
          <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
            <img className="" src="search.svg" alt=""></img>
          </li>
          {/* mic */}
          <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
            <img className="" src="mic.svg" alt=""></img>
          </li>

          {/* flag 国旗 */}
          <li className="flex items-center shrink-0 w-[60px] p-2">
            <button onClick={() => setShowModal(true)}>
              <img
                className=" w-[30px]"
                // src={`https://flagcdn.com/w320/${flag}.png`}
                src={`/flags/${flag}.svg`}
                alt=""
              ></img>
            </button>
          </li>

          {/* video */}
          <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
            <img className="" src="video.svg" alt=""></img>
          </li>
          {/*bell*/}
          <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
            <img className="" src="bell.svg" alt=""></img>
          </li>
          {/* ziynat */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px]" align="top">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <div className="flex">
                    <div className="w-10 h-10 mr-4">
                      <img
                        className="rounded-full"
                        src="icon.jpg"
                        alt="ziynat"
                      />
                    </div>
                    <div>
                      <div>Ziynat Abdukodirova</div>
                      <div>@odakaori1788</div>
                      <div className="text-[#095ED5] mt-2">チャンネル表示</div>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <div className="w-6 h-6 mr-4">
                    <img src="/google.svg" alt="google" />
                  </div>
                  <span>Google アカウント</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <div className="w-6 h-6 mr-4">
                      <img src="/changeAccount.svg" alt="changeAccount" />
                    </div>
                    <span>アカウントを切り替える</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Message</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        <span>More...</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuItem>
                <div className="w-6 h-6 mr-4">
                  <img src="/logout.svg" alt="logout" />
                </div>
                <span>ログアウト</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={"/profiles"}>
            <li className="flex justify-center w-[60px] h-[34px] px-[6px] py-[1px]">
              <img
                className="w-[32px] h-[32px] rounded-full"
                src="icon.jpg"
                alt=""
              ></img>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
