"use client";
import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useCounterStore } from "@/store";

const Page = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [message, setMessage] = useState("6文字以上入力する必要があります");
	const supabase = createClient();
	const { setLogin, setUser, user } = useCounterStore();

	const route = useRouter();

	const clickLogin = async () => {
		let { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
		if (error) {
			setMessage("エラーです。");
		} else {
			// profilesデータを取得
			if (data) {
				getProfile(data.user?.id);
			}
		}
	};

	const getProfile = useCallback(async (profileId: any) => {
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
			route.push("/");
		} catch (error) {
			alert("Error loading user data!");
		} finally {
			//   setLoading(false)
		}
	}, []);

	return (
		<div className="flex w-full h-dvh bg-gray-300 justify-center">
			<div className="w-[600px] h-fit bg-gray-400 p-5 mt-[100px] rounded">
				<div className="my-5 text-center">ログイン</div>
				<Input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="メールアドレス"
					className="mb-4"
				/>
				<Input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="パスワード"
				/>
				<div className="my-2 text-center">{message}</div>
				<Button onClick={() => clickLogin()} className="w-full mt-5">
					ログイン
				</Button>
				<div className="my-2 w-full justify-center flex">
					<Link href="/forgot-password">パスワードを忘れた方はこちら</Link>
				</div>
				<div className="my-2w-full justify-center flex">
					<Link href="/signup">アカウントを作成する</Link>
				</div>
			</div>
		</div>
	);
};

export default Page;
