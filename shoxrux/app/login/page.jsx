import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center  w-full h-screen">
      <div className="bg-gray-200 rounded-xl w-[400px] flex flex-col p-4 shadow-lg">
        <div className="my-2 font-bold">ユーザー名</div>
        <Input
          type="email"
          placeholder="メールアドレス"
          className="bg-white placeholder:text-gray-400"
        />
        <div className="my-2 font-bold">パスワード</div>
        <Input
          type="password"
          placeholder="パスワード"
          className="bg-white  placeholder:text-gray-400"
        />
        <Link
          href="./forgot-password"
          className="text-blue-500 underline text-sm mt-1  pt-1"
        >
          パスワードを忘れた
        </Link>
        <Button className="mt-5">ログイン</Button>
      </div>
    </div>
  );
};

export default Page;
