"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
// import { useState } from "react";

const Page = () => {
  const [message, setMessage] = useState("6文字以上入力する必要があります");
  return (
    <div className="w-full h-dvh bg-gray-100 flex justify-center items-center">
      <div className="w-[500px] h-fit rounded-md bg-blue-300 p-5">
        <div className="my-6 text-center">ログイン</div>
        <Input className="mb-5" />
        <Input />
        <div className="text-center my-2"> {message}</div>
        <Button className="w-full mb-2">ログイン</Button>
        <div className="w-[80%] m-auto rounded-md text-center my-2 bg-green-200">
        <Link  href="/forgot-password">パスワードを忘れた方はこちら</Link>
        </div>
        <div className="w-[80%] m-auto rounded-md text-center my-2 bg-green-200">
        <Link  href="/signup">アカウントを作成する</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
