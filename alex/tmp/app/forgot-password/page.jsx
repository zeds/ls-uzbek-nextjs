
"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Linden_Hill } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store";
import { useRouter } from "next/navigation";



const login = () => {

  const setLogin = useCounterStore((state) => state.setLogin);
  const router = useRouter()
  const clickLogin = () => {
    setLogin(true)
    router.push("/")
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col w-[360px] bg-gray-300 p-4 gap-y-2 rounded ">パスワード再設定メール送りましょう
            <div className="my-2 font-bold">メールアドレス</div>
            <Input type="email" placeholder="メールアドレス" />

            <Button onClick={()=> clickLogin()} className="bg-blue-400 mt-3">送信</Button>
        </div>
    </div>
  )
}

export default login; 