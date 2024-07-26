"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const supabase = createClient();
  const router = useRouter();

  const handlePasswordReset = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setMessage("エラーが発生しました。再度お試しください。");
    } else {
      setMessage("パスワードリセットの指示がメールに送信されました。");
    }
  };

  return (
    <div className="flex w-full h-dvh bg-red-200 justify-center items-center">
      <div className="w-[600px] h-fit bg-green-300 p-5 mt-5">
        <div className="my-5 text-center">パスワードをリセットする</div>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
          className="mb-4"
        />
        <div className="my-2 text-center">{message} </div>
        <Button onClick={handlePasswordReset} className="w-full mt-5">
          リセットリンクを送信
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
