"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [message, setMessage] = useState("6文字以上入力する必要があります");
  return (
    <div className="pt-[56px] w-full h-dvh bg-red-300 justify-center flex">
      <div className="bg-green-400 h-fit">
        <div>ログイン</div>
        <br />
        <Input></Input>
        <Input></Input>
        <div className="">{message}</div>
        <Button>ログイン</Button>
        <br />
        <Link href="/forgot-password">パスワードを忘れた方はこちら</Link>
        <br />
        <Link href="/signup">アカウントを作成する</Link>
      </div>
    </div>
  );
};

export default Page;
