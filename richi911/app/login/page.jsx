"use client";
import React, { useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("メッセージ");

  const supabase = createClient();
  const setLogin = useCounterStore((state) => state.setLogin);
  const router = useRouter();

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
      // route.push("/");
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
      // profilesデータを取得
      getProfile(data.user.id);
    }
  };

  return (
    <>
      {/* <div className="pt-[56px]">{JSON.stringify(user)}</div> */}

      <div className="flex justify-center items-center w-full h-screen bg-gray-500">
        <div className="flex flex-col w-[400px] bg-gray-200 p-4 rounded-md">
          <div className="text-lg font-bold flex justify-center">Login</div>
          <div className="my-2 font-semibold">Username:</div>
          <div className="flex">
            <div className="w-10 h-10 mr-0.5 flex items-center justify-center">
              <img src="/person.svg" alt="person" />
            </div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="my-2 font-semibold">Password:</div>
          <div className="flex">
            <div className="w-10 h-10 mr-0.5 flex items-center justify-center">
              <img src="/password.svg" alt="password" />
            </div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div
            onClick={() => router.push("/forgot_password")}
            className="text-blue-500 underline pt-2 text-sm cursor-pointer"
          >
            Forgot password?
          </div>
          <Button onClick={() => clickLogin()} className="mt-5">
            Login
          </Button>
          <div
            onClick={() => router.push("/signup")}
            className="flex justify-end text-blue-500 underline pt-2 text-sm mt-3 cursor-pointer"
          >
            Sign up
          </div>
          <div className="text-red-500">{message}</div>
        </div>
      </div>
    </>
  );
};

export default page;
