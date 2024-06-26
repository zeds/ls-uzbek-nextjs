
"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Linden_Hill } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";



const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const supabase = createClient();
  const setLogin = useCounterStore((state) => state.setLogin);
  const router = useRouter()
  const clickSignup = async() => {

    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if(error) {
      setMessage("問題ですよ。ユーザーがすでに存在しているかもしれません。");
    }　else{
      setMessage("おめでとう！アカウントが作成しました");
    }
    
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col w-[360px] bg-gray-300 p-4 gap-y-2 rounded ">新しい世界に登録しよう！！！残念って思わないよ！！
            <div className="flex justify-center items-center font-bold">新規登録</div>
            <div className="my-2 font-bold">ユーザー名</div>
            <Input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="メールアドレス" />
            <div className="my-2 font-bold">パスワード</div>
            <Input 
              type="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="パスワード" />
            <Link href="/loginin" className="text-blue-400 flex justify-center items-center underline">アカウントが持っている方はこちら</Link>
            <Button onClick={()=> clickSignup()} className="bg-blue-400 mt-3">アカウント作ろう</Button>
            <div>{message}</div>
        </div> 
    </div>
  )
}

export default login; 