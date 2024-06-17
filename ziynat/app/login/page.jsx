"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store";
import { useRouter } from "next/navigation";

const Page = () => {
  const setLogin = useCounterStore((state) => state.setLogin);
  const route = useRouter();

  const clickLogin = () => {
    setLogin(true);
    route.push("/");
  };
  return (
    <div className="w-full h-screen bg-purple-200 flex justify-center items-center">
      <div className="flex flex-col w-[400px] bg-yellow-300 p-4">
        <div className="my-2 font-bold">ユーザー名</div>
        <Input type="email" placeholder="メールアドレス" />
        <div className="my-2 font-bold">パスワード</div>
        <Input type="password" placeholder="パスワード" />
        <Link
          href="/forget-password"
          className="text-blue-500 underline text-sm mt-1"
        >
          パスワードを忘れた
        </Link>
        <Button onClick={() => clickLogin()} className="mt-5">
          ログイン
        </Button>
      </div>
    </div>
  );
};
export default Page;
