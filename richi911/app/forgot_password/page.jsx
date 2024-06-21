import React from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500">
      <div className="flex flex-col w-full max-w-xl bg-gray-200 p-4 rounded-md">
        <div className="text-[30px]">パスワード再設定メールを送る</div>
        <div className="my-2 font-bold">メールアドレス</div>
        <Input type="email" placeholder="メールアドレス" />
        登録したメールアドレスを入力してください
        <Button classaaName="mt-5 w-[60px]">送信</Button>
      </div>
    </div>
  );
};

export default page;
