"use client";
import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
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
} from "./ui/dropdown-menu";
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
          <button className="shrink-0 w-[64px] h-[40px] bg-gray-200  rounded-r-full border-2 border-solid outline outline-gray-300 relative tooltip">
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
        <ul className="flex items-center justify-end w-[225px] h-[40px] pr-3  shrink-0">
          {/* search */}
          <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2 relative tooltip">
            <img className="" src="images/scope.svg" alt=""></img>
            <span className="tooltip-text">検索</span>
          </li>
          {/* mic */}
          <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2 relative tooltip">
            <img className="" src="images/mic.svg" alt=""></img>
            <span className="tooltip-text">音声で検索</span>
          </li>

          <>
            {/* video */}
            <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2 relative tooltip">
              <img className="" src="images/video.svg" alt=""></img>
              <span className="tooltip-text">作成する</span>
            </li>
            {/*bell*/}
            <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2 relative tooltip">
              <img className="" src="images/bell.svg" alt=""></img>
              <span className="tooltip-text">通知</span>
            </li>
          </>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                className="w-[32px] h-[32px] rounded-full cursor-pointer"
                src="mexroj.jpg"
                alt="mexroj"
              ></img>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span>Keyboard shortcuts</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
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
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>New Team</span>
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Cloud className="mr-2 h-4 w-4" />
                <span>API</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>
      </div>
    </>
  );
};

export default Header;
