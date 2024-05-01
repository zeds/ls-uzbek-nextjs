"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
	const [name, setName] = useState("tom");

	const [profiles, setProfiles] = useState([
		{ name: "tom", age: 18 },
		{ name: "mexroj", age: 20 },
		{ name: "shox", age: 23 },
		{ name: "alsu", age: 19 },
		{ name: "sarvi", age: 21 },
		{ name: "asila", age: 22 },
	]);

	const clickAdd = () => {
		setProfiles([...profiles, { name: "mike", age: 50 }]);
	};

	const clickEdit = (index) => {
		let newArr = [...profiles];
		newArr[index].age = 50;
		setProfiles(newArr);
	};

	const clickDelete = (index) => {
		let delteValue = [...profiles];
		delteValue.splice(index, 1);
		setProfiles(delteValue);
	};

	return (
		<div className="p-3">
			<div>{JSON.stringify(profiles[3])}</div>
			<div>私の名前は{name}です</div>
			<button
				onClick={() => clickAdd()}
				className="bg-[#00FF00] rounded-md px-2 py-1"
			>
				追加
			</button>
			{profiles.map((item, index) => (
				<div key={index} className="flex m-3 items-center">
					<div className="w-[120px]">名前：{item.name}</div>
					<div className="w-[80px]">年齢：{item.age}</div>
					<button
						onClick={() => clickEdit(index)}
						className="bg-[#00FF00] rounded-md px-2 py-1 mr-2"
					>
						変更
					</button>
					<button
						onClick={() => clickDelete(index)}
						className="bg-[#FF0000] text-white rounded-md px-2 py-1 hover:opacity-70"
					>
						削除
					</button>
				</div>
			))}
		</div>
	);
};

export default Page;
