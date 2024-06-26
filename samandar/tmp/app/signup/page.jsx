"use client";
import React, { useState } from "react";
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
	const setLogin = useCounterStore((state) => state.setLogin);
	const route = useRouter();

	const clickSignup = async () => {
		let { data, error } = await supabase.auth.signUp({
			email: email,
			password: password,
		});
		if (error) {
			setMessage("エラーです。");
		} else {
			setMessage("成功！アカウントを作成しました！");
		}
	};

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="flex flex-col w-[400px] bg-green-200 p-4 rounded-sm">
				<div className="text-lg font-bold flex justify-center">
					新規登録
				</div>
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
				<Button onClick={() => clickSignup()} className="mt-5">
					送信
				</Button>
				<div
					onClick={() => route.push("/login1")}
					className="flex justify-end  underline text-blue-500 text-sm mt-3 cursor-pointer"
				>
					ログインはこちら
				</div>
				<div className="text-red-500">{message}</div>
			</div>
		</div>
	);
};

export default Page;
