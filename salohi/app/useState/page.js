"use client";
import React, { useEffect, useState } from "react";

let update = true;

const Page = () => {
	const [value, setValue] = useState("useStateの練習をするよ");

	console.log("1 value=", value);

	// const changeValue = (e) => {
	// 	setValue(e.target.value);
	// };

	const clickSearch = () => {
		alert("押された:" + value)
	};

	return (
		<div className="pt-[56px] bg-red-300 h-screen flex justify-center items-center">
			<div className="flex">
				<input type="text" onChange={(e) => setValue(e.target.value)}></input>
				<button onClick={clickSearch} className="bg-blue-300 p-3">
					検索
				</button>
			</div>
		</div>
	);
};

export default Page;
