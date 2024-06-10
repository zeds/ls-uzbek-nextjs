"use client";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store";
import React, { useEffect, useState } from "react";
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
// import google from "../public/google.svg";
let update = true;

const Page = () => {
  const text = useCounterStore((state) => state.text);

  const [value, setValue] = useState("useStateの練習をするよ");

  const clickSearch = () => {
    alert("入力された値：" + value);
  };

  return (
    <div className="pt-[56px] bg-red-300 h-screen flex justify-center items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px]" align="top">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <div className="flex">
                <div className="w-10 h-10 mr-4">
                  <img src="/tom.png" className="rounded-full" />
                </div>
                <div>
                  <div>Sarviee</div>
                  <div>sarvie.s@gmail.com</div>
                  <div className="text-[#095ED2] mt-2">Channel</div>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <div className="mr-2 h-6 w-6">
                <img src="/google.svg" />
              </div>
              <span>Google Account</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <div className="mr-2 h-6 w-6">
                  <img src="/users.svg" />
                </div>
                <span>Change the Account</span>
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
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex">
        <input
          className="p-2"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <Button onClick={clickSearch} className="bg-blue-300 p-3">
          検索
        </Button>
      </div>
    </div>
  );
};

export default Page;