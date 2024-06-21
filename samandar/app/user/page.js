"use client";
import { useCounterStore } from "@/store";
import React from "react";

export default function Page() {
	const user = useCounterStore((state) => state.user);

	return <div className="pt-[56px]">ユーザー情報{JSON.stringify(user)}</div>;
}
