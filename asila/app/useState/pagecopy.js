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
import logout from "@/public/logout.svg";

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
        <DropdownMenuContent className="w-56" align="top">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
            <div className="w-6 h-6 mr-4">
            <img src="/google.svg" alt="google"/>
            </div>
              <span>Google hisobi</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <div className="w-6 h-6 mr-4">
              <img src="/account.svg" alt="account"/>
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
          <div className="w-6 h-6 mr-4">
            <img src="/logout.svg" alt="logout"/>
            </div>
            <span>Chiqish</span>
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
