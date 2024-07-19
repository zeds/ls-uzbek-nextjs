"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
	const [message, setMessage] = useState("6文字以上入力する必要があります");
	return (
		<div className="pt-[56px]">
			<div className="w-10 h-10 bg-green-500">かかか</div>
			<div className="w-full h-dvh bg-red-300">
				<div>ログイン</div>
				<br />
				<Input></Input>
				<Input></Input>
				<div className="">{message}</div>
				<Button>ログイン</Button>
				<br />
				<Link href="/forgot-password">パスワードを忘れた方はこちら</Link>
				<br />
				<Link href="/signup">アカウントを作成する</Link>
			</div>
		</div>
	);
};

export default Page;
