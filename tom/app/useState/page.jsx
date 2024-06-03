"use client";
import { useCounterStore } from "@/store";
import React, { useEffect, useState } from "react";

let update = true;

const Page = () => {
	const count = useCounterStore((state) => state.count);

	const [value, setValue] = useState("useStateの練習をするよ");

	const clickSearch = () => {
		alert("入力された値：" + value);
	};

	return (
		<div className="pt-[56px] bg-red-300 h-screen flex justify-center items-center">
			{count}
			<div className="flex">
				<input
					className="p-2"
					type="text"
					onChange={(e) => setValue(e.target.value)}
				></input>
				<button onClick={clickSearch} className="bg-blue-300 p-3">
					検索
				</button>
			</div>
		</div>
	);
};

export default Page;
