"use client";

import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const Page = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const supabase = useMemo(() => createClient(), []);
	const setLogin = useCounterStore((state) => state.setLogin);
	const router = useRouter();

	const clickSignup = async () => {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
		});

		if (error) {
			setMessage(`エラーです: ${error.message}`);
		} else {
			setMessage("成功！アカウントを作成しました！");
		}
	};

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="flex flex-col w-[400px] bg-gray-200 p-4 rounded-sm">
				<div className="text-lg font-bold flex justify-center">
					新規登録
				</div>
				<div className="my-2 font-bold">メールアドレス</div>
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
				<Button onClick={clickSignup} className="mt-5">
					送信
				</Button>
				<div
					onClick={() => router.push("/login")}
					className="flex justify-end underline text-blue-500 text-sm mt-3 cursor-pointer"
				>
					ログインはこちら
				</div>
				<div className="text-red-500">{message}</div>
			</div>
		</div>
	);
};

export default Page;
