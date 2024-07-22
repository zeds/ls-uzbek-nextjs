"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Router } from "next/router";
import React, { useState } from "react";

const Page = () => {
  const [message, setMessage] = useState("6文字以上入力する必要があります");
  return (
    <div className="pt-[56px] w-full h-dvh bg-red-300 justify-center items-center flex">
      <div className="flex flex-col w-[600px] h-fit bg-gray-200 p-4 rounded-sm">
        <div className="text-lg font-bold flex justify-center">ログイン</div>
        <Input className="my-5" type="email" placeholder="メールアドレス" />
        <Input className="my-5" type="password" placeholder="パスワード" />
        <div className="text-red-500">{message}</div>

        <Button className="mt-5 w-full">ログイン</Button>
        <div className="flex justify-between items-center my-5">
          <Link href={"/"}>パスワードを忘れた</Link>
          <Link href={"/"}>新規登録はこちら</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
