"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("123");
  const supabase = createClient();

  const setLogin = useCounterStore((state) => state.setLogin);
  const router = useRouter();

  const clickLogin = async () => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setMessage("問題ですよ。ユーザーがすでに存在しているかもしれません。");
    } else {
      setMessage("ログイン成功です。");
      setLogin(true);
      router.push("/");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col w-[360px] bg-gray-300 p-4 gap-y-2 rounded">
        <div className="flex justify-center items-center font-bold">ようこそ手品の世界</div>
        <div className="flex justify-center items-center font-bold">ログイン</div>
        <div className="my-2 font-bold">ユーザー名</div>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
        />
        <div className="my-2 font-bold">パスワード</div>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
        />
        <Link href="/forgot-password" className="text-blue-400 flex justify-center items-center underline">
          パスワードを忘れた場合はこちら
        </Link>
        <Link href="/signup" className="text-blue-400 flex justify-center items-center underline">
          アカウントを作成する
        </Link>

        <Button onClick={clickLogin} className="bg-blue-400 mt-3">
          ログイン
        </Button>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default login;
