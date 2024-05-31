"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
	const [value, setValue] = useState("useStateの練習をするよ");


	const clickSearch = () => {
		alert("押されたばい: " + value);
	};

	return (
		<div className="pt-[56px] bg-blue-300 h-screen flex justify-center items-center">
			<div className="flex">
				<input type="text" onChange={(e) => setValue(e.target.value)}></input>
				<button onClick={clickSearch} className="bg-green-300 p-3">
					検索
				</button>
			</div>
		</div>
	);
};

export default Page;
