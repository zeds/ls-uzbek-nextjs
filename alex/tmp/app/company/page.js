"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

const page = () => {
	const router = useRouter();

	const back = () => {
		router.push("./");
	};

	return (
		<header className="w-full h-[50px] bg-blue-200"></header>
	);
};

export default page;

