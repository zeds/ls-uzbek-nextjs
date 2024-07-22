"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
	const [message, setMessage] = useState("6文字以上入力する必要があります");
	return (
		<div className="flex w-full h-dvh bg-red-300 justify-center">
			<div className="w-[600px] h-fit bg-green-400 p-5">
				<div className="my-5 text-center">ログイン</div>
				<Input className="mb-5"></Input>
				<Input></Input>
				<div className="my-2 text-center">{message}</div>
				<Button className="w-full">ログイン</Button>
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
