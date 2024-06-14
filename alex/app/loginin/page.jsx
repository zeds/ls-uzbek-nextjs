
import React from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Linden_Hill } from "next/font/google";
import { Button } from "@/components/ui/button";


const login = () => {
  return (
    <div className="w-full h-screen bg-pink-300 flex flex-col justify-center items-center">
        <div className="flex flex-col w-[360px] bg-red-500 p-4 gap-y-2">ようこそ手品の世界
            <div className="my-2 font-bold">ユーザー名</div>
            <Input type="email" placeholder="メールアドレス" />
            <div className="my-2 font-bold">パスワード</div>
            <Input type="password" placeholder="パスワード" />
            <Link href="/forgot-password" className="text-blue-400 flex justify-center items-center underline">パスワードを忘れた場合はこちら</Link>
            <Link href="/create-account"　className="text-blue-400 flex justify-center items-center underline">アカウントを作成する</Link>
            <Button className="bg-blue-400 mt-3">ログイン</Button>
        </div>
    </div>
  )
}

export default login; 