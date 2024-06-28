import React from "react";

export default function Articles() {
	const article = [
		{ title: "あいうえお1", img: "./fff.jpg" },
		{ title: "あいうえお2", img: "./fff.jpg" },
		{ title: "あいうえお3", img: "./fff.jpg" },
		{ title: "あいうえお4", img: "./fff.jpg" },
		{ title: "あいうえお5", img: "./fff.jpg" },
		{ title: "あいうえお6", img: "./fff.jpg" },
		{ title: "あいうえお7", img: "./fff.jpg" },
		{ title: "あいうえお8", img: "./fff.jpg" },
		{ title: "あいうえお9", img: "./fff.jpg" },
		{ title: "あいうえお10", img: "./fff.jpg" },
		{ title: "あいうえお11", img: "./fff.jpg" },
		{ title: "あいうえお12", img: "./fff.jpg" },
		{ title: "あいうえお13", img: "./fff.jpg" },
		{ title: "あいうえお14", img: "./fff.jpg" },
		{ title: "あいうえお15", img: "./fff.jpg" },
		{ title: "あいうえお16", img: "./fff.jpg" },
		{ title: "あいうえお17", img: "./fff.jpg" },
		{ title: "あいうえお18", img: "./fff.jpg" },
		{ title: "あいうえお19", img: "./fff.jpg" },
		{ title: "あいうえお20", img: "./fff.jpg" },
	];

	return (
		<div className="w-full grid grid-cols-3 bg-pink-400 gap-3 overflow-y-auto pt-[16px] pl-[260px] pr-5">
			{article.map((item, index) => (
				<div key={index}>
					<img src={item.img} alt="hero" className="rounded-lg" />
					<div className="bg-red-500">{item.title}</div>
				</div>
			))}
		</div>
	);
}
