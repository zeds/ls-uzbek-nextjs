"use client";
import React, { useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("メッセージ");

  const supabase = createClient();
  const { setLogin, setUser, user } = useCounterStore();
  const route = useRouter();

  const getProfile = useCallback(async (profileId) => {
    try {
      const { data, error, status } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", profileId)
        .single();

      if (error) {
        throw error;
      }

      setMessage("ログイン成功");
      setUser(data);
      setLogin(true);
      //route.push("/");
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      //   setLoading(false)
    }
  }, []);

  const clickLogin = async () => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setMessage("エラーです。");
    } else {
      getProfile(data.user.id);
    }
  };

  return (
    <>
      <div className="pt-[56px]">{JSON.stringify(user)}</div>

      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col w-[400px] bg-gray-200 p-4 rounded-sm">
          <div className="text-lg font-bold flex justify-center">ログイン</div>
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
          <div
            onClick={() => route.push("/forgot-password")}
            className="underline text-blue-500 text-sm mt-1 cursor-pointer"
          >
            パスワードを忘れた
          </div>
          <Button onClick={() => clickLogin()} className="mt-5">
            ログイン
          </Button>
          <div
            onClick={() => route.push("/signup")}
            className="flex justify-end  underline text-blue-500 text-sm mt-3 cursor-pointer"
          >
            新規登録はこちら
          </div>
          <div className="text-red-500">{message}</div>
        </div>
      </div>
    </>
  );
};

export default Page;
