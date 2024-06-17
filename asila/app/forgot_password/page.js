import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center  w-full h-screen">
      <div className="bg-gray-200 mt-4  max-w-xl  p-4">
        <div　className="text-[30px]">パスワード再設定メールを送る</div>
        <div className="font-bold m-2">メールアドレス</div>
        <Input type="email" placeholder="メールアドレス" />
          登録したメールアドレスを入力してください
        
        <Button className="w-[60px] flex mt-4">送信</Button>
      </div>
    </div>
  );
};

export default Page;
