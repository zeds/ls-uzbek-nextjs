import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full bg-blue-300 h-screen flex justify-center items-center">
      <div className="flex flex-col w-[400px] p-4 bg-yellow-300">
        <div className="my-2">ユーザー名</div>
        <Input type="email" placeholder="ユーザー名" />
        <div className="my-2">パスワード</div>
        <Input type="password" placeholder="パスワード" />

        <Link href="#" class=" my-2 font-medium text-blue-600 hover:underline">
          パスワードを忘れた
        </Link>

        <Button className="mt-4 bg-black text-white" variant="outline">
          ログイン
        </Button>
      </div>
    </div>
  );
};

export default page;
