import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center bg-yellow-100 w-full h-screen">
      <div className="bg-gray-200 w-[400px] flex flex-col p-4">
        <div>パスワードを再設定メールを送る</div>
        <div className="my-2 font-bold">メールアドレス</div>
        <Input
          type="email"
          placeholder=""
          className="bg-white placeholder:text-gray-400"
        />
        <p>Qiitaに登録したメールのみ送信可能です。</p>
        <Button className="mt-5 bg-green-500 w-10">送信</Button>
      </div>
    </div>
  );
};

export default Page;
