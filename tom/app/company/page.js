"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
	const router = useRouter();

	const back = () => {
		router.push("/");
	};

	const name = "tom";

	return (
		<header className="flex w-full h-[56px] bg-blue-200 items-center">
			<div className="bg-red-200 w-10 h-10 p-2">
				<img src="burger.svg"></img>
			</div>
			<button onClick={back}>ああああ</button>
			<Link
				href="/"
				className="bg-orange-200 p-3 border-[2px] border-red-500"
			>
				戻る
			</Link>
		</header>
	);
};

export default page;
