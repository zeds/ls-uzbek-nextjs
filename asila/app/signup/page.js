"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCounterStore } from "@/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const setLogin = useCounterStore((state) => state.setLogin);
  const router = useRouter();

  const clickLogin = () => {
    setLogin(true);
    route.push("/");
  };
  return (
    <div className="flex items-center justify-center  w-full h-screen">
      <div className="bg-gray-200 mt-4  w-[400px]  p-4">
        <div className="text-lg font-bold flex justify-center"> 新神登録</div>
        <div className="font-bold m-2">ユーザー名</div>
        <Input type="email" placeholder="メールアドレス" />
        <div className="font-bold m-2">パスワード</div>
        <Input type="password" placeholder="パスワード" />
        <Link href="/forgot_password" className=" underline text-blue-600 ">
          パスワードを忘れた
        </Link>
        <Button onClick={() => clickLogin()} className="w-full mt-4">
          ログイン
        </Button>
      </div>
    </div>
  );
};

export default Page;
