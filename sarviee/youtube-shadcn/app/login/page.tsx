"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Router } from "next/router";
import React, { useState } from "react";

const Page = () => {
  const [message, setMessage] = useState("6文字以上入力する必要があります");
  return (
    <div className="pt-[56px] w-full h-dvh bg-blue-300 justify-center items-center flex">
      <div className="flex flex-col w-[600px] h-fit bg-gray-200 p-4 rounded-sm rounded">
        <div className="text-lg font-bold flex justify-center">ログイン</div>
        <Input className="my-5" type="email" placeholder="Email" />
        <Input className="my-5" type="password" placeholder="Password" />
        <div className="text-red-500">{message}</div>

        <Button className="mt-5 w-full">ログイン</Button>
        <Link href={"/"} className="text-blue-500 text-sm mt-1 cursor-pointer">
          Forgot Password
        </Link>
        <Link
          href={"/"}
          className="flex  text-blue-500 text-sm mt-3 cursor-pointer"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Page;
