"use client";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import FlagModal from "./FlagModal";
import { useCounterStore } from "@/store";
import { Button } from "@/components/ui/button";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
// import logout from "@/public/logout.svg";

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
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [flag, setFlag] = useState("jp"); // jp us au
  const [showModal, setShowModal] = useState(false); // true/false

  const changeText = useCounterStore((state) => state.changeText);
  const [searchText, setSearchText] = useState("");
  const isLogin = useCounterStore((state) => state.isLogin);
  const setLogin = useCounterStore((state) => state.setLogin);

  const clickSearch = () => {
    changeText(searchText);
  };

  return (
    <>
      {showModal ? (
        <FlagModal setShowModal={setShowModal} setFlag={setFlag} />
      ) : null}
      <div className="fixed z-10 flex h-[56px] w-full justify-between items-center">
        <div className="flex items-center justify-center w-[169px]">
          <div className="w-10 h-10 p-2 shrink-0">
            <img src="burger.svg" alt=""></img>
          </div>
          <Link href={"/"}>
            <div className="w-[127px] h-[56px]  py-[18px] pl-[16px] pr-[14px] shrink-0">
              <img src="logo.svg" alt=""></img>
            </div>
          </Link>
        </div>
        <div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
          {/* search */}
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="検索"
            className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
          ></input>

          {/* scope */}
          <button
            onClick={clickSearch}
            className="shrink-0 w-[64px] h-[40px] relative rounded-r-full border-2 border-solid outline outline-gray-300"
          >
            <img
              className="w-[24px] absolute right-4 bottom-1.5"
              src="scope.svg"
              alt=""
            ></img>
          </button>

          {/* mic */}
          <button className="ml-[12px] w-[40px] h-[40px] rounded-full  flex items-center justify-center aspect-square">
            <img
              className="flex shrink-0 rounded-full w-[24px]"
              src="mic.svg"
              alt=""
            ></img>
          </button>
        </div>
        <ul className="flex items-center justify-end w-[225px] h-[40px] shrink-0">
          {/* search */}
          <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
            <img src="scope.svg" alt=""></img>
          </li>
          {/* mic */}
          <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
            <img src="mic.svg" alt=""></img>
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
          {isLogin ? (
            <>
              {/* video */}
              <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
                <img src="video.svg" alt=""></img>
              </li>
              {/*bell*/}
              <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
                <img src="bell.svg" alt=""></img>
              </li>
            </>
          ) : null}
          {/* Mr Tom */}
          {/* <Link href={"/profiles"}> */}
          {/* <li className="flex justify-center w-[60px] h-[34px] px-[6px] py-[1px]">
              <img
                className="w-[32px] h-[32px] rounded-full"
                src="me.jpg"
                alt=""
              ></img>
            </li> */}
          {/* <li className="flex justify-center w-[60px] h-[34px] px-[6px] py-[1px]"> */}
          {isLogin ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img
                  className="w-[32px] h-[32px] rounded-full"
                  src="me.jpg"
                  alt=""
                ></img>
                {/* <Button variant="outline">Open</Button> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[300px]" align="top">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <div className="flex">
                      <div className="w-10 h-10 mr-4">
                        <img src="/me.jpg" className="rounded-full" />
                      </div>
                      <div>
                        <div>Asila Mamanova</div>
                        <div>@user-kv5to5kw3k</div>
                        <div className="text-[#095ED2] mt-2">
                          Kanalingizni ochish
                        </div>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <div className="mr-4 h-6 w-6">
                      <img src="/google.svg" />
                    </div>
                    <span>Google hisobi</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <div className="mr-4 h-6 w-6">
                        <img src="/account.svg" />
                      </div>
                      <span>Hisobni almashtirish</span>
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
                  <div onClick={() => setLogin(false)} className="flex">
                    <div className="mr-4 h-6 w-6">
                      <img src="/logout.svg" />
                    </div>
                    <span>Chiqish</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div
              className="flex border-[1px] px-2 py-1 rounded-full items-center cursor-pointer"
              onClick={() => router.push("/login")}
            >
              {/* <Image
                className=""
                src={"/logout-avatar.svg"}
                alt={"setting.svg"}
                width={30}
                height={30}
              /> */}
              <span
                onClick={() => router.push("/login")}
                className="text-[rgba(8,94,212,1)]"
              >
                ログイン
              </span>
            </div>
          )}

          {/* </li> */}
          {/* </Link> */}
        </ul>
      </div>
    </>
  );
};

export default Header;
